import { getI18Server } from "@/lib/i18n/server";
import { Button } from "@/app/_components/atoms/Button";
import { StatItem } from "@/app/_components/atoms/StatItem";

export async function Hero() {
  const { t, lng } = await getI18Server();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-bg pt-16">
      {/* Diagonal streak decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-[600px] bg-primary/5 rotate-12 skew-x-12" />
        <div className="absolute top-1/3 -left-10 w-64 h-[400px] bg-white/[0.02] -rotate-12 skew-x-6" />
        <div className="absolute bottom-0 right-1/4 w-48 h-[300px] bg-primary/[0.03] rotate-45" />
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="inline-block border border-primary/30 bg-primary/5 px-4 py-1.5 rounded-full mb-6">
          <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">
            {t("hero.tag")}
          </span>
        </div>

        <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-wider mb-6">
          {t("hero.headline")}
        </h1>

        <p className="text-text-muted text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          {t("hero.subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button variant="primary" size="lg" href={`/${lng}/leaderboard`}>
            {t("hero.ctaLeaderboard")}
          </Button>
          <Button variant="outline" size="lg" href={`/${lng}/teams`}>
            {t("hero.ctaTeam")}
          </Button>
        </div>

        <div className="flex items-center justify-center gap-8 md:gap-16">
          <StatItem value="120+" label={t("hero.statPlayers")} />
          <div className="w-px h-10 bg-border" />
          <StatItem value="24" label={t("hero.statTeams")} />
          <div className="w-px h-10 bg-border" />
          <StatItem value="50+" label={t("hero.statMatches")} />
        </div>
      </div>
    </section>
  );
}
