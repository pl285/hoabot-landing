import Image from "next/image";
import Link from "next/link";
import { CONTACT_EMAIL, footerNav } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <Image
              src="/hoabot-logo.png"
              alt="HOAbot.ai"
              width={1143}
              height={392}
              className="h-8 w-auto"
            />
            <p className="mt-4">AI assistant for HOAs and condos</p>
            <p className="mt-2 text-sm">Paul Mecca, Founder · Dallas, TX</p>
          </div>

          <nav className="flex flex-col gap-2">
            {footerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-white transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="hover:text-white transition"
            >
              {CONTACT_EMAIL}
            </a>
            <p className="mt-3 text-sm">
              <a
                href="https://demo.hoabot.ai"
                className="hover:text-white transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live demo
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-stone-800 text-sm">
          <p>© 2026 HOAbot.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
