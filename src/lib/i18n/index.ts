import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { defaultLocale, defaultNS, fallbackLng } from "./config";
import en from "./locales/en/common.json";
import bg from "./locales/bg/common.json";
import uk from "./locales/uk/common.json";
import ru from "./locales/ru/common.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { common: en },
    bg: { common: bg },
    uk: { common: uk },
    ru: { common: ru },
  },
  lng: defaultLocale,
  fallbackLng,
  defaultNS,
  interpolation: { escapeValue: false },
});

export default i18n;
