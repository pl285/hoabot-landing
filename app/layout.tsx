import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HOAbot.ai - AI Assistant for Your HOA",
  description: "Residents get instant answers from your bylaws and rules — 24/7. Save 10+ hours per week with automated HOA support.",
  keywords: "HOA, AI assistant, chatbot, bylaws, rules, condo association, property management",
  openGraph: {
    title: "HOAbot.ai - AI Assistant for Your HOA",
    description: "Residents get instant answers from your bylaws and rules — 24/7",
    url: "https://hoabot.ai",
    siteName: "HOAbot.ai",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
