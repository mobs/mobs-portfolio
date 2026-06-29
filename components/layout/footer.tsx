import { Container } from "./container";
import { siteConfig } from "@/config";

export function Footer() {
  return (
    <footer className="border-t border-default">
      <Container>
        <div className="flex h-24 items-center justify-between text-sm text-muted">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}
          </span>

          <span>Built with Next.js</span>
        </div>
      </Container>
    </footer>
  );
}