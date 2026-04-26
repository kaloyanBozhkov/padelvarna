export const locales = ["en", "bg", "uk", "ru"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
export const fallbackLng = defaultLocale;
export const defaultNS = "common";

export const getOptions = (lng: Locale = fallbackLng, ns: string | string[] = defaultNS) => ({
  supportedLngs: locales,
  fallbackLng,
  lng,
  ns,
  defaultNS,
});

export const localeNames: Record<Locale, string> = {
  en: "English",
  bg: "Bulgarian",
  uk: "Ukrainian",
  ru: "Russian",
};

export const localeFlags: Record<Locale, string> = {
  en: "\uD83C\uDDEC\uD83C\uDDE7",
  bg: "\uD83C\uDDE7\uD83C\uDDEC",
  uk: "\uD83C\uDDFA\uD83C\uDDE6",
  ru: "\uD83C\uDDF7\uD83C\uDDFA",
};
