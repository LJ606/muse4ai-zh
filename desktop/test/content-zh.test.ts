import { describe, expect, it } from "vitest";
import { contentRoot, forbiddenClaims, missingTranslations, strings, zhCoverageProblems } from "@content/validate";

// Chinese coverage for the website/guide content (content/). This lives in desktop/test — not next to
// content/content.test.ts — because CI only runs the desktop suite, and content/content.test.ts cannot even load in
// this checkout: its "sample media (P5)" section reads docs/build-3.0/evidence/media/ledger.json, which is absent
// from upstream HEAD (pre-existing gap, unrelated to Chinese). These three checks are the zh-relevant part of that
// file, runnable here.

describe("content: Chinese coverage (AC-CNT-01-zh)", () => {
  it("English and Vietnamese translations are intact", () => {
    expect(missingTranslations(contentRoot())).toEqual([]);
  });

  it("no forbidden claims in content, in any locale", () => {
    expect(forbiddenClaims(strings(contentRoot()))).toEqual([]);
  });

  it("every visible string exists in Chinese", () => {
    expect(zhCoverageProblems()).toEqual([]);
  });
});
