import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { hotelImages, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rooms & Stays",
  description: "Explore the room experience at JAVIN Hotels Limited in Port Harcourt and enquire directly for availability.",
};

type Stay = {
  name: string;
  note: string;
  image: string;
  details: string[];
  href?: string;
};

const stays: Stay[] = [
  { name: "Classic Room", note: "A calm, comfortable base for a focused business trip or an easy night in the city.", image: hotelImages.standard, details: ["Comfort-led layout", "Ideal for short stays", "Direct hotel support"] },
  { name: "Deluxe Room", note: "More space to settle in, unwind and enjoy a slower pace between your plans.", image: hotelImages.deluxe, details: ["Generous proportions", "Relaxed atmosphere", "Flexible stay enquiries"] },
  { name: "Executive Stay", note: "An elevated setting for guests who want room to work, recharge and stay longer.", image: hotelImages.executive, details: ["Expanded living space", "Business-travel friendly", "Longer-stay comfort"], href: "/rooms/executive-suite" },
  { name: "Signature Suite", note: "A distinctive option for special visits, celebrations and a more memorable stay.", image: hotelImages.presidential, details: ["Statement interior", "Occasion-ready", "Personalised enquiries"] },
];

function formatDate(value: string) {
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}

type RoomsPageProps = {
  searchParams: Promise<{ checkIn?: string; checkOut?: string; guests?: string }>;
};

export default async function RoomsPage({ searchParams }: RoomsPageProps) {
  const params = await searchParams;
  const checkIn = params.checkIn ? formatDate(params.checkIn) : null;
  const checkOut = params.checkOut ? formatDate(params.checkOut) : null;
  const guests = params.guests;
  const hasSearch = Boolean(checkIn && checkOut);

  const searchNote = hasSearch
    ? `for ${checkIn} – ${checkOut}${guests ? `, ${guests} guest${guests === "1" ? "" : "s"}` : ""}`
    : "";

  const enquiryMessage = (roomName: string) =>
    hasSearch
      ? `Hello JAVIN Hotels, I would like to enquire about the ${roomName} ${searchNote}.`
      : `Hello JAVIN Hotels, I would like to enquire about the ${roomName}.`;

  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="Rooms & suites" title="Your space to slow down." description="Explore a collection of comfortable stays, then speak directly with JAVIN Hotels for the best available option for your visit." image={hotelImages.executive} imageAlt="A spacious guest room at JAVIN Hotels" />

        <section className="bg-[#fbf8f1] py-16 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-[1380px] px-5 md:px-10 lg:px-14">
            <Reveal className="max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#9d752e]">Choose your stay</p>
              <h2 className="mt-4 font-headline-lg text-[36px] leading-tight text-[#321017] sm:text-[40px] md:text-[56px]">Comfort with a sense of place.</h2>
              <p className="mt-6 text-base leading-8 text-[#6a5f57]">Room availability, inclusions and current rates are confirmed directly by the hotel, so every enquiry receives accurate, up-to-date information.</p>
              {hasSearch && (
                <p className="mt-6 inline-flex max-w-full items-center gap-2 rounded-2xl border border-[#9d752e]/25 bg-[#f4ecdf] px-4 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-[#76551e] sm:rounded-full sm:px-5 sm:text-xs sm:tracking-[0.14em]">
                  <span className="material-symbols-outlined text-base">event_available</span>
                  Showing availability {searchNote}
                </p>
              )}
            </Reveal>

            <div className="mt-12 space-y-14 sm:mt-16 sm:space-y-16 lg:space-y-24">
              {stays.map((room, index) => {
                const media = (
                  <div className={`relative aspect-[4/3] overflow-hidden bg-[#e7dfd2] ${index % 2 ? "lg:order-2" : ""}`}>
                    <Image src={room.image} alt={room.name} fill sizes="(max-width: 1024px) 90vw, 45vw" className="object-cover transition duration-700 hover:scale-105" />
                    <span className="absolute left-3 top-3 rounded-full bg-[#fbf8f1]/92 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.14em] text-[#5a0c1d] backdrop-blur sm:left-5 sm:top-5 sm:px-4 sm:text-[10px] sm:tracking-[0.18em]">JAVIN Hotels</span>
                  </div>
                );

                return (
                  <Reveal key={room.name}>
                    <article className="grid items-center gap-9 lg:grid-cols-2 lg:gap-20">
                      {room.href ? <Link href={room.href} aria-label={`View details for ${room.name}`}>{media}</Link> : media}
                      <div className={index % 2 ? "lg:order-1" : ""}>
                        <p className="font-headline-md text-lg text-[#b1883e]">0{index + 1}</p>
                        <h3 className="mt-3 font-headline-lg text-[34px] leading-tight text-[#321017] sm:text-[38px] md:text-[48px]">{room.name}</h3>
                        <p className="mt-5 max-w-xl text-base leading-8 text-[#6c6159]">{room.note}</p>
                        <ul className="mt-7 grid gap-3 border-y border-black/8 py-6 sm:grid-cols-3">
                          {room.details.map((detail) => <li key={detail} className="flex items-center gap-2 text-xs font-semibold text-[#544a43]"><span className="h-1.5 w-1.5 rounded-full bg-[#b1883e]" />{detail}</li>)}
                        </ul>
                        <div className="mt-7 flex flex-col items-stretch gap-4 min-[430px]:flex-row min-[430px]:flex-wrap min-[430px]:items-center">
                          <a href={whatsappUrl(enquiryMessage(room.name))} target="_blank" rel="noreferrer" className="inline-flex rounded-full bg-[#5a0c1d] px-6 py-4 text-xs font-extrabold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5 sm:px-7 sm:tracking-[0.14em]">Ask about this room</a>
                          {room.href && (
                            <Link href={room.href} className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#5a0c1d]">
                              View full details <span className="material-symbols-outlined text-base">arrow_forward</span>
                            </Link>
                          )}
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#efe8dc] py-20">
          <Reveal className="mx-auto max-w-4xl px-5 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#9d752e]">Need a recommendation?</p>
            <h2 className="mt-4 font-headline-lg text-[36px] leading-tight text-[#321017] sm:text-[40px] md:text-[54px]">Tell us how you like to stay.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#6a5f57]">Share your dates, number of guests and preferences. The hotel team can guide you to the most suitable available option.</p>
            <a href={whatsappUrl("Hello JAVIN Hotels, please help me choose the right room for my stay.")} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-[#5a0c1d] px-8 py-4 text-xs font-extrabold uppercase tracking-[0.15em] text-white">Start an enquiry</a>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
