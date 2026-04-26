type StatItemProps = {
  value: string;
  label: string;
};

export function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="text-center">
      <div className="text-2xl md:text-3xl font-bold text-white">{value}</div>
      <div className="text-xs md:text-sm text-text-muted uppercase tracking-wider mt-1">{label}</div>
    </div>
  );
}
