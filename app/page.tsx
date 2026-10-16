import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { PageShell } from "@/components/PageShell";
import { ServiceQuoteLinks } from "@/components/ServiceCards";
import {
  DEMO_URL,
  ESSENTIAL_MONTHLY_USD,
  ESSENTIAL_SETUP_USD,
  STRIPE_CHECKOUT_URL,
  WEBSITE_MONTHLY_DELTA_USD,
  usd,
} from "@/lib/site";

export default function Home() {
  return (
    <PageShell>
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-5xl sm:text-6xl font-bold text-[#0B3558] mb-6 leading-tight">
              AI Assistant for Your HOA
            </h1>
            <p className="text-xl sm:text-2xl text-stone-600 mb-8">
              Residents get instant answers from your bylaws, rules, and any
              other docs you want to include — 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#demo"
                className="bg-white text-[#17B8B8] px-8 py-4 rounded-full font-semibold hover:bg-cyan-50 transition border-2 border-[#17B8B8] text-lg"
              >
                See Live Demo
              </a>
              <a
                href="#pricing"
                className="bg-[#17B8B8] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0E9898] transition shadow-lg text-lg"
              >
                Get Started - {usd(ESSENTIAL_MONTHLY_USD)}/mo
              </a>
            </div>
          </div>

          <div id="demo" className="max-w-5xl mx-auto scroll-mt-56">
            <div className="rounded-2xl border-8 border-cyan-100 shadow-2xl bg-white p-3 sm:p-6 lg:p-8">
              {/*
                demo.hoabot.ai is a full page (min-h-dvh) that scrolls its own
                document and calls scrollIntoView on load. A short 4/3 iframe
                made that page scroll inside the box, worst on phones
                (~280×210 showing a ~1,000px page). These heights match the
                demo's resting layout at each width, with room so a scrollbar
                never appears until a conversation is taller than the frame.
              */}
              <iframe
                src={DEMO_URL}
                title="HOAbot Demo"
                allow="clipboard-write"
                className="block w-full rounded-lg border-0 bg-stone-50 h-[1240px] min-[390px]:h-[1160px] min-[480px]:h-[1000px] sm:h-[900px] md:h-[820px] lg:h-[760px]"
              />

              <div className="border-t border-stone-200 pt-6 mt-6">
                <p className="text-stone-600 font-medium mb-3">
                  Try these example questions:
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-cyan-50 text-[#17B8B8] px-4 py-2 rounded-full text-sm font-medium">
                    &quot;What are the parking rules?&quot;
                  </span>
                  <span className="bg-cyan-50 text-[#17B8B8] px-4 py-2 rounded-full text-sm font-medium">
                    &quot;Can I have a pet?&quot;
                  </span>
                  <span className="bg-cyan-50 text-[#17B8B8] px-4 py-2 rounded-full text-sm font-medium">
                    &quot;What are the pool hours?&quot;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#0B3558] mb-4">
            How It Works
          </h2>
          <p className="text-center text-stone-600 text-lg mb-16 max-w-2xl mx-auto">
            Get your AI assistant live in 3 simple steps
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📄</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0B3558] mb-3">
                1. Upload Documents
              </h3>
              <p className="text-stone-600 text-lg">
                Send us your bylaws, rules, and policies (PDFs)
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0B3558] mb-3">
                2. We Deploy Your Bot
              </h3>
              <p className="text-stone-600 text-lg">
                Usually live within about an hour after we receive your
                documents
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎉</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0B3558] mb-3">
                3. Share With Residents
              </h3>
              <p className="text-stone-600 text-lg">
                They get instant answers, with citations
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#pricing"
              className="inline-block bg-[#17B8B8] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0E9898] transition shadow-lg text-lg"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-white scroll-mt-56">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#0B3558] mb-4">
            Why HOAs Love It
          </h2>
          <p className="text-center text-stone-600 text-lg mb-16 max-w-2xl mx-auto">
            Save time, improve resident satisfaction, and reduce workload
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-6 rounded-2xl">
              <div className="text-3xl mb-4">⏰</div>
              <h3 className="text-xl font-bold text-[#0B3558] mb-2">
                Saves Countless Hours
              </h3>
              <p className="text-stone-600">
                For your Board and Management team
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-6 rounded-2xl">
              <div className="text-3xl mb-4">🌙</div>
              <h3 className="text-xl font-bold text-[#0B3558] mb-2">
                24/7 Support
              </h3>
              <p className="text-stone-600">
                Residents get answers any time, from any device
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-6 rounded-2xl">
              <div className="text-3xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-[#0B3558] mb-2">
                Cited Answers
              </h3>
              <p className="text-stone-600">
                Every answer cites the document and page. If the documents
                don&apos;t cover it, the bot says so.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-6 rounded-2xl">
              <div className="text-3xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-[#0B3558] mb-2">
                Easy Updates
              </h3>
              <p className="text-stone-600">
                Just email us new PDFs - live within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#0B3558] mb-16">
            Real Results
          </h2>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-cyan-100 p-8 md:p-12">
            <div className="flex gap-2 mb-6">
              <span className="text-[#17B8B8] text-3xl">&quot;</span>
            </div>
            <blockquote className="text-2xl text-stone-700 mb-8 leading-relaxed">
              HOAbot saves us 10+ hours per week. Residents love getting
              instant answers instead of waiting for callbacks.
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏢</span>
              </div>
              <div>
                <p className="font-semibold text-[#0B3558]">
                  Renaissance on Turtle Creek
                </p>
                <p className="text-stone-600">300-unit luxury condo, Dallas</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-stone-200">
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#17B8B8] font-semibold hover:text-[#0E9898] transition"
              >
                See their live bot
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-white scroll-mt-56">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#0B3558] mb-4">
            Simple Pricing
          </h2>
          <p className="text-center text-stone-600 text-lg mb-16">
            No hidden fees. No long-term contracts. Cancel by emailing
            support@hoabot.ai.
          </p>

          <div className="max-w-md mx-auto">
            <div className="bg-gradient-to-br from-[#17B8B8] to-teal-600 text-white rounded-3xl shadow-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Essential Plan</h3>
                <p className="text-cyan-100 mb-6">Chatbot only, one community</p>
                <div className="mb-2">
                  <span className="text-5xl font-bold">
                    {usd(ESSENTIAL_SETUP_USD)}
                  </span>
                  <span className="text-cyan-100 text-xl ml-2">one-time</span>
                </div>
                <div className="text-cyan-100 text-lg mb-1">+</div>
                <div>
                  <span className="text-5xl font-bold">
                    {usd(ESSENTIAL_MONTHLY_USD)}
                  </span>
                  <span className="text-cyan-100 text-xl">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Unlimited documents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>24/7 AI chatbot</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Subdomain (yourname.hoabot.ai)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Free updates anytime</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Email support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🔒</span>
                  <span>
                    <strong>
                      Lifetime {usd(ESSENTIAL_MONTHLY_USD)}/mo price lock
                    </strong>
                  </span>
                </li>
              </ul>

              <a
                href={STRIPE_CHECKOUT_URL}
                className="block w-full bg-white text-[#17B8B8] text-center px-8 py-4 rounded-full font-bold hover:bg-cyan-50 transition shadow-lg text-lg"
              >
                Get Started Now
              </a>

              <p className="text-center text-cyan-100 text-sm mt-6">
                <Link href="/services#website" className="underline">
                  Add a full website for {usd(WEBSITE_MONTHLY_DELTA_USD)}/mo
                  more
                </Link>
              </p>
            </div>

            <p className="text-center text-stone-500 text-sm mt-8">
              Usually live within about an hour • No contracts • 30-day
              money-back guarantee
            </p>
            <p className="text-center text-stone-600 mt-4">
              <Link
                href="/management-companies"
                className="text-[#17B8B8] font-semibold hover:text-[#0E9898]"
              >
                Managing multiple communities? Contact us for portfolio
                pricing.
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gradient-to-b from-white to-cyan-50 scroll-mt-56">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#0B3558] mb-4">
            Services
          </h2>
          <p className="text-center text-stone-600 text-lg mb-16 max-w-2xl mx-auto">
            Add a full association website for {usd(WEBSITE_MONTHLY_DELTA_USD)}
            /month more than the chatbot alone, or a one-off site for a
            special assessment, major project, or vote.
          </p>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ServiceQuoteLinks />
          </div>
          <p className="text-center mt-8">
            <Link
              href="/services"
              className="text-[#17B8B8] font-semibold hover:text-[#0E9898]"
            >
              Compare the services
            </Link>
          </p>
        </div>
      </section>

      <section id="faq" className="py-20 bg-gradient-to-b from-cyan-50 to-white scroll-mt-56">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#0B3558] mb-16">
            Frequently Asked Questions
          </h2>
          <FaqList />
          <p className="text-center mt-8">
            <Link
              href="/faq"
              className="text-[#17B8B8] font-semibold hover:text-[#0E9898]"
            >
              Read the FAQ page
            </Link>
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#17B8B8] to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Save Your Team Countless Hours?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Residents get answers from your governing documents, any time of
            day.
          </p>
          <a
            href="#pricing"
            className="inline-block bg-white text-[#17B8B8] px-10 py-5 rounded-full font-bold hover:bg-cyan-50 transition shadow-xl text-xl"
          >
            Get Started - {usd(ESSENTIAL_SETUP_USD)} + {usd(ESSENTIAL_MONTHLY_USD)}
            /mo
          </a>
          <p className="text-cyan-100 mt-6">
            Usually live within about an hour • 30-day guarantee
          </p>
          <p className="mt-4">
            <Link href="/management-companies#quote" className="underline">
              Management company? Book a demo
            </Link>
          </p>
        </div>
      </section>
    </PageShell>
  );
}
