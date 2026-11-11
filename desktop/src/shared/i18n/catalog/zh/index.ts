import type { CatalogZh } from "../../index";
import api from "./api";
import main from "./main";
import shared from "./shared";
import ui from "./ui";
import updates from "./updates";

// Chinese for every Vietnamese UI text, split by where the text lives (renderer, main process, shared rules, agent
// API) — the same split as the English catalog. A key may appear in more than one part only with the same Chinese
// (checked by test/i18n-catalog-zh.test.ts). A key missing here falls back to its English entry (see i18n/index.ts).
export const CATALOG_ZH_PARTS: Record<string, CatalogZh> = { shared, main, api, ui, updates };
export const CATALOG_ZH: CatalogZh = Object.assign(Object.create(null) as CatalogZh, shared, main, api, ui, updates);
