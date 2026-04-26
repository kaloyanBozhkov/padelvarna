import { Avatar } from "@/app/_components/atoms/Avatar";
import { RankBadge } from "@/app/_components/atoms/RankBadge";
import { cn } from "@/utils/cn";

type PodiumCardProps = {
  rank: number;
  name: string;
  team: string;
  pts: number;
  wl: string;
};

export function PodiumCard({ rank, name, team, pts, wl }: PodiumCardProps) {
  return (
    <div
      className={cn(
        "bg-bg-card border border-border rounded-lg p-6 flex flex-col items-center text-center",
        rank === 1 && "border-yellow-500/30 md:-mt-4",
        rank === 2 && "border-gray-400/30",
        rank === 3 && "border-amber-600/30"
      )}
    >
      <RankBadge rank={rank} size="lg" />
      <Avatar initials={name.split(" ").map((n) => n[0]).join("")} size="lg" className="mt-4" />
      <h3 className="font-semibold text-white mt-3">{name}</h3>
      <p className="text-text-muted text-sm">{team}</p>
      <div className="mt-3 text-primary font-bold text-xl">{pts} PTS</div>
      <div className="text-text-muted text-xs mt-1">{wl}</div>
    </div>
  );
}
