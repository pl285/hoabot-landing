import Link from "next/link";
import { ContactForm, QuoteLink } from "@/components/ContactForm";
import { PageShell } from "@/components/PageShell";
import {
  DEMO_URL,
  STRIPE_WEBSITE_PORTFOLIO_URL,
  WEBSITE_PORTFOLIO_MIN_COMMUNITIES,
  WEBSITE_PORTFOLIO_MONTHLY_USD,
  pageMetadata,
  usd,
} from "@/lib/site";

export const metadata = pageMetadata({
  title: "For Management Companies",
  description:
    "HOAbot for management companies: fewer routine resident calls across communities, a value-add when boards renew, and zero staff setup. Contact us for chatbot portfolio pricing.",
  path: "/management-companies",
});

const benefits = [
  {
    title: "Fewer routine resident calls",
    body: "Residents ask the questions that are already in the governing documents, including at night and on weekends. Each community you enroll gets answers from its own documents, so managers spend less of the day on repeat calls and emails.",
  },
  {
    title: "A value-add when boards renew",
    body: "You can show a board a resident-facing assistant that answers from that community's documents and cites the page. It is a concrete service on top of the management agreement.",
  },
  {
    title: "Zero staff setup",
    body: "Your team does not configure the bot. For each community, email the PDFs. We build it, usually within about an hour after we receive the documents, on a subdomain or embedded in the community's site.",
  },
];

export default function ManagementCompaniesPage() {
  return (
    <PageShell>
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#17B8B8] font-semibold">Management companies</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0B3558] mt-3 leading-tight">
            One assistant per community, across the portfolio
          </h1>
          <p className="text-xl text-stone-600 mt-6 leading-relaxed">
            HOAbot answers resident questions from each association&apos;s
            governing documents and cites the page. Staff do not build it.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <QuoteLink
              intent="portfolio"
              className="bg-[#17B8B8] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0E9898] transition shadow-lg text-lg"
            >
              Contact us for portfolio pricing
            </QuoteLink>
            <QuoteLink
              intent="demo"
              className="bg-white text-[#17B8B8] px-8 py-4 rounded-full font-semibold hover:bg-cyan-50 transition border-2 border-[#17B8B8] text-lg"
            >
              Book a demo
            </QuoteLink>
          </div>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="bg-gradient-to-br from-cyan-50 to-teal-50 p-6 rounded-2xl"
            >
              <h2 className="text-xl font-bold text-[#0B3558] mb-3">
                {benefit.title}
              </h2>
              <p className="text-stone-600 leading-relaxed">{benefit.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-cyan-100 shadow-lg p-8 md:p-10">
          <h2 className="text-3xl font-bold text-[#0B3558]">Pricing</h2>
          <p className="text-stone-600 text-lg mt-4 leading-relaxed">
            The Essential Plan on the homepage is one community: $199 to set
            up and $39 a month, paid by card. A volume rate for chatbot-only
            portfolios is not listed here. Contact us and we will quote it.
          </p>
          <p className="text-stone-600 text-lg mt-4 leading-relaxed">
            Association websites for management companies with{" "}
            {WEBSITE_PORTFOLIO_MIN_COMMUNITIES} or more communities are{" "}
            {usd(WEBSITE_PORTFOLIO_MONTHLY_USD)} a month per site, with hosting,
            updates, and the chatbot included.{" "}
            <a
              href={STRIPE_WEBSITE_PORTFOLIO_URL}
              className="text-[#17B8B8] font-semibold hover:text-[#0E9898]"
            >
              Buy that plan — {usd(WEBSITE_PORTFOLIO_MONTHLY_USD)}/mo per site
            </a>
            . Other website and project-site prices are on the{" "}
            <Link
              href="/services#website"
              className="text-[#17B8B8] font-semibold hover:text-[#0E9898]"
            >
              Services page
            </Link>
            .
          </p>
          <p className="text-stone-600 mt-4">
            A working example is the Renaissance on Turtle Creek bot in
            Dallas.{" "}
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#17B8B8] font-semibold hover:text-[#0E9898]"
            >
              Open the live demo
            </a>
            .
          </p>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <ContactForm
          defaultIntent="portfolio"
          heading="Book a demo or ask about portfolio pricing"
          intro="Tell us how many communities you manage and whether you want the chatbot, association websites, or both. We reply by email. The form does not charge a card."
        />
      </section>
    </PageShell>
  );
}
