import { createInstance } from "i18next";
import { headers } from "next/headers";
import resourcesToBackend from "i18next-resources-to-backend";
import { defaultLocale, defaultNS, getOptions, type Locale } from "./config";

export async function getLocale(): Promise<Locale> {
  const h = await headers();
  return (h.get("x-locale") as Locale) || defaultLocale;
}

export async function getI18Server(ns: string | string[] = defaultNS) {
  const lng = await getLocale();
  const i18nInstance = createInstance();
  await i18nInstance
    .use(
      resourcesToBackend(
        (language: string) => import(`./locales/${language}/common.json`)
      )
    )
    .init(getOptions(lng, ns));
  return { t: i18nInstance.getFixedT(lng), i18n: i18nInstance, lng };
}

export async function getI18nForLocale(lng: Locale, ns: string | string[] = defaultNS) {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(
      resourcesToBackend(
        (language: string) => import(`./locales/${language}/common.json`)
      )
    )
    .init(getOptions(lng, ns));
  return { t: i18nInstance.getFixedT(lng), i18n: i18nInstance, lng };
}
