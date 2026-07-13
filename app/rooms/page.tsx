import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { hotelImages, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rooms & Stays",
  description: "Explore the room experience at JAVIN Hotels Limited in Port Harcourt and enquire directly for availability.",
};

const stays = [
  { name: "Classic Room", note: "A calm, comfortable base for a focused business trip or an easy night in the city.", image: hotelImages.standard, details: ["Comfort-led layout", "Ideal for short stays", "Direct hotel support"] },
  { name: "Deluxe Room", note: "More space to settle in, unwind and enjoy a slower pace between your plans.", image: hotelImages.deluxe, details: ["Generous proportions", "Relaxed atmosphere", "Flexible stay enquiries"] },
  { name: "Executive Stay", note: "An elevated setting for guests who want room to work, recharge and stay longer.", image: hotelImages.executive, details: ["Expanded living space", "Business-travel friendly", "Longer-stay comfort"] },
  { name: "Signature Suite", note: "A distinctive option for special visits, celebrations and a more memorable stay.", image: hotelImages.presidential, details: ["Statement interior", "Occasion-ready", "Personalised enquiries"] },
];

export default function RoomsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="Rooms & suites" title="Your space to slow down." description="Explore a collection of comfortable stays, then speak directly with JAVIN Hotels for the best available option for your visit." image={hotelImages.executive} imageAlt="A spacious guest room at JAVIN Hotels" />

        <section className="bg-[#fbf8f1] py-20 lg:py-28">
          <div className="mx-auto max-w-[1380px] px-5 md:px-10 lg:px-14">
            <div className="max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#9d752e]">Choose your stay</p>
              <h2 className="mt-4 font-headline-lg text-[40px] leading-tight text-[#321017] md:text-[56px]">Comfort with a sense of place.</h2>
              <p className="mt-6 text-base leading-8 text-[#6a5f57]">Room availability, inclusions and current rates are confirmed directly by the hotel, so every enquiry receives accurate, up-to-date information.</p>
            </div>

            <div className="mt-16 space-y-16 lg:space-y-24">
              {stays.map((room, index) => (
                <article key={room.name} className="grid items-center gap-9 lg:grid-cols-2 lg:gap-20">
                  <div className={`relative aspect-[4/3] overflow-hidden bg-[#e7dfd2] ${index % 2 ? "lg:order-2" : ""}`}>
                    <Image src={room.image} alt={room.name} fill sizes="(max-width: 1024px) 90vw, 45vw" className="object-cover transition duration-700 hover:scale-105" />
                    <span className="absolute left-5 top-5 rounded-full bg-[#fbf8f1]/92 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#5a0c1d] backdrop-blur">JAVIN Hotels</span>
                  </div>
                  <div className={index % 2 ? "lg:order-1" : ""}>
                    <p className="font-headline-md text-lg text-[#b1883e]">0{index + 1}</p>
                    <h3 className="mt-3 font-headline-lg text-[38px] text-[#321017] md:text-[48px]">{room.name}</h3>
                    <p className="mt-5 max-w-xl text-base leading-8 text-[#6c6159]">{room.note}</p>
                    <ul className="mt-7 grid gap-3 border-y border-black/8 py-6 sm:grid-cols-3">
                      {room.details.map((detail) => <li key={detail} className="flex items-center gap-2 text-xs font-semibold text-[#544a43]"><span className="h-1.5 w-1.5 rounded-full bg-[#b1883e]" />{detail}</li>)}
                    </ul>
                    <a href={whatsappUrl(`Hello JAVIN Hotels, I would like to enquire about the ${room.name}.`)} target="_blank" rel="noreferrer" className="mt-7 inline-flex rounded-full bg-[#5a0c1d] px-7 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5">Ask about this room</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#efe8dc] py-20">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#9d752e]">Need a recommendation?</p>
            <h2 className="mt-4 font-headline-lg text-[40px] leading-tight text-[#321017] md:text-[54px]">Tell us how you like to stay.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#6a5f57]">Share your dates, number of guests and preferences. The hotel team can guide you to the most suitable available option.</p>
            <a href={whatsappUrl("Hello JAVIN Hotels, please help me choose the right room for my stay.")} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-[#5a0c1d] px-8 py-4 text-xs font-extrabold uppercase tracking-[0.15em] text-white">Start an enquiry</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
