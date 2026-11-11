import { describe, expect, it } from "vitest";
import { CATALOG } from "../src/shared/i18n/catalog";
import { CATALOG_ZH, CATALOG_ZH_PARTS } from "../src/shared/i18n/catalog/zh";

// Chinese coverage: every Vietnamese UI text in the source has a Chinese entry, with the same placeholders as its
// key. Mirrors test/i18n-catalog.test.ts (AC-I18N-03) for the zh catalog; a missing key falls back to English at
// runtime (see i18n/index.ts) but this test stays red until the translation is complete.

const PH = /\{(\w+)\}/g;
const names = (s: string) => new Set([...s.matchAll(PH)].map((m) => m[1]));

describe("AC-I18N-03-zh Chinese translation coverage", () => {
  it("every Vietnamese text in the source has a Chinese entry", () => {
    const missing = Object.keys(CATALOG).filter((k) => CATALOG_ZH[k] === undefined);
    expect(missing, `missing Chinese for ${missing.length} keys:\n${missing.slice(0, 20).join("\n")}`).toEqual([]);
  });

  it("Chinese entries use only placeholders their key has, and drop none", () => {
    const bad: string[] = [];
    for (const [key, zh] of Object.entries(CATALOG_ZH)) {
      if (typeof zh !== "string") continue;
      const k = names(key);
      const z = names(zh);
      for (const n of z) if (!k.has(n)) bad.push(`${JSON.stringify(key)} → ${JSON.stringify(zh)} (unknown {${n}})`);
      for (const n of k) if (!z.has(n)) bad.push(`${JSON.stringify(key)} → ${JSON.stringify(zh)} (drops {${n}})`);
    }
    expect(bad, bad.join("\n")).toEqual([]);
  });

  it("no Chinese entry still contains Vietnamese, uses plural syntax, or disagrees across parts", () => {
    const vi = /[ăâđêôơưạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]/i;
    const leftovers = Object.entries(CATALOG_ZH).filter(([, zh]) => typeof zh === "string" && vi.test(zh)).map(([k]) => k);
    expect(leftovers).toEqual([]);
    const pluralSyntax = Object.entries(CATALOG_ZH).filter(([, zh]) => typeof zh === "string" && /\{\w+\|[^|{}]*\|[^|{}]*\}/.test(zh)).map(([k]) => k);
    expect(pluralSyntax, `zh must use plain {placeholder}, never {n|one|other}: ${pluralSyntax.join(", ")}`).toEqual([]);
    const seen = new Map<string, unknown>();
    const conflicts: string[] = [];
    for (const [part, cat] of Object.entries(CATALOG_ZH_PARTS))
      for (const [k, v] of Object.entries(cat)) {
        if (seen.has(k) && seen.get(k) !== v) conflicts.push(`${part}: ${JSON.stringify(k)}`);
        seen.set(k, v);
      }
    expect(conflicts).toEqual([]);
  });
});
