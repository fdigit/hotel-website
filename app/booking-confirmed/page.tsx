import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Reservation Enquiry" };

export default function BookingConfirmedPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-[75vh] items-center bg-[#fbf8f1] px-5 pb-20 pt-32">
        <section className="mx-auto w-full max-w-3xl border border-black/8 bg-white p-8 text-center shadow-[0_24px_80px_rgba(44,20,12,.08)] md:p-14">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#efe8dc] text-[#9d752e]"><span className="material-symbols-outlined text-3xl">forum</span></div>
          <p className="mt-7 text-xs font-bold uppercase tracking-[0.24em] text-[#9d752e]">Direct reservations</p>
          <h1 className="mt-4 font-headline-lg text-[42px] leading-tight text-[#321017] md:text-[56px]">Let&apos;s confirm your stay together.</h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#6c6159]">A reservation is confirmed only when the JAVIN Hotels team verifies availability and shares the booking details with you directly.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={site.whatsapp} target="_blank" rel="noreferrer" className="rounded-full bg-[#5a0c1d] px-7 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-white">Continue on WhatsApp</a>
            <Link href="/rooms" className="rounded-full border border-[#5a0c1d]/20 px-7 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-[#5a0c1d]">Return to rooms</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
