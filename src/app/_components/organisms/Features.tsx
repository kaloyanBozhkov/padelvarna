import { getI18Server } from "@/lib/i18n/server";
import { SectionHeading } from "@/app/_components/atoms/SectionHeading";
import { FeatureCard } from "@/app/_components/molecules/FeatureCard";
import { BarChart3, Users, Trophy } from "lucide-react";

export async function Features() {
  const { t } = await getI18Server();

  const features = [
    { icon: BarChart3, title: t("features.card1Title"), description: t("features.card1Desc") },
    { icon: Users, title: t("features.card2Title"), description: t("features.card2Desc") },
    { icon: Trophy, title: t("features.card3Title"), description: t("features.card3Desc") },
  ];

  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>{t("features.title")}</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
