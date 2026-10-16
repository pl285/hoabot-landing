import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Welcome",
    description:
      "Thanks for choosing HOAbot. Check your email for instructions on sending your governing documents.",
    path: "/welcome",
  }),
  robots: { index: false, follow: false },
};

export default function Welcome() {
  return (
    <PageShell>
      <div className="px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border-4 border-[#17B8B8]">
            <div className="text-6xl mb-6">🎉</div>
            <h1 className="text-4xl font-bold text-[#0B3558] mb-4">
              Welcome to HOAbot!
            </h1>
            <p className="text-xl text-stone-600 mb-8">
              Thank you for your purchase. Check your email for next steps!
            </p>

            <div className="bg-cyan-50 rounded-2xl p-6 mb-8 text-left">
              <h2 className="text-lg font-bold text-[#0B3558] mb-4">
                What Happens Next:
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-[#17B8B8] text-xl">1️⃣</span>
                  <p className="text-stone-700">
                    You&apos;ll receive an email asking for your documents
                    (bylaws, rules, etc.)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#17B8B8] text-xl">2️⃣</span>
                  <p className="text-stone-700">
                    We&apos;ll build your custom AI assistant, usually within
                    about an hour after we receive your documents
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#17B8B8] text-xl">3️⃣</span>
                  <p className="text-stone-700">
                    We&apos;ll send you a link to test it before sharing with
                    residents
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-stone-200 pt-6">
              <p className="text-stone-600 mb-4">Questions? Email us at:</p>
              <a
                href="mailto:setup@hoabot.ai"
                className="inline-block bg-[#17B8B8] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0E9898] transition"
              >
                setup@hoabot.ai
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
