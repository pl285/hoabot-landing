import type { Metadata } from "next";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const description =
  "Residents get instant 24/7 answers from your HOA's governing documents, with the document and page cited. Done-for-you setup. Essential Plan: $199 one-time plus $39 a month.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "HOAbot.ai — AI Assistant for Your HOA",
    template: `%s · ${SITE_NAME}`,
  },
  description,
  keywords:
    "HOA, AI assistant, chatbot, bylaws, rules, condo association, property management, HOA website, special assessment",
  openGraph: {
    title: "HOAbot.ai — AI Assistant for Your HOA",
    description,
    url: "/",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [{ url: "/hoabot-logo.png", alt: SITE_NAME }],
  },
  twitter: {
    card: "summary",
    title: "HOAbot.ai — AI Assistant for Your HOA",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script dangerouslySetInnerHTML={{__html: `
          if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
          }
          var home = location.pathname === '/' || location.pathname === '';
          function scrollToHash() {
            var hash = location.hash;
            if (!hash) return;
            try {
              var el = document.querySelector(hash);
              if (el && el.scrollIntoView) el.scrollIntoView();
            } catch (e) {}
          }
          if (home) {
            // The live demo calls scrollIntoView on load, which also scrolls
            // this page. A style tag keeps the lock through React hydration
            // (setting overflow on <html> directly gets wiped). Remove it
            // after the demo's opening scroll has finished.
            var lock = document.createElement('style');
            lock.id = 'demo-scroll-lock';
            lock.textContent = 'html,body{overflow:hidden !important;height:100% !important}';
            document.head.appendChild(lock);
            var released = false;
            function releaseDemoLock() {
              if (released) return;
              released = true;
              if (lock.parentNode) lock.parentNode.removeChild(lock);
              scrollToHash();
            }
            window.addEventListener('load', function () {
              setTimeout(releaseDemoLock, 800);
            });
            window.addEventListener('wheel', releaseDemoLock, { passive: true, once: true });
            window.addEventListener('touchmove', releaseDemoLock, { passive: true, once: true });
            setTimeout(releaseDemoLock, 8000);
          } else {
            window.addEventListener('load', scrollToHash);
          }
        `}} />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
