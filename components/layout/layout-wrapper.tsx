import { Footer } from "./footer";
import { Header } from "./header";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

export function LayoutWrapper({
  children,
}: LayoutWrapperProps) {
  return (
    <>
      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
}