export const locales = ["en", "bg"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "bg";
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
};
