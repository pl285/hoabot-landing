"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { primaryNav } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-cyan-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
        <Link href="/" className="shrink-0">
          <Image
            src="/hoabot-logo.png"
            alt="HOAbot.ai"
            width={1143}
            height={392}
            priority
            className="h-24 sm:h-28 md:h-32 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex flex-wrap items-center gap-x-5 gap-y-2">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-stone-600 hover:text-[#17B8B8] transition text-sm font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/#pricing"
            className="bg-[#17B8B8] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#0E9898] transition shadow-sm"
          >
            Get Started
          </Link>
          <button
            type="button"
            className="lg:hidden border border-cyan-200 text-[#0B3558] px-4 py-2 rounded-full text-sm font-semibold"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {open ? (
          <nav
            id="site-menu"
            className="lg:hidden w-full border-t border-cyan-100 pt-3 flex flex-col gap-1"
          >
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-stone-700 font-medium py-2"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
