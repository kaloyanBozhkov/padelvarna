import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer text-sm",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-black hover:bg-primary-dark",
        outline:
          "border border-primary text-primary hover:bg-primary/10",
        ghost:
          "text-white hover:text-primary",
      },
      size: {
        sm: "px-4 py-2 text-xs",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonProps = VariantProps<typeof buttonVariants> & {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
};

export function Button({ children, variant, size, href, className, onClick }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
