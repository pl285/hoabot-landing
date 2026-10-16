/**
 * TODO(paul): LEGAL REVIEW REQUIRED before this page is treated as binding.
 * Template only. It is not legal advice. Confirm the legal entity name,
 * sub-processors, retention, and whether resident questions are stored.
 */
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { CONTACT_EMAIL, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How HOAbot.ai handles contact details, payment information, community documents, and resident questions.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      description="This policy describes what HOAbot.ai collects on this website and while providing the chatbot and related website services."
    >
      <LegalSection title="Who we are">
        <p>
          HOAbot.ai (&quot;HOAbot,&quot; &quot;we&quot;) provides an AI chatbot
          that answers resident questions from an association&apos;s documents,
          and done-for-you association websites and project sites described on
          this site. HOAbot is based in Dallas, Texas. The legal entity name
          behind the service should be confirmed with us before you rely on
          this policy in a contract.
        </p>
        <p>
          Contact{" "}
          <a className="text-[#17B8B8] font-semibold" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="Information you give us">
        <p>
          If you buy the Essential Plan, checkout runs on Stripe. Stripe
          collects payment details. We receive the checkout information Stripe
          shares with us, such as your name and email, so we can set up the
          bot and reach you. Full card numbers are handled by Stripe, not
          stored on hoabot.ai.
        </p>
        <p>
          You may email us community documents, logos, and updated PDFs. We
          use those files to build and update your bot or, if you hire us for
          a website or project site, to build that site.
        </p>
        <p>
          The quote and demo form on this site does not submit to a HOAbot
          server. It opens a message in your email app addressed to{" "}
          {CONTACT_EMAIL}. We receive whatever you then send.
        </p>
      </LegalSection>

      <LegalSection title="Resident questions">
        <p>
          Residents open a link. They do not create a HOAbot account. A
          question they type is processed so the bot can answer from the
          documents you provided. A fixed retention period for those questions
          is not published here. Email us if you need one before you buy.
        </p>
        <p>
          Treat the bot like a page you share with residents. Include a
          document only if you are comfortable with the bot answering from it.
        </p>
      </LegalSection>

      <LegalSection title="How we use information">
        <p>
          We use this information to set up and run the bot, host a website or
          project site you request, send setup and support email, process the
          Essential Plan subscription, and reply to demo, portfolio, and quote
          requests.
        </p>
      </LegalSection>

      <LegalSection title="Who else receives it">
        <p>
          Stripe processes Essential Plan payments. We email you from the
          addresses published on this site, including {CONTACT_EMAIL} and
          setup@hoabot.ai. A list of other sub-processors, including any model
          or hosting provider, is not published on this page. Ask us for that
          list if a board or management company needs it before purchasing.
        </p>
        <p>
          We do not sell personal information. This template states that as
          the operating practice. Counsel should confirm the wording before
          you treat it as a statutory notice.
        </p>
      </LegalSection>

      <LegalSection title="How long we keep documents">
        <p>
          We keep the documents we need to run your bot or site while that
          service is active. After you cancel, email {CONTACT_EMAIL} to ask us
          to delete those documents and related questions. We will confirm the
          deletion in the reply. A numeric retention schedule is not stated on
          this site.
        </p>
      </LegalSection>

      <LegalSection title="This marketing site">
        <p>
          You do not create an account to read hoabot.ai. The current site
          code does not embed a third-party analytics product. If that
          changes, this policy should be updated.
        </p>
      </LegalSection>

      <LegalSection title="Children">
        <p>
          The service is for homeowners associations, condominiums, and the
          companies that manage them. It is not directed at children under 13.
        </p>
      </LegalSection>

      <LegalSection title="Changes and contact">
        <p>
          We will post changes on this page and update the date above. Questions:{" "}
          <a className="text-[#17B8B8] font-semibold" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          . See also the{" "}
          <Link href="/security" className="text-[#17B8B8] font-semibold">
            Security & Accuracy
          </Link>{" "}
          page and the{" "}
          <Link href="/terms" className="text-[#17B8B8] font-semibold">
            Terms of Service
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
