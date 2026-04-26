import { Navbar } from "@/app/_components/organisms/Navbar";
import { Footer } from "@/app/_components/organisms/Footer";
import { LanguageSelector } from "@/app/_components/organisms/LanguageSelector";
import { getI18Server } from "@/lib/i18n/server";
import { Avatar } from "@/app/_components/atoms/Avatar";
import { SectionHeading } from "@/app/_components/atoms/SectionHeading";
import { PlayerCard } from "@/app/_components/molecules/PlayerCard";
import { MatchCard } from "@/app/_components/molecules/MatchCard";
import { AchievementCard } from "@/app/_components/molecules/AchievementCard";
import { Trophy, Flame, Target } from "lucide-react";

const teamData = {
  name: "TEAM VIPER",
  initials: "VP",
  founded: "2024",
  location: "Varna, Bulgaria",
  rank: 1,
  matches: 86,
  winRate: "78%",
  points: 8420,
  season: "2026",
  roster: [
    { initials: "DI", name: "Dimitar Ivanov", role: "Captain", wl: "42-8", points: 2840 },
    { initials: "NS", name: "Nikolai Stoyanov", role: "Player", wl: "35-15", points: 2480 },
    { initials: "VG", name: "Viktor Georgiev", role: "Player", wl: "22-16", points: 1650 },
    { initials: "AK", name: "Anton Kovachev", role: "Player", wl: "18-12", points: 1450 },
  ],
  recentMatches: [
    { date: "Apr 20, 2026", team1: "Team Viper", team2: "Black Aces", score: "6-3, 6-4", result: "win" as const },
    { date: "Apr 15, 2026", team1: "Team Viper", team2: "Coastal Smash", score: "7-5, 6-3", result: "win" as const },
    { date: "Apr 10, 2026", team1: "Net Crushers", team2: "Team Viper", score: "6-4, 7-6", result: "loss" as const },
    { date: "Apr 5, 2026", team1: "Team Viper", team2: "Padel Kings", score: "6-2, 6-1", result: "win" as const },
  ],
  achievements: [
    { icon: Trophy, title: "Season Champion", description: "Won the 2025 Autumn Season Championship" },
    { icon: Flame, title: "10-Win Streak", description: "Achieved 10 consecutive match victories" },
    { icon: Target, title: "Perfect Set", description: "Won a set 6-0 in a tournament final" },
  ],
};

export default async function TeamPage() {
  const { t } = await getI18Server();

  const stats = [
    { label: t("team.statsRank"), value: `#${teamData.rank}` },
    { label: t("team.statsMatches"), value: String(teamData.matches) },
    { label: t("team.statsWinRate"), value: teamData.winRate },
    { label: t("team.statsPoints"), value: teamData.points.toLocaleString() },
    { label: t("team.statsSeason"), value: teamData.season },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Team Header */}
        <div className="relative h-48 md:h-64 bg-gradient-to-b from-primary/10 to-bg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 flex items-end gap-4">
            <Avatar initials={teamData.initials} size="xl" />
            <div>
              <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl tracking-wider">
                {teamData.name}
              </h1>
              <p className="text-text-muted text-sm">
                {t("team.founded")} {teamData.founded} &middot; {teamData.location}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-lg md:text-xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-text-muted uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
          {/* Team Roster */}
          <section>
            <SectionHeading>
              {t("team.roster")} &middot; {teamData.roster.length} {t("team.players")}
            </SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {teamData.roster.map((player) => (
                <PlayerCard
                  key={player.name}
                  initials={player.initials}
                  name={player.name}
                  role={player.role === "Captain" ? t("team.captain") : t("team.player")}
                  wl={player.wl}
                  points={player.points}
                />
              ))}
            </div>
          </section>

          {/* Recent Matches */}
          <section>
            <SectionHeading>{t("team.recentMatches")}</SectionHeading>
            <div className="space-y-3">
              {teamData.recentMatches.map((match, i) => (
                <MatchCard
                  key={i}
                  date={match.date}
                  team1={match.team1}
                  team2={match.team2}
                  score={match.score}
                  result={match.result}
                  vsLabel={t("team.vs")}
                  winLabel={t("team.win")}
                  lossLabel={t("team.loss")}
                />
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section>
            <SectionHeading>{t("team.achievements")}</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {teamData.achievements.map((a) => (
                <AchievementCard key={a.title} icon={a.icon} title={a.title} description={a.description} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <LanguageSelector />
    </>
  );
}
