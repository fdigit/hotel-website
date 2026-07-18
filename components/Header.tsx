"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { site } from "@/lib/site";

const navigation = [
  { href: "/rooms", label: "Stay" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Gather" },
  { href: "/contact", label: "Find us" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{ viewTransitionName: "site-header" }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-black/8 bg-[#fbf8f1]/95 shadow-[0_10px_35px_rgba(35,21,12,.08)] backdrop-blur-xl"
          : "border-white/10 bg-[#fbf8f1]/92 backdrop-blur-lg"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1380px] items-center justify-between px-5 md:px-10 lg:px-14">
        <Link href="/" aria-label="JAVIN Hotels Limited home" className="group flex items-center gap-3">
          <BrandLogo className="h-11 w-11 md:h-12 md:w-12" priority />
          <span className="hidden border-l border-[#c69b45]/35 pl-3 sm:block">
            <span className="block font-headline-md text-[17px] font-semibold tracking-[0.12em] text-[#3a1018]">
              JAVIN HOTELS
            </span>
            <span className="block text-[9px] font-semibold uppercase tracking-[0.28em] text-[#9b742d]">
              Port Harcourt
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-underline text-[13px] font-semibold uppercase tracking-[0.16em] text-[#3e3530] transition hover:text-[#6a1024]"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#5a0c1d] px-6 py-3 text-[12px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_10px_24px_rgba(90,12,29,.2)] transition hover:-translate-y-0.5 hover:bg-[#74142a]"
          >
            Reserve direct
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#5a0c1d]/15 text-[#5a0c1d] lg:hidden"
        >
          <span className="material-symbols-outlined">{isOpen ? "close" : "menu"}</span>
        </button>
      </div>

      {isOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="animate-mobile-nav-in border-t border-black/5 bg-[#fbf8f1] px-5 py-6 shadow-xl lg:hidden"
        >
          <div className="mx-auto flex max-w-[1380px] flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 font-headline-md text-2xl text-[#321017] transition hover:bg-[#f2eadc]"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-4 rounded-full bg-[#5a0c1d] px-6 py-4 text-center text-sm font-bold uppercase tracking-[0.14em] text-white"
            >
              Reserve on WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
