import Link, { LinkProps } from "next/link";
import { cn } from "@/lib/cn";

interface AppLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

export function AppLink({
  children,
  className,
  ...props
}: AppLinkProps) {
  return (
    <Link
      {...props}
      className={cn(
        "transition-colors hover:text-white",
        className
      )}
    >
      {children}
    </Link>
  );
}