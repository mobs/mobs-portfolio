import Link from "next/link";

import { ThemeToggle } from "@/components/ui";

import { Container } from "./container";

import { navigation, siteConfig } from "@/config";

export function Header() {
  return (
    <header className="border-default sticky top-0 z-50 border-b bg-[rgb(var(--background)/0.75)] backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-sm font-semibold tracking-tight">
            {siteConfig.shortName}
          </Link>

          <div className="flex items-center gap-4">
            <nav className="hidden items-center gap-8 md:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted hover:text-foreground text-sm transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}
