import Link from "next/link";
import {
  ESSENTIAL_MONTHLY_USD,
  ESSENTIAL_SETUP_USD,
  PROJECT_FLAT_USD,
  PROJECT_INCLUDED_MONTHS,
  PROJECT_MONTHLY_USD,
  PROJECT_RUSH_USD,
  STRIPE_PROJECT_EXTENSION_URL,
  STRIPE_PROJECT_RUSH_URL,
  STRIPE_PROJECT_URL,
  STRIPE_WEBSITE_ANNUAL_URL,
  STRIPE_WEBSITE_PORTFOLIO_URL,
  STRIPE_WEBSITE_URL,
  WEBSITE_ANNUAL_USD,
  WEBSITE_MONTHLY_DELTA_USD,
  WEBSITE_MONTHLY_USD,
  WEBSITE_PORTFOLIO_MIN_COMMUNITIES,
  WEBSITE_PORTFOLIO_MONTHLY_USD,
  WEBSITE_SETUP_USD,
  usd,
} from "@/lib/site";

const buyButtonClass =
  "block w-full bg-[#17B8B8] text-white text-center px-8 py-4 rounded-full font-bold hover:bg-[#0E9898] transition shadow-lg text-lg";

const altBuyClass =
  "block w-full text-center px-8 py-3 rounded-full font-semibold text-[#0B3558] border border-stone-300 hover:border-[#17B8B8] hover:text-[#17B8B8] transition";

export function WebsitePriceCard({ quote }: { quote: React.ReactNode }) {
  return (
    <article
      id="website"
      className="scroll-mt-56 bg-white rounded-3xl shadow-xl border border-cyan-100 p-8 flex flex-col"
    >
      <p className="text-sm font-semibold text-[#17B8B8] uppercase tracking-wide">
        Association website
      </p>
      <h3 className="text-2xl font-bold text-[#0B3558] mt-2">
        Website + HOA Bot
      </h3>
      <p className="text-stone-600 mt-3">
        A modern site we build and host, with the chatbot built in.
      </p>

      <div className="mt-6">
        <p>
          <span className="text-5xl font-bold text-[#0B3558]">
            {usd(WEBSITE_SETUP_USD)}
          </span>
          <span className="text-stone-500 text-lg ml-2">one-time setup</span>
        </p>
        <p className="text-stone-400 my-2">+</p>
        <p>
          <span className="text-5xl font-bold text-[#0B3558]">
            {usd(WEBSITE_MONTHLY_USD)}
          </span>
          <span className="text-stone-500 text-lg">/month</span>
        </p>
        <p className="text-stone-600 mt-3">
          Or prepay {usd(WEBSITE_ANNUAL_USD)} for the year and the setup fee
          is waived.
        </p>
      </div>

      <div className="mt-6 bg-cyan-50 rounded-2xl p-4 text-[#0B3558]">
        <p className="font-semibold">
          Add a full website for {usd(WEBSITE_MONTHLY_DELTA_USD)}/month more
        </p>
        <p className="text-sm mt-1 text-stone-600">
          The chatbot-only Essential Plan is {usd(ESSENTIAL_SETUP_USD)} to set
          up and {usd(ESSENTIAL_MONTHLY_USD)}/month. This plan is{" "}
          {usd(WEBSITE_MONTHLY_USD)}/month and includes that chatbot, plus
          hosting and updates.
        </p>
      </div>

      <ul className="space-y-3 my-6 text-stone-700">
        <li>Documents, announcements, board info, and a contact page</li>
        <li>HOA Bot chatbot built into the site</li>
        <li>Hosting and updates included</li>
        <li>
          Management companies with {WEBSITE_PORTFOLIO_MIN_COMMUNITIES}+
          communities: {usd(WEBSITE_PORTFOLIO_MONTHLY_USD)}/month per site
        </li>
      </ul>

      <div className="mt-auto space-y-3">
        <a href={STRIPE_WEBSITE_URL} className={buyButtonClass}>
          Buy website — {usd(WEBSITE_SETUP_USD)} + {usd(WEBSITE_MONTHLY_USD)}/mo
        </a>
        <a href={STRIPE_WEBSITE_ANNUAL_URL} className={altBuyClass}>
          Prepay the year — {usd(WEBSITE_ANNUAL_USD)}, setup waived
        </a>
        <a href={STRIPE_WEBSITE_PORTFOLIO_URL} className={altBuyClass}>
          {WEBSITE_PORTFOLIO_MIN_COMMUNITIES}+ communities —{" "}
          {usd(WEBSITE_PORTFOLIO_MONTHLY_USD)}/mo per site
        </a>
        <p className="text-center pt-1">{quote}</p>
      </div>
    </article>
  );
}

export function ProjectPriceCard({ quote }: { quote: React.ReactNode }) {
  return (
    <article
      id="project"
      className="scroll-mt-56 bg-white rounded-3xl shadow-xl border border-cyan-100 p-8 flex flex-col"
    >
      <p className="text-sm font-semibold text-[#17B8B8] uppercase tracking-wide">
        One-off microsite
      </p>
      <h3 className="text-2xl font-bold text-[#0B3558] mt-2">
        Project & special assessment
      </h3>
      <p className="text-stone-600 mt-3">
        For a special assessment, a major project, or a vote. Residents get
        the timeline, the costs, the documents, and a bot trained on those
        project documents.
      </p>

      <div className="mt-6">
        <p>
          <span className="text-5xl font-bold text-[#0B3558]">
            {usd(PROJECT_FLAT_USD)}
          </span>
        </p>
        <p className="text-stone-600 mt-1">
          Flat fee, live for {PROJECT_INCLUDED_MONTHS} months.
        </p>
        <p className="text-stone-600 mt-3">
          Then {usd(PROJECT_MONTHLY_USD)}/month to keep it up.
        </p>
        <p className="text-stone-600 mt-3">
          Optional 1-week rush: +{usd(PROJECT_RUSH_USD)}.
        </p>
      </div>

      <ul className="space-y-3 my-6 text-stone-700">
        <li>Explains the project, timeline, and costs</li>
        <li>FAQ and project documents on the site</li>
        <li>Chatbot trained on the project documents</li>
        <li>Built to cut down resident confusion and pushback</li>
      </ul>

      <div className="mt-auto space-y-3">
        <a href={STRIPE_PROJECT_URL} className={buyButtonClass}>
          Buy project site — {usd(PROJECT_FLAT_USD)}
        </a>
        <a href={STRIPE_PROJECT_EXTENSION_URL} className={altBuyClass}>
          Keep it up — {usd(PROJECT_MONTHLY_USD)}/mo
        </a>
        <a href={STRIPE_PROJECT_RUSH_URL} className={altBuyClass}>
          Add a 1-week rush — {usd(PROJECT_RUSH_USD)}
        </a>
        <p className="text-center pt-1">{quote}</p>
      </div>
    </article>
  );
}

const quoteClass = "text-[#17B8B8] font-semibold hover:text-[#0E9898]";

export function ServiceQuoteLinks() {
  return (
    <>
      <WebsitePriceCard
        quote={
          <Link href="/services?intent=website#quote" className={quoteClass}>
            Request a quote
          </Link>
        }
      />
      <ProjectPriceCard
        quote={
          <Link href="/services?intent=project#quote" className={quoteClass}>
            Request a quote
          </Link>
        }
      />
    </>
  );
}
