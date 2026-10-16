import Link from "next/link";
import { ContactForm, QuoteLink } from "@/components/ContactForm";
import { PageShell } from "@/components/PageShell";
import {
  ProjectPriceCard,
  WebsitePriceCard,
} from "@/components/ServiceCards";
import {
  ESSENTIAL_MONTHLY_USD,
  WEBSITE_MONTHLY_DELTA_USD,
  pageMetadata,
  usd,
} from "@/lib/site";

export const metadata = pageMetadata({
  title: "HOA Websites and Project Sites",
  description:
    "Association websites with HOA Bot built in, from $499 setup and $49 a month, and project or special-assessment microsites for $1,500. Request a quote.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#17B8B8] font-semibold">Services</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0B3558] mt-3 leading-tight">
            A website for the association, or a site for one project
          </h1>
          <p className="text-xl text-stone-600 mt-6 leading-relaxed">
            Both are done for you, alongside the HOA Bot chatbot. The
            association website is {usd(WEBSITE_MONTHLY_DELTA_USD)} a month
            more than the chatbot-only plan ({usd(ESSENTIAL_MONTHLY_USD)}
            /month). Buy with the buttons on each plan, or request a quote
            and we will reply by email.
          </p>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
          <WebsitePriceCard
            quote={
              <QuoteLink
                intent="website"
                className="text-[#17B8B8] font-semibold hover:text-[#0E9898]"
              >
                Request a quote
              </QuoteLink>
            }
          />
          <ProjectPriceCard
            quote={
              <QuoteLink
                intent="project"
                className="text-[#17B8B8] font-semibold hover:text-[#0E9898]"
              >
                Request a quote
              </QuoteLink>
            }
          />
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0B3558] mb-4">
            What you send us
          </h2>
          <p className="text-stone-600 text-lg leading-relaxed">
            Email the documents and the facts that should appear on the site:
            governing documents for an association website, or the project
            description, timeline, costs, and files for a special assessment,
            major project, or vote. We build the site and the chatbot. Your
            staff does not set it up.
          </p>
          <p className="text-stone-600 text-lg leading-relaxed mt-4">
            Managing a portfolio?{" "}
            <Link
              href="/management-companies"
              className="text-[#17B8B8] font-semibold hover:text-[#0E9898]"
            >
              See HOAbot for management companies
            </Link>
            . Chatbot-only portfolio rates are quoted separately. Website
            pricing for firms with 10 or more communities is on the card
            above.
          </p>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <ContactForm
          defaultIntent="website"
          heading="Request a quote"
          intro="Use this if you want to talk before you pay. The buy buttons above go to Stripe. This form opens an email, and it does not charge a card."
        />
      </section>
    </PageShell>
  );
}
