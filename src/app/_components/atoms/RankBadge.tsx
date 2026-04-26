import { cn } from "@/utils/cn";

type RankBadgeProps = {
  rank: number;
  size?: "sm" | "lg";
};

export function RankBadge({ rank, size = "sm" }: RankBadgeProps) {
  const colors =
    rank === 1
      ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      : rank === 2
        ? "bg-gray-300/20 text-gray-300 border-gray-400/30"
        : rank === 3
          ? "bg-amber-600/20 text-amber-500 border-amber-600/30"
          : "bg-white/5 text-text-muted border-border";

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full border font-bold",
        colors,
        size === "sm" ? "w-8 h-8 text-sm" : "w-12 h-12 text-lg"
      )}
    >
      {rank}
    </div>
  );
}
