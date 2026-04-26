import { Avatar } from "@/app/_components/atoms/Avatar";

type PlayerCardProps = {
  initials: string;
  name: string;
  role: string;
  wl: string;
  points: number;
};

export function PlayerCard({ initials, name, role, wl, points }: PlayerCardProps) {
  return (
    <div className="bg-bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-colors">
      <div className="flex items-center gap-4 mb-3">
        <Avatar initials={initials} size="lg" />
        <div>
          <h4 className="font-semibold text-white">{name}</h4>
          <p className="text-text-muted text-sm">{role}</p>
        </div>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-text-muted">W-L: <span className="text-white">{wl}</span></span>
        <span className="text-text-muted">PTS: <span className="text-primary font-bold">{points}</span></span>
      </div>
    </div>
  );
}
