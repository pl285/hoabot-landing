import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-cyan-50">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
