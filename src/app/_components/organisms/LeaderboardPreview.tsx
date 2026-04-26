import { getI18Server } from "@/lib/i18n/server";
import { SectionHeading } from "@/app/_components/atoms/SectionHeading";
import { PlayerRow } from "@/app/_components/molecules/PlayerRow";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const players = [
  { rank: 1, name: "Dimitar Ivanov", team: "Team Viper", wl: "42-8", pts: 2840 },
  { rank: 2, name: "Georgi Petrov", team: "Black Aces", wl: "38-12", pts: 2650 },
  { rank: 3, name: "Nikolai Stoyanov", team: "Team Viper", wl: "35-15", pts: 2480 },
  { rank: 4, name: "Aleksander Todorov", team: "Coastal Smash", wl: "30-18", pts: 2210 },
  { rank: 5, name: "Stefan Marinov", team: "Net Crushers", wl: "28-20", pts: 2050 },
];

export async function LeaderboardPreview() {
  const { t, lng } = await getI18Server();

  return (
    <section className="py-16 md:py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>{t("leaderboardPreview.title")}</SectionHeading>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border text-text-muted uppercase tracking-wider text-xs">
                <th className="py-3 px-4">{t("leaderboardPreview.columns.rank")}</th>
                <th className="py-3 px-4">{t("leaderboardPreview.columns.player")}</th>
                <th className="py-3 px-4">{t("leaderboardPreview.columns.team")}</th>
                <th className="py-3 px-4">{t("leaderboardPreview.columns.wl")}</th>
                <th className="py-3 px-4">{t("leaderboardPreview.columns.pts")}</th>
              </tr>
            </thead>
            <tbody>
              {players.map((p) => (
                <PlayerRow key={p.rank} {...p} />
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <Link
            href={`/${lng}/leaderboard`}
            className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline uppercase tracking-wider"
          >
            {t("leaderboardPreview.viewFull")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
