import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[#1d1613] text-[#f7f0e4]">
      <div className="border-b border-white/10">
        <div className="mx-auto grid max-w-[1380px] gap-12 px-5 py-16 md:px-10 lg:grid-cols-[1.3fr_.7fr_.9fr] lg:px-14 lg:py-20">
          <div>
            <Link href="/" aria-label="JAVIN Hotels Limited home" className="inline-flex max-w-full items-center gap-3 sm:gap-4">
              <BrandLogo className="h-16 w-16 shrink-0 sm:h-20 sm:w-20" />
              <span>
                <span className="block font-headline-md text-xl tracking-[0.08em] sm:text-2xl sm:tracking-[0.1em]">JAVIN HOTELS</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#d4ad60]">Limited</span>
              </span>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/65">
              A considered hospitality experience in Rumuepirikom, created for restful stays,
              easy connection and memorable moments in Port Harcourt.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={site.instagram} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] transition hover:border-[#d4ad60] hover:text-[#d4ad60]">Instagram</a>
              <a href={site.facebook} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-5 py-2 text-xs font-bold uppercase tracking-[0.16em] transition hover:border-[#d4ad60] hover:text-[#d4ad60]">Facebook</a>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d4ad60]">Explore</p>
            <nav className="mt-6 flex flex-col gap-4 text-sm text-white/70" aria-label="Footer navigation">
              <Link href="/rooms" className="transition hover:text-white">Rooms & stays</Link>
              <Link href="/gallery" className="transition hover:text-white">Gallery</Link>
              <Link href="/events" className="transition hover:text-white">Meetings & occasions</Link>
              <Link href="/contact" className="transition hover:text-white">Contact & directions</Link>
            </nav>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#d4ad60]">Visit JAVIN</p>
            <address className="mt-6 not-italic text-sm leading-7 text-white/70">{site.address}</address>
            <div className="mt-5 space-y-2">
              {site.phones.map((phone) => (
                <a key={phone.href} href={phone.href} className="block font-headline-md text-xl transition hover:text-[#d4ad60]">
                  {phone.display}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1380px] flex-col gap-3 px-5 py-7 text-xs text-white/45 md:flex-row md:items-center md:justify-between md:px-10 lg:px-14">
        <p>© {new Date().getFullYear()} JAVIN Hotels Limited. All rights reserved.</p>
        <p>Rumuepirikom · Port Harcourt · Rivers State</p>
      </div>
    </footer>
  );
}
