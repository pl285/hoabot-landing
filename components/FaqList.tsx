import Link from "next/link";
import {
  CONTACT_EMAIL,
  ESSENTIAL_MONTHLY_USD,
  ESSENTIAL_SETUP_USD,
  PROJECT_FLAT_USD,
  PROJECT_INCLUDED_MONTHS,
  PROJECT_MONTHLY_USD,
  PROJECT_RUSH_USD,
  WEBSITE_ANNUAL_USD,
  WEBSITE_MONTHLY_DELTA_USD,
  WEBSITE_MONTHLY_USD,
  WEBSITE_PORTFOLIO_MIN_COMMUNITIES,
  WEBSITE_PORTFOLIO_MONTHLY_USD,
  WEBSITE_SETUP_USD,
  usd,
} from "@/lib/site";

const items: { question: string; answer: React.ReactNode }[] = [
  {
    question: "How long does setup take?",
    answer: (
      <p>
        Usually within about an hour after we receive your PDFs, and often
        within 30–60 minutes. You send the documents. We set the bot up. You
        get an email when it is live.
      </p>
    ),
  },
  {
    question: "Do residents need to log in?",
    answer: (
      <p>
        Residents open a link on any device. They do not create an account,
        choose a password, or install an app.
      </p>
    ),
  },
  {
    question: "What if the documents do not cover the question?",
    answer: (
      <p>
        Every answer cites the document and page, and the resident can check
        that source. If the answer is not in the documents you provided, the
        bot says &quot;I don&apos;t see this in the community documents.&quot;{" "}
        <Link href="/security" className="text-[#17B8B8] font-semibold">
          Read how accuracy works
        </Link>
        .
      </p>
    ),
  },
  {
    question: "Can we update documents?",
    answer: (
      <p>
        Email the new PDFs to {CONTACT_EMAIL}. The bot is updated within 24
        hours. Updates are included with the plan.
      </p>
    ),
  },
  {
    question: "Can we cancel anytime?",
    answer: (
      <p>
        The Essential Plan has no long-term contract. Email {CONTACT_EMAIL} to
        cancel. Updates and cancellation are handled by email. We offer a
        30-day money-back guarantee. The refund terms are in the{" "}
        <Link href="/terms" className="text-[#17B8B8] font-semibold">
          Terms of Service
        </Link>
        .
      </p>
    ),
  },
  {
    question: "Can we add the bot to our existing website?",
    answer: (
      <p>
        Yes. We send simple embed code you can paste into your site, or we
        install it for you at no extra charge. The bot can also live at a
        subdomain such as yourname.hoabot.ai.
      </p>
    ),
  },
  {
    question: "How much does the chatbot cost?",
    answer: (
      <p>
        The Essential Plan for one community is {usd(ESSENTIAL_SETUP_USD)}{" "}
        one-time plus {usd(ESSENTIAL_MONTHLY_USD)} a month. It includes
        unlimited documents and email support. The {usd(ESSENTIAL_MONTHLY_USD)}{" "}
        monthly price stays locked for as long as that subscription remains
        active.
      </p>
    ),
  },
  {
    question: "Do you publish pricing for management companies?",
    answer: (
      <p>
        A volume rate for the chatbot-only Essential Plan is not listed.
        Contact us and we will quote it. Association websites for management
        companies with {WEBSITE_PORTFOLIO_MIN_COMMUNITIES} or more communities
        are {usd(WEBSITE_PORTFOLIO_MONTHLY_USD)} a month per site.{" "}
        <Link
          href="/management-companies"
          className="text-[#17B8B8] font-semibold"
        >
          See the management-company page
        </Link>
        .
      </p>
    ),
  },
  {
    question: "Do you build association websites or project sites?",
    answer: (
      <p>
        Yes. An association website with the chatbot included is{" "}
        {usd(WEBSITE_SETUP_USD)} to set up and {usd(WEBSITE_MONTHLY_USD)} a
        month, or {usd(WEBSITE_ANNUAL_USD)} prepaid for the year with setup
        waived. That monthly price is {usd(WEBSITE_MONTHLY_DELTA_USD)} more
        than the chatbot alone, and it includes hosting and updates. A project
        or special-assessment site is {usd(PROJECT_FLAT_USD)} for{" "}
        {PROJECT_INCLUDED_MONTHS} months, then {usd(PROJECT_MONTHLY_USD)} a
        month to keep it up. A one-week rush is {usd(PROJECT_RUSH_USD)} extra.
        Buy from the{" "}
        <Link href="/services" className="text-[#17B8B8] font-semibold">
          Services
        </Link>{" "}
        page, or{" "}
        <Link href="/services#quote" className="text-[#17B8B8] font-semibold">
          request a quote
        </Link>
        .
      </p>
    ),
  },
];

export function FaqList() {
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <details
          key={item.question}
          className="bg-white rounded-xl shadow-sm border border-stone-200 p-6 group"
        >
          <summary className="font-semibold text-lg text-[#0B3558] cursor-pointer list-none flex items-center justify-between gap-4">
            {item.question}
            <span className="text-[#17B8B8] group-open:rotate-180 transition">
              ▼
            </span>
          </summary>
          <div className="text-stone-600 mt-4 leading-relaxed">{item.answer}</div>
        </details>
      ))}
    </div>
  );
}
