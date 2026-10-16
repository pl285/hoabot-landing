import type { Metadata } from "next";

export const SITE_URL = "https://hoabot.ai";
export const SITE_NAME = "HOAbot.ai";

/**
 * TODO(paul): PLACEHOLDER inbox for demo requests, portfolio pricing, and
 * service quotes. This site has no form backend. The contact form opens a
 * mailto link.
 *
 * Replace this constant with the confirmed sales inbox.
 * Addresses already used in this repo:
 * - support@hoabot.ai (public site footer)
 * - setup@hoabot.ai (post-checkout welcome page)
 * - paul@hoabot.ai (Stripe welcome-email signature)
 *
 * Until you confirm a different inbox, the placeholder is the published
 * support address so a message is not sent to an address nobody reads.
 */
export const CONTACT_EMAIL = "support@hoabot.ai";

export const DEMO_URL = "https://demo.hoabot.ai";

/** Existing Essential Plan checkout. Do not change this link. */
export const STRIPE_CHECKOUT_URL =
  "https://buy.stripe.com/8x214p4J7cjMcMUegreME01";

export const STRIPE_WEBSITE_URL =
  "https://buy.stripe.com/00w3cx6RfdnQ14cdcneME02";
export const STRIPE_WEBSITE_ANNUAL_URL =
  "https://buy.stripe.com/3cI9AV4J7erU8wEfkveME03";
export const STRIPE_WEBSITE_PORTFOLIO_URL =
  "https://buy.stripe.com/6oU6oJcbz6Zs0083BNeME04";
export const STRIPE_PROJECT_URL =
  "https://buy.stripe.com/eVq5kF3F3abEdQY0pBeME05";
export const STRIPE_PROJECT_EXTENSION_URL =
  "https://buy.stripe.com/00w8wRejHerU6ow8W7eME06";
export const STRIPE_PROJECT_RUSH_URL =
  "https://buy.stripe.com/3cI4gB3F34Rk5ks0pBeME07";

export const LAST_UPDATED = "October 16, 2026";

/** Chatbot-only Essential Plan. Do not change these or the Stripe link. */
export const ESSENTIAL_SETUP_USD = 199;
export const ESSENTIAL_MONTHLY_USD = 39;

/** Association website with the chatbot included. Approved prices. */
export const WEBSITE_SETUP_USD = 499;
export const WEBSITE_MONTHLY_USD = 49;
/** $49 × 12. Annual prepay waives the setup fee. */
export const WEBSITE_ANNUAL_USD = 588;
export const WEBSITE_MONTHLY_DELTA_USD =
  WEBSITE_MONTHLY_USD - ESSENTIAL_MONTHLY_USD;
export const WEBSITE_PORTFOLIO_MONTHLY_USD = 39;
export const WEBSITE_PORTFOLIO_MIN_COMMUNITIES = 10;

/** One-off project or special-assessment microsite. Approved prices. */
export const PROJECT_FLAT_USD = 1500;
export const PROJECT_INCLUDED_MONTHS = 6;
export const PROJECT_MONTHLY_USD = 99;
export const PROJECT_RUSH_USD = 500;

export function usd(amount: number) {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

export const primaryNav = [
  { href: "/#demo", label: "Demo" },
  { href: "/#features", label: "Features" },
  { href: "/services", label: "Services" },
  { href: "/management-companies", label: "For managers" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
] as const;

export const footerNav = [
  { href: "/services", label: "Services" },
  { href: "/management-companies", label: "For management companies" },
  { href: "/faq", label: "FAQ" },
  { href: "/security", label: "Security & Accuracy" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
] as const;

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const socialTitle = `${title} · ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [{ url: "/hoabot-logo.png", alt: SITE_NAME }],
    },
    twitter: {
      card: "summary",
      title: socialTitle,
      description,
    },
  };
}
