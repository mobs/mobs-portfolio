import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";

export default function HomePage() {
  return (
    <Section className="flex min-h-[calc(100vh-4rem)] items-center">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Portfolio v2
          </p>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Building the next version.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            The foundation is complete. The product-grade interface will be
            built in the upcoming phases.
          </p>
        </div>
      </Container>
    </Section>
  );
}