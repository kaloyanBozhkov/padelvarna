import { getI18Server } from "@/lib/i18n/server";

export async function FooterSimple() {
  const { t } = await getI18Server();

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-[family-name:var(--font-heading)] text-sm tracking-[0.2em] text-white">
          PADEL VARNA
        </span>
        <span className="text-text-muted text-xs">&copy; {t("footer.copyright")}</span>
        <div className="flex items-center gap-4 text-text-muted text-xs">
          <span className="hover:text-white transition-colors cursor-pointer">{t("footer.discord")}</span>
          <span className="hover:text-white transition-colors cursor-pointer">{t("footer.instagram")}</span>
          <span className="hover:text-white transition-colors cursor-pointer">{t("footer.facebook")}</span>
        </div>
      </div>
    </footer>
  );
}
