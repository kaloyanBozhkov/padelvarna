import { Badge } from "@/app/_components/atoms/Badge";

type MatchCardProps = {
  date: string;
  team1: string;
  team2: string;
  score: string;
  result: "win" | "loss";
  vsLabel: string;
};

export function MatchCard({ date, team1, team2, score, result, vsLabel }: MatchCardProps) {
  return (
    <div className="bg-bg-card border border-border rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        <span className="text-text-muted text-xs">{date}</span>
        <div className="flex items-center gap-2 text-sm">
          <span className="font-medium text-white">{team1}</span>
          <span className="text-text-muted">{vsLabel}</span>
          <span className="font-medium text-white">{team2}</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="font-bold text-white">{score}</span>
        <Badge variant={result}>{result === "win" ? "WIN" : "LOSS"}</Badge>
      </div>
    </div>
  );
}
