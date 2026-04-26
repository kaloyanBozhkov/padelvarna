"use client";

import { type ReactNode, useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";
import { type Locale, locales } from "@/lib/i18n/config";

export function I18nProvider({ children, lng }: { children: ReactNode; lng: Locale }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (locales.includes(lng)) i18n.changeLanguage(lng);
    setIsReady(true);
  }, [lng]);

  if (!isReady) return null;

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
