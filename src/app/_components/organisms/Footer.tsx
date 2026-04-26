import { getI18Server } from "@/lib/i18n/server";
import Link from "next/link";

export async function Footer() {
  const { t, lng } = await getI18Server();

  const quickLinks = [
    { href: `/${lng}/leaderboard`, label: t("nav.leaderboard") },
    { href: `/${lng}/teams`, label: t("nav.teams") },
    { href: `/${lng}/tournaments`, label: t("nav.tournaments") },
    { href: `/${lng}/about`, label: t("nav.about") },
  ];

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-lg tracking-[0.2em] text-white mb-3">
              {t("footer.brand")}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">{t("footer.brandDesc")}</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3 uppercase text-sm tracking-wider">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-text-muted text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3 uppercase text-sm tracking-wider">
              {t("footer.community")}
            </h4>
            <ul className="space-y-2">
              <li>
                <span className="text-text-muted text-sm hover:text-white transition-colors cursor-pointer">
                  {t("footer.discord")}
                </span>
              </li>
              <li>
                <span className="text-text-muted text-sm hover:text-white transition-colors cursor-pointer">
                  {t("footer.instagram")}
                </span>
              </li>
              <li>
                <span className="text-text-muted text-sm hover:text-white transition-colors cursor-pointer">
                  {t("footer.facebook")}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3 uppercase text-sm tracking-wider">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-2">
              <li className="text-text-muted text-sm">{t("footer.email")}</li>
              <li className="text-text-muted text-sm">{t("footer.location")}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center text-text-muted text-xs">
          &copy; {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
}
