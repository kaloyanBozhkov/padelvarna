import { getI18Server } from "@/lib/i18n/server";
import { Button } from "@/app/_components/atoms/Button";

export async function CtaSection() {
  const { t, lng } = await getI18Server();

  return (
    <section className="relative py-20 md:py-32 bg-bg overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Diagonal streaks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 right-1/4 w-64 h-[400px] bg-primary/[0.03] rotate-12 skew-x-12" />
        <div className="absolute bottom-0 left-1/3 w-48 h-[300px] bg-white/[0.02] -rotate-6 skew-x-6" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl tracking-wider mb-4">
          {t("cta.heading")}
        </h2>
        <p className="text-text-muted text-base md:text-lg mb-10 max-w-xl mx-auto">
          {t("cta.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="lg" href={`/${lng}/teams`}>
            {t("cta.getStarted")}
          </Button>
          <Button variant="outline" size="lg" href={`/${lng}/about`}>
            {t("cta.learnMore")}
          </Button>
        </div>
      </div>
    </section>
  );
}
