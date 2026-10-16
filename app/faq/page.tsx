import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "FAQ",
  description:
    "Setup time, citations, cancellation, Essential Plan pricing, management-company quotes, and prices for HOA websites and project sites.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <PageShell>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-center text-[#0B3558]">
            Frequently asked questions
          </h1>
          <p className="text-center text-stone-600 text-lg mt-4 mb-12">
            Setup, accuracy, pricing, and how to cancel.
          </p>
          <FaqList />
          <p className="text-stone-600 mt-10 leading-relaxed">
            More detail:{" "}
            <Link href="/security" className="text-[#17B8B8] font-semibold">
              Security & Accuracy
            </Link>
            ,{" "}
            <Link href="/privacy" className="text-[#17B8B8] font-semibold">
              Privacy Policy
            </Link>
            , and{" "}
            <Link href="/terms" className="text-[#17B8B8] font-semibold">
              Terms of Service
            </Link>
            .
          </p>
        </div>
      </section>
    </PageShell>
  );
}
