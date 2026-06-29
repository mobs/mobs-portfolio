import { cn } from "@/lib/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        [
          "rounded-3xl",
          "border",
          "border-default",
          "bg-[rgb(var(--surface))]",
          "transition-all",
          "duration-300",
          "hover:-translate-y-1",
          "hover:bg-[rgb(var(--surface-elevated))]",
        ],
        className
      )}
    >
      {children}
    </div>
  );
}