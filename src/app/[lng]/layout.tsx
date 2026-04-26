import { I18nProvider } from "@/providers/i18n-provider";
import { locales, type Locale } from "@/lib/i18n/config";

export function generateStaticParams() {
  return locales.map((lng) => ({ lng }));
}

export default async function LngLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;
  return <I18nProvider lng={lng as Locale}>{children}</I18nProvider>;
}
