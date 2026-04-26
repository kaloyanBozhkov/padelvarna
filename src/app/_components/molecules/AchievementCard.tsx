import type { LucideIcon } from "lucide-react";

type AchievementCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function AchievementCard({ icon: Icon, title, description }: AchievementCardProps) {
  return (
    <div className="bg-bg-card border border-border rounded-lg p-5 flex items-start gap-4 hover:border-primary/30 transition-colors">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <h4 className="font-semibold text-white mb-1">{title}</h4>
        <p className="text-text-muted text-sm">{description}</p>
      </div>
    </div>
  );
}
