import { PageShell } from "@/components/PageShell";
import { LAST_UPDATED } from "@/lib/site";

export function LegalPage({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <PageShell>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-[#17B8B8] font-semibold">{eyebrow}</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#0B3558] mt-3">
          {title}
        </h1>
        <p className="text-xl text-stone-600 mt-4 leading-relaxed">{description}</p>
        <p className="text-stone-500 text-sm mt-3">Last updated {LAST_UPDATED}</p>
        <div className="mt-10 space-y-8 text-stone-700 leading-relaxed text-lg">
          {children}
        </div>
      </article>
    </PageShell>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-[#0B3558] mb-3">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
