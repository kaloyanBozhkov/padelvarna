import { getI18Server } from "@/lib/i18n/server";

export default async function Home() {
  const { t } = await getI18Server();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">{t("app.title")}</h1>
    </main>
  );
}
