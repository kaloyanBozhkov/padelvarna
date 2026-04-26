import { cn } from "@/utils/cn";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <div className={cn("flex items-center gap-4 mb-8", className)}>
      <div className="w-1 h-8 bg-primary rounded-full" />
      <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl uppercase tracking-wider text-white">
        {children}
      </h2>
    </div>
  );
}
