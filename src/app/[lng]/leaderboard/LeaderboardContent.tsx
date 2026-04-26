"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { PodiumCard } from "@/app/_components/molecules/PodiumCard";
import { RankBadge } from "@/app/_components/atoms/RankBadge";
import { cn } from "@/utils/cn";

const topPlayers = [
  { rank: 1, name: "Dimitar Ivanov", team: "Team Viper", pts: 2840, wl: "42-8", matches: 50, winPct: "84%" },
  { rank: 2, name: "Georgi Petrov", team: "Black Aces", pts: 2650, wl: "38-12", matches: 50, winPct: "76%" },
  { rank: 3, name: "Nikolai Stoyanov", team: "Team Viper", pts: 2480, wl: "35-15", matches: 50, winPct: "70%" },
];

const tablePlayers = [
  { rank: 4, name: "Aleksander Todorov", team: "Coastal Smash", matches: 48, wl: "30-18", winPct: "63%", pts: 2210 },
  { rank: 5, name: "Stefan Marinov", team: "Net Crushers", matches: 46, wl: "28-18", winPct: "61%", pts: 2050 },
  { rank: 6, name: "Ivan Kolev", team: "Padel Kings", matches: 44, wl: "27-17", winPct: "61%", pts: 1980 },
  { rank: 7, name: "Petar Angelov", team: "Black Aces", matches: 42, wl: "25-17", winPct: "60%", pts: 1870 },
  { rank: 8, name: "Yordan Dimitrov", team: "Coastal Smash", matches: 40, wl: "24-16", winPct: "60%", pts: 1760 },
  { rank: 9, name: "Viktor Georgiev", team: "Team Viper", matches: 38, wl: "22-16", winPct: "58%", pts: 1650 },
  { rank: 10, name: "Martin Hristov", team: "Net Crushers", matches: 36, wl: "20-16", winPct: "56%", pts: 1540 },
  { rank: 11, name: "Kaloyan Vasilev", team: "Padel Kings", matches: 34, wl: "19-15", winPct: "56%", pts: 1430 },
  { rank: 12, name: "Boris Nikolov", team: "Coastal Smash", matches: 32, wl: "18-14", winPct: "56%", pts: 1350 },
  { rank: 13, name: "Hristo Borisov", team: "Black Aces", matches: 30, wl: "16-14", winPct: "53%", pts: 1260 },
  { rank: 14, name: "Vasil Petkov", team: "Net Crushers", matches: 28, wl: "15-13", winPct: "54%", pts: 1180 },
  { rank: 15, name: "Todor Yankov", team: "Padel Kings", matches: 26, wl: "14-12", winPct: "54%", pts: 1100 },
];

export function LeaderboardContent() {
  const { t } = useTranslation();
  const [tab, setTab] = useState<"players" | "teams">("players");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl tracking-wider mb-3">
          {t("leaderboard.title")}
        </h1>
        <p className="text-text-muted">{t("leaderboard.season")}</p>

        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={() => setTab("players")}
            className={cn(
              "px-6 py-2.5 text-sm font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer",
              tab === "players"
                ? "bg-primary text-black"
                : "bg-white/5 text-text-muted hover:text-white"
            )}
          >
            {t("leaderboard.tabPlayers")}
          </button>
          <button
            onClick={() => setTab("teams")}
            className={cn(
              "px-6 py-2.5 text-sm font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer",
              tab === "teams"
                ? "bg-primary text-black"
                : "bg-white/5 text-text-muted hover:text-white"
            )}
          >
            {t("leaderboard.tabTeams")}
          </button>
        </div>
      </div>

      {/* Podium */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 items-end">
        <div className="order-2 md:order-1">
          <PodiumCard {...topPlayers[1]} />
        </div>
        <div className="order-1 md:order-2">
          <PodiumCard {...topPlayers[0]} />
        </div>
        <div className="order-3">
          <PodiumCard {...topPlayers[2]} />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border text-text-muted uppercase tracking-wider text-xs">
              <th className="py-3 px-4">{t("leaderboard.columns.rank")}</th>
              <th className="py-3 px-4">{t("leaderboard.columns.player")}</th>
              <th className="py-3 px-4">{t("leaderboard.columns.team")}</th>
              <th className="py-3 px-4">{t("leaderboard.columns.matches")}</th>
              <th className="py-3 px-4">{t("leaderboard.columns.wl")}</th>
              <th className="py-3 px-4">{t("leaderboard.columns.winPct")}</th>
              <th className="py-3 px-4">{t("leaderboard.columns.points")}</th>
            </tr>
          </thead>
          <tbody>
            {tablePlayers.map((p) => (
              <tr key={p.rank} className="border-b border-border hover:bg-white/[0.02] transition-colors">
                <td className="py-3 px-4"><RankBadge rank={p.rank} /></td>
                <td className="py-3 px-4 font-medium">{p.name}</td>
                <td className="py-3 px-4 text-text-muted">{p.team}</td>
                <td className="py-3 px-4 text-text-muted">{p.matches}</td>
                <td className="py-3 px-4 text-text-muted">{p.wl}</td>
                <td className="py-3 px-4 text-text-muted">{p.winPct}</td>
                <td className="py-3 px-4 font-bold text-primary">{p.pts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
