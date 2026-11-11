import type { L, Locale } from "./types";

/** Picks the string for a locale. Chinese falls back to English where a translation is missing. */
export function pick<T>(value: L<T>, locale: Locale): T {
  if (locale === "zh") return value.zh ?? value.en;
  return locale === "vi" ? value.vi : value.en;
}

/** Shorthand to build an L value. The Chinese text may be added later; it is optional. */
export function l(en: string, vi: string, zh?: string): L {
  return zh === undefined ? { en, vi } : { en, vi, zh };
}

/** "/agents/cursor" → "/vi/agents/cursor" (or "/zh/agents/cursor"); "/" → "/vi" (or "/zh"). */
export function localizedPath(path: string, locale: Locale): string {
  if (locale === "en") return path;
  if (locale === "zh") return path === "/" ? "/zh" : `/zh${path}`;
  return path === "/" ? "/vi" : `/vi${path}`;
}

/** "/vi/agents/cursor" → { locale: "vi", path: "/agents/cursor" }; same for "/zh/…". */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  if (pathname === "/vi" || pathname === "/vi/") return { locale: "vi", path: "/" };
  if (pathname.startsWith("/vi/")) return { locale: "vi", path: pathname.slice(3) };
  if (pathname === "/zh" || pathname === "/zh/") return { locale: "zh", path: "/" };
  if (pathname.startsWith("/zh/")) return { locale: "zh", path: pathname.slice(3) };
  return { locale: "en", path: pathname || "/" };
}

/**
 * Lower-cases and strips Vietnamese diacritics so "hang cho" finds "Hàng chờ"
 * (AC-APP-GUIDE-05, AC-WEB-SRCH-01). Chinese has no diacritics to strip; it matches as written.
 */
export function fold(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase();
}
