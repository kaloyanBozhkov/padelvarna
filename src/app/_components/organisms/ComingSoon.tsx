import { getI18Server } from "@/lib/i18n/server";
import { Clock } from "lucide-react";

export async function ComingSoon() {
  const { t } = await getI18Server();

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
        <Clock className="w-8 h-8 text-primary" />
      </div>
      <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl tracking-wider mb-4">
        {t("comingSoon.title")}
      </h1>
      <p className="text-text-muted text-base md:text-lg max-w-md">{t("comingSoon.subtitle")}</p>
    </div>
  );
}
