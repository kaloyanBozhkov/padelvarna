import { cn } from "@/utils/cn";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "win" | "loss" | "default";
  className?: string;
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-bold uppercase tracking-wider rounded",
        variant === "win" && "bg-primary/20 text-primary",
        variant === "loss" && "bg-red-500/20 text-red-400",
        variant === "default" && "bg-white/10 text-white",
        className
      )}
    >
      {children}
    </span>
  );
}
