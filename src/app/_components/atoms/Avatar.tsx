import { cn } from "@/utils/cn";

type AvatarProps = {
  initials: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

const sizeMap = {
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-16 h-16 text-xl",
  xl: "w-24 h-24 text-3xl",
};

export function Avatar({ initials, size = "md", className }: AvatarProps) {
  return (
    <div
      className={cn(
        "rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center",
        sizeMap[size],
        className
      )}
    >
      {initials}
    </div>
  );
}
