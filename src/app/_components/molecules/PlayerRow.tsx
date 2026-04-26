import { RankBadge } from "@/app/_components/atoms/RankBadge";

type PlayerRowProps = {
  rank: number;
  name: string;
  team: string;
  wl: string;
  pts: number;
};

export function PlayerRow({ rank, name, team, wl, pts }: PlayerRowProps) {
  return (
    <tr className="border-b border-border hover:bg-white/[0.02] transition-colors">
      <td className="py-3 px-4">
        <RankBadge rank={rank} />
      </td>
      <td className="py-3 px-4 font-medium">{name}</td>
      <td className="py-3 px-4 text-text-muted">{team}</td>
      <td className="py-3 px-4 text-text-muted">{wl}</td>
      <td className="py-3 px-4 font-bold text-primary">{pts}</td>
    </tr>
  );
}
