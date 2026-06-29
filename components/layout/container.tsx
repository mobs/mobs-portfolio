import { cn } from "@/lib/cn";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({
  children,
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-350 px-6 md:px-8 lg:px-10",
        className
      )}
    >
      {children}
    </div>
  );
}