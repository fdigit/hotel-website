import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { hotelImages, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = { title: "Executive Stay" };

export default function ExecutiveSuitePage() {
  return (
    <>
      <Header />
      <main className="bg-[#fbf8f1] pt-20">
        <section className="mx-auto max-w-[1380px] px-5 py-10 md:px-10 lg:px-14 lg:py-14">
          <div className="relative min-h-[620px] overflow-hidden bg-[#241613]">
            <Image src={hotelImages.executive} alt="Executive stay at JAVIN Hotels" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-white md:p-12 lg:p-16">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#e0bc70]">An elevated stay</p>
              <h1 className="mt-4 max-w-3xl font-display-lg text-[48px] leading-tight md:text-[72px]">The Executive experience.</h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/72">Extra room to settle in, work comfortably and make more of your time in Port Harcourt.</p>
            </div>
          </div>
        </section>
        <section className="py-16 lg:py-24">
          <Reveal className="mx-auto grid max-w-[1100px] gap-12 px-5 md:px-10 lg:grid-cols-[1fr_.65fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#9d752e]">Room enquiry</p>
              <h2 className="mt-4 font-headline-lg text-[42px] leading-tight text-[#321017] md:text-[54px]">Designed for more time, more ease.</h2>
              <p className="mt-6 text-base leading-8 text-[#6c6159]">For current availability, room inclusions and the best direct rate for your dates, contact the hotel team. You will receive accurate information before making any commitment.</p>
            </div>
            <div className="bg-[#efe8dc] p-8">
              <p className="font-headline-md text-2xl text-[#321017]">Plan your stay</p>
              <p className="mt-3 text-sm leading-7 text-[#6c6159]">Include your dates and number of guests in your message.</p>
              <a href={whatsappUrl("Hello JAVIN Hotels, I would like to enquire about an Executive stay. My preferred dates are: ")} target="_blank" rel="noreferrer" className="mt-7 block rounded-full bg-[#5a0c1d] px-6 py-4 text-center text-xs font-extrabold uppercase tracking-[0.14em] text-white">Check availability</a>
              <Link href="/rooms" className="mt-3 block rounded-full border border-[#5a0c1d]/20 px-6 py-4 text-center text-xs font-extrabold uppercase tracking-[0.14em] text-[#5a0c1d]">View all rooms</Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
