/**
 * TODO(paul): LEGAL REVIEW REQUIRED before this page is treated as binding.
 * Template only. It is not legal advice. Confirm in particular:
 * - legal entity name and Texas governing law
 * - whether the 30-day money-back guarantee includes the $199 Essential setup fee
 * - that the guarantee is not stated for website or project-site fees
 * - the lifetime $39/month price lock
 * - the $39/month management-company website checkout is a separate Stripe
 *   link and is not described as also charging the $499 setup fee
 */
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import {
  CONTACT_EMAIL,
  ESSENTIAL_MONTHLY_USD,
  ESSENTIAL_SETUP_USD,
  PROJECT_FLAT_USD,
  PROJECT_INCLUDED_MONTHS,
  PROJECT_MONTHLY_USD,
  PROJECT_RUSH_USD,
  WEBSITE_ANNUAL_USD,
  WEBSITE_MONTHLY_USD,
  WEBSITE_PORTFOLIO_MIN_COMMUNITIES,
  WEBSITE_PORTFOLIO_MONTHLY_USD,
  WEBSITE_SETUP_USD,
  pageMetadata,
  usd,
} from "@/lib/site";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "Terms for the HOAbot Essential Plan, association websites, and project or special-assessment sites.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms of Service"
      description="These terms cover the HOAbot chatbot, association websites, and project sites described on hoabot.ai."
    >
      <LegalSection title="The service">
        <p>
          HOAbot answers resident questions from the documents you provide,
          cites the document and page, and says &quot;I don&apos;t see this in
          the community documents&quot; when those documents do not cover the
          question. The bot is available at a subdomain or embedded on a site.
          Residents do not create accounts. Email updated PDFs to{" "}
          {CONTACT_EMAIL} and the bot is updated within 24 hours.
        </p>
        <p>
          Association websites and project or special-assessment sites are
          separate done-for-you services. We build them from the materials you
          send. Prices for those services are on the{" "}
          <Link href="/services" className="text-[#17B8B8] font-semibold">
            Services
          </Link>{" "}
          page. You can pay with the Stripe buttons on that page, or start with
          the quote form if you want to talk first. The quote form opens an
          email. Work on a quoted job begins when we confirm the scope by
          email. The price on the Stripe page when you pay is the price for
          that link.
        </p>
      </LegalSection>

      <LegalSection title="Essential Plan price">
        <p>
          The Essential Plan listed on this site is {usd(ESSENTIAL_SETUP_USD)}{" "}
          one-time plus {usd(ESSENTIAL_MONTHLY_USD)} a month for one community.
          It includes unlimited documents and email support. The price you see
          on the Stripe checkout page when you pay is the price you agree to
          for that purchase. The site describes a lifetime{" "}
          {usd(ESSENTIAL_MONTHLY_USD)}/month price lock for as long as that
          Essential Plan subscription stays active.
        </p>
        <p>
          A volume price for chatbot-only portfolios is not published.
          Management companies can ask for a quote.
        </p>
      </LegalSection>

      <LegalSection title="Website and project prices">
        <p>
          Association Website + HOA Bot is {usd(WEBSITE_SETUP_USD)} one-time
          setup plus {usd(WEBSITE_MONTHLY_USD)} a month, including hosting,
          updates, and the chatbot. Annual prepay is {usd(WEBSITE_ANNUAL_USD)}{" "}
          for the year, and that option waives the setup fee. Management
          companies with {WEBSITE_PORTFOLIO_MIN_COMMUNITIES} or more
          communities can buy the website plan at{" "}
          {usd(WEBSITE_PORTFOLIO_MONTHLY_USD)} a month per site. That
          management-company checkout is separate from the{" "}
          {usd(WEBSITE_SETUP_USD)} setup plan.
        </p>
        <p>
          A project or special-assessment site is {usd(PROJECT_FLAT_USD)} flat
          for {PROJECT_INCLUDED_MONTHS} months live, then {usd(PROJECT_MONTHLY_USD)}{" "}
          a month to keep it up. An optional one-week rush is an additional{" "}
          {usd(PROJECT_RUSH_USD)}.
        </p>
      </LegalSection>

      <LegalSection title="Your documents">
        <p>
          You represent that you have the right to send us the documents and
          to let the bot answer questions from them for your residents. You
          are responsible for sending the version you want the bot to use.
        </p>
      </LegalSection>

      <LegalSection title="Accuracy">
        <p>
          Answers are a reading aid. They are not legal advice, an
          architectural approval, or a board decision. Residents can check the
          cited page. More detail is on the{" "}
          <Link href="/security" className="text-[#17B8B8] font-semibold">
            Security & Accuracy
          </Link>{" "}
          page.
        </p>
      </LegalSection>

      <LegalSection title="Cancellation and the 30-day guarantee">
        <p>
          The Essential Plan has no long-term contract. Email{" "}
          {CONTACT_EMAIL} to cancel. There is no customer dashboard on
          hoabot.ai. Cancellation and document updates are handled by email.
        </p>
        <p>
          The Essential Plan includes a 30-day money-back guarantee. Email{" "}
          {CONTACT_EMAIL} within 30 days of the initial checkout to cancel and
          request a refund of the Essential Plan charges from that checkout,
          including the one-time setup fee and the first monthly charge. This
          draft covers both charges so the guarantee is not paired with a
          conflicting &quot;setup is non-refundable&quot; rule. After those 30
          days, cancellation stops future monthly charges. Fees already
          charged after the guarantee window are not refunded, except where
          the law requires it.
        </p>
        <p>
          That guarantee is written here for the Essential Plan bought through
          the Stripe checkout on this site. It is not stated for association
          website fees or project-site fees. Those engagements are confirmed
          by email.
        </p>
      </LegalSection>

      <LegalSection title="Acceptable use">
        <p>
          Do not use the service to break the law, to upload documents you
          have no right to share, or to interfere with the site or the bot.
        </p>
      </LegalSection>

      <LegalSection title="Disclaimers and liability">
        <p>
          The service is provided as available. We do not warrant that every
          answer will be error-free or that setup will finish in a specific
          number of minutes. Setup is usually within about an hour after we
          receive your documents, and often within 30–60 minutes. That is an
          expectation, not a deadline you can claim against.
        </p>
        <p>
          To the extent the law allows, HOAbot&apos;s liability arising out of
          these terms is limited to the fees you paid to HOAbot for the
          service at issue during the three months before the claim. This
          limit is template language and needs counsel&apos;s review. It does
          not apply where the law does not allow it.
        </p>
      </LegalSection>

      <LegalSection title="Governing law">
        <p>
          These terms are drafted under the laws of the State of Texas,
          excluding conflict-of-law rules. That venue is a placeholder because
          HOAbot is based in Dallas. Confirm it before relying on this page.
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          We may update these terms by posting a new version on this page.
          Questions:{" "}
          <a className="text-[#17B8B8] font-semibold" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          . The{" "}
          <Link href="/privacy" className="text-[#17B8B8] font-semibold">
            Privacy Policy
          </Link>{" "}
          describes how information is handled.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
