import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { CONTACT_EMAIL, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Security & Accuracy",
  description:
    "HOAbot answers from the documents you send, cites the document and page, and says when those documents do not cover a question.",
  path: "/security",
});

export default function SecurityPage() {
  return (
    <PageShell>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-[#17B8B8] font-semibold">Security & Accuracy</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#0B3558] mt-3">
          Answers come from your documents
        </h1>
        <p className="text-xl text-stone-600 mt-4 leading-relaxed">
          Residents ask in plain English. HOAbot answers from the governing
          documents and other files you give us, and it points to the page.
        </p>

        <div className="mt-12 space-y-10 text-lg text-stone-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-[#0B3558] mb-3">
              How documents are handled
            </h2>
            <p>
              You email the PDFs you want residents to ask about: bylaws,
              rules, policies, and any other community documents you choose to
              include. We use those files to set up your bot. When a document
              changes, email the new PDF. Updates go live within 24 hours and
              are included with the plan.
            </p>
            <p className="mt-3">
              Residents use a link on a subdomain such as yourname.hoabot.ai,
              or a chat embedded on your website. They do not create an
              account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B3558] mb-3">
              Every answer cites its source
            </h2>
            <p>
              An answer cites the document and page it came from, so the
              resident can open that source and check it. The citation is the
              point of the product: owners see the rule that the answer is
              based on.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B3558] mb-3">
              When the documents do not cover it
            </h2>
            <p>
              If the question is not answered in the documents you provided,
              the bot says &quot;I don&apos;t see this in the community
              documents.&quot; It is supposed to stop there, not fill the gap
              with a guess.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#0B3558] mb-3">
              What this page does not claim
            </h2>
            <p>
              HOAbot is a reading aid for the files you supply. It is not a
              lawyer, a board decision, or a substitute for the governing
              documents. A resident should still be able to read the cited
              page.
            </p>
            <p className="mt-3">
              This page describes how the product behaves. HOAbot does not
              publish a security certification on this site. If a board or
              management company needs retention, access, or sub-processor
              details before buying, email{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-[#17B8B8] font-semibold"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </section>

          <p>
            Related:{" "}
            <Link href="/privacy" className="text-[#17B8B8] font-semibold">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="text-[#17B8B8] font-semibold">
              Terms of Service
            </Link>
            .
          </p>
        </div>
      </article>
    </PageShell>
  );
}
