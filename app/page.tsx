export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-cyan-50">
      {/* Header */}
      <header className="border-b border-cyan-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/hoabot-logo.png" alt="HOAbot.ai" className="h-32" />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#demo" className="text-stone-600 hover:text-[#17B8B8] transition">Demo</a>
            <a href="#features" className="text-stone-600 hover:text-[#17B8B8] transition">Features</a>
            <a href="#pricing" className="text-stone-600 hover:text-[#17B8B8] transition">Pricing</a>
            <a href="#faq" className="text-stone-600 hover:text-[#17B8B8] transition">FAQ</a>
          </nav>
          <a 
            href="#pricing" 
            className="bg-[#17B8B8] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#0E9898] transition shadow-sm"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-5xl sm:text-6xl font-bold text-[#0B3558] mb-6 leading-tight">
              AI Assistant for Your HOA
            </h1>
            <p className="text-xl sm:text-2xl text-stone-600 mb-8">
              Residents get instant answers from your bylaws and rules — 24/7
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
                Get Started - $99/mo
              </a>
            </div>
          </div>

          {/* Live Demo - Hero */}
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl border-8 border-cyan-100 shadow-2xl bg-white p-8">
              <iframe 
                src="https://demo.hoabot.ai" 
                className="w-full aspect-[4/3] rounded-lg border-0"
                title="HOAbot Demo"
                allow="clipboard-write"
              />
              
              <div className="border-t border-stone-200 pt-6 mt-6">
                <p className="text-stone-600 font-medium mb-3">Try these example questions:</p>
                <div className="flex flex-wrap gap-3">
                  <button className="bg-cyan-50 text-[#17B8B8] px-4 py-2 rounded-full text-sm font-medium hover:bg-cyan-100 transition">
                    "What are the parking rules?"
                  </button>
                  <button className="bg-cyan-50 text-[#17B8B8] px-4 py-2 rounded-full text-sm font-medium hover:bg-cyan-100 transition">
                    "Can I have a pet?"
                  </button>
                  <button className="bg-cyan-50 text-[#17B8B8] px-4 py-2 rounded-full text-sm font-medium hover:bg-cyan-100 transition">
                    "What are the pool hours?"
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#0B3558] mb-4">How It Works</h2>
          <p className="text-center text-stone-600 text-lg mb-16 max-w-2xl mx-auto">
            Get your AI assistant live in 3 simple steps
          </p>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📄</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0B3558] mb-3">1. Upload Documents</h3>
              <p className="text-stone-600 text-lg">
                Send us your bylaws, rules, and policies (PDFs)
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0B3558] mb-3">2. We Deploy Your Bot</h3>
              <p className="text-stone-600 text-lg">
                Automated setup in 30-60 minutes
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎉</span>
              </div>
              <h3 className="text-2xl font-bold text-[#0B3558] mb-3">3. Share With Residents</h3>
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

      {/* Features */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#0B3558] mb-4">Why HOAs Love It</h2>
          <p className="text-center text-stone-600 text-lg mb-16 max-w-2xl mx-auto">
            Save time, improve resident satisfaction, and reduce workload
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-6 rounded-2xl">
              <div className="text-3xl mb-4">⏰</div>
              <h3 className="text-xl font-bold text-[#0B3558] mb-2">Saves 10+ Hours Per Week</h3>
              <p className="text-stone-600">No more answering the same questions over email</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-6 rounded-2xl">
              <div className="text-3xl mb-4">🌙</div>
              <h3 className="text-xl font-bold text-[#0B3558] mb-2">24/7 Support</h3>
              <p className="text-stone-600">Residents get answers any time, from any device</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-6 rounded-2xl">
              <div className="text-3xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-[#0B3558] mb-2">Always Accurate</h3>
              <p className="text-stone-600">Every answer cites the exact document and page</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-6 rounded-2xl">
              <div className="text-3xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-[#0B3558] mb-2">Easy Updates</h3>
              <p className="text-stone-600">Just email us new PDFs - live within 24 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gradient-to-b from-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#0B3558] mb-16">Real Results</h2>
          
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-cyan-100 p-8 md:p-12">
            <div className="flex gap-2 mb-6">
              <span className="text-[#17B8B8] text-3xl">"</span>
            </div>
            <blockquote className="text-2xl text-stone-700 mb-8 leading-relaxed">
              HOAbot saves us 10+ hours per week. Residents love getting instant answers instead of waiting for callbacks.
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏢</span>
              </div>
              <div>
                <p className="font-semibold text-[#0B3558]">Renaissance on Turtle Creek</p>
                <p className="text-stone-600">300-unit luxury condo, Dallas</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-stone-200">
              <a 
                href="https://rtc-assistant.vercel.app" 
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

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#0B3558] mb-4">Simple Pricing</h2>
          <p className="text-center text-stone-600 text-lg mb-16">
            No hidden fees. No long-term contracts. Cancel anytime.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="bg-gradient-to-br from-[#17B8B8] to-teal-600 text-white rounded-3xl shadow-2xl p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                LAUNCH PRICING
              </div>
              
              <div className="text-center mt-4 mb-8">
                <h3 className="text-2xl font-bold mb-6">Essential</h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold">$999</span>
                  <span className="text-cyan-100 text-xl ml-2">one-time</span>
                </div>
                <div className="text-cyan-100 text-lg mb-1">+</div>
                <div>
                  <span className="text-5xl font-bold">$99</span>
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
                  <span>Email support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <span>Updates anytime</span>
                </li>
              </ul>

              <a 
                href="https://buy.stripe.com/test_placeholder" 
                className="block w-full bg-white text-[#17B8B8] text-center px-8 py-4 rounded-full font-bold hover:bg-cyan-50 transition shadow-lg text-lg"
              >
                Get Started Now
              </a>
              
              <p className="text-center text-cyan-100 text-sm mt-6">
                First 20 customers only • Then $1,499 + $149/mo
              </p>
            </div>
            
            <p className="text-center text-stone-500 text-sm mt-8">
              Live in 1 hour • No contracts • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gradient-to-b from-cyan-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#0B3558] mb-16">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <details className="bg-white rounded-xl shadow-sm border border-stone-200 p-6 group">
              <summary className="font-semibold text-lg text-[#0B3558] cursor-pointer list-none flex items-center justify-between">
                How long does setup take?
                <span className="text-[#17B8B8] group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-stone-600 mt-4 leading-relaxed">
                30-60 minutes. You just send us your PDFs, we handle everything else. You'll receive an email when your bot is live.
              </p>
            </details>

            <details className="bg-white rounded-xl shadow-sm border border-stone-200 p-6 group">
              <summary className="font-semibold text-lg text-[#0B3558] cursor-pointer list-none flex items-center justify-between">
                Do residents need to log in?
                <span className="text-[#17B8B8] group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-stone-600 mt-4 leading-relaxed">
                No - the bot works instantly from any device. No accounts, no passwords, no downloads. Just share the link.
              </p>
            </details>

            <details className="bg-white rounded-xl shadow-sm border border-stone-200 p-6 group">
              <summary className="font-semibold text-lg text-[#0B3558] cursor-pointer list-none flex items-center justify-between">
                What if it gives wrong answers?
                <span className="text-[#17B8B8] group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-stone-600 mt-4 leading-relaxed">
                Every answer cites the exact document and page number. Residents can click to verify the source. If the answer isn't in your documents, the bot says "I don't see this in the community documents."
              </p>
            </details>

            <details className="bg-white rounded-xl shadow-sm border border-stone-200 p-6 group">
              <summary className="font-semibold text-lg text-[#0B3558] cursor-pointer list-none flex items-center justify-between">
                Can we update documents?
                <span className="text-[#17B8B8] group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-stone-600 mt-4 leading-relaxed">
                Yes - just email us new PDFs and we'll update your bot within 24 hours. Updates are included at no extra charge.
              </p>
            </details>

            <details className="bg-white rounded-xl shadow-sm border border-stone-200 p-6 group">
              <summary className="font-semibold text-lg text-[#0B3558] cursor-pointer list-none flex items-center justify-between">
                Can we cancel anytime?
                <span className="text-[#17B8B8] group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-stone-600 mt-4 leading-relaxed">
                Yes - no long-term contracts. You can cancel your subscription anytime from your dashboard. The $999 setup fee is non-refundable.
              </p>
            </details>

            <details className="bg-white rounded-xl shadow-sm border border-stone-200 p-6 group">
              <summary className="font-semibold text-lg text-[#0B3558] cursor-pointer list-none flex items-center justify-between">
                Can we add it to our existing website?
                <span className="text-[#17B8B8] group-open:rotate-180 transition">▼</span>
              </summary>
              <p className="text-stone-600 mt-4 leading-relaxed">
                Yes! We provide simple embed code you can paste into your website, or we can install it for you for $199.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[#17B8B8] to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Save 10+ Hours Per Week?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Join HOAs across the country using AI to improve resident satisfaction
          </p>
          <a 
            href="#pricing" 
            className="inline-block bg-white text-[#17B8B8] px-10 py-5 rounded-full font-bold hover:bg-cyan-50 transition shadow-xl text-xl"
          >
            Get Started - $999 + $99/mo
          </a>
          <p className="text-cyan-100 mt-6">
            Live in 1 hour • No contracts • First 20 get launch pricing
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img src="/hoabot-logo.png" alt="HOAbot.ai" className="h-8" />
            </div>
            
            <p className="text-center">
              AI Assistant for HOAs & Condos
            </p>

            <div className="flex items-center gap-6">
              <a href="mailto:support@hoabot.ai" className="hover:text-white transition">
                support@hoabot.ai
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-stone-800 text-center text-sm">
            <p>© 2026 HOAbot.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
