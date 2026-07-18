import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingWidget from "@/components/BookingWidget";
import Reveal from "@/components/Reveal";
import { hotelImages, site, whatsappUrl } from "@/lib/site";

const roomPreviews = [
  {
    title: "Comfort, composed",
    eyebrow: "Guest rooms",
    image: hotelImages.standard,
    copy: "Well-considered spaces for business trips, weekend resets and time away in Port Harcourt.",
  },
  {
    title: "Room to unwind",
    eyebrow: "Elevated stays",
    image: hotelImages.deluxe,
    copy: "A refined atmosphere with the space and calm to make every arrival feel effortless.",
  },
  {
    title: "Stay a little longer",
    eyebrow: "Suites",
    image: hotelImages.executive,
    copy: "More room for work, rest and the moments that sit comfortably between both.",
  },
];

const facilities = [
  { icon: "free_breakfast", label: "Complimentary Breakfast" },
  { icon: "support_agent", label: "24-Hour Front Desk" },
  { icon: "wifi", label: "Free High-Speed Wi-Fi" },
  { icon: "bolt", label: "24-Hour Electricity" },
  { icon: "room_service", label: "Room Service" },
  { icon: "local_parking", label: "Guest Parking" },
  { icon: "cleaning_services", label: "Daily Housekeeping" },
  { icon: "pool", label: "Swimming Pool Access" },
  { icon: "meeting_room", label: "Conference Hall" },
  { icon: "concierge", label: "Concierge Service" },
  { icon: "airport_shuttle", label: "Airport Shuttle" },
  { icon: "lock", label: "In-Room Safe" },
  { icon: "tv", label: "Flat-Screen TV" },
  { icon: "shower", label: "In-Room Shower & Toiletries" },
  { icon: "local_laundry_service", label: "Laundry Service" },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="relative min-h-[760px] overflow-hidden bg-[#211512] lg:min-h-[calc(100vh-5rem)]">
          <Image
            src={hotelImages.deluxe}
            alt="Refined guest room at JAVIN Hotels"
            fill
            priority
            sizes="100vw"
            className="animate-ken-burns object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,12,10,.88)_0%,rgba(22,12,10,.58)_44%,rgba(22,12,10,.18)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#211512] to-transparent" />

          <div className="relative mx-auto flex min-h-[760px] max-w-[1380px] items-center px-5 pt-20 pb-28 md:px-10 lg:min-h-[calc(100vh-5rem)] lg:px-14 lg:pb-36">
            <div className="max-w-3xl text-white">
              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-12 bg-[#d7ad58]" />
                <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#e4c27c]">
                  Rumuepirikom · Port Harcourt
                </span>
              </div>
              <h1 className="font-display-lg text-[52px] font-semibold leading-[.98] tracking-[-.035em] sm:text-[68px] lg:text-[86px]">
                Stay distinctively.
                <span className="block italic text-[#e4c27c]">Stay JAVIN.</span>
              </h1>
              <p className="mt-8 max-w-xl text-base leading-8 text-white/76 md:text-lg">
                A warm, polished stay in the heart of Port Harcourt—designed for guests who
                value comfort, calm and thoughtful hospitality.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappUrl("Hello JAVIN Hotels, I would like to check room availability.")}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#caa24f] px-8 py-4 text-center text-xs font-extrabold uppercase tracking-[0.16em] text-[#241711] transition hover:-translate-y-0.5 hover:bg-[#e1bd72]"
                >
                  Check availability
                </a>
                <Link
                  href="/rooms"
                  className="rounded-full border border-white/30 bg-white/5 px-8 py-4 text-center text-xs font-extrabold uppercase tracking-[0.16em] text-white backdrop-blur transition hover:border-white hover:bg-white/10"
                >
                  Explore the stay
                </Link>
              </div>
            </div>
          </div>
        </section>

        <BookingWidget />

        <section className="border-b border-black/6 bg-[#fbf8f1] pt-16 lg:pt-20">
          <Reveal className="mx-auto grid max-w-[1380px] grid-cols-1 divide-y divide-black/7 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 md:px-10 lg:px-14">
            {[
              ["01", "Port Harcourt", "In Rumuepirikom, just off Ada George"],
              ["02", "Direct contact", "Speak with the hotel before you arrive"],
              ["03", "Easy booking", "Reserve conveniently through WhatsApp"],
            ].map(([number, title, copy]) => (
              <div key={number} className="flex gap-5 py-7 sm:px-7 sm:first:pl-0">
                <span className="font-headline-md text-xl text-[#b38a3e]">{number}</span>
                <div>
                  <p className="font-headline-md text-xl text-[#2e1715]">{title}</p>
                  <p className="mt-1 text-xs leading-5 text-[#685e57]">{copy}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </section>

        <section className="bg-[#fbf8f1] py-24 lg:py-32">
          <Reveal className="mx-auto grid max-w-[1380px] items-center gap-14 px-5 md:px-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-24 lg:px-14">
            <div className="relative mx-auto w-full max-w-[560px] pb-10 pr-8">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2px]">
                <Image src={hotelImages.executive} alt="JAVIN Hotels guest suite" fill sizes="(max-width: 1024px) 90vw, 40vw" className="object-cover" />
              </div>
              <div className="absolute bottom-0 right-0 w-[48%] border-[10px] border-[#fbf8f1] bg-[#5a0c1d] p-6 text-white shadow-2xl md:p-8">
                <p className="font-headline-md text-3xl leading-tight">Made for the way you travel.</p>
              </div>
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#a47a2f]">The JAVIN welcome</p>
              <h2 className="mt-5 max-w-xl font-headline-lg text-[42px] leading-[1.08] text-[#321017] md:text-[58px]">
                A stay that feels considered from the start.
              </h2>
              <p className="mt-7 max-w-xl text-base leading-8 text-[#675c55]">
                JAVIN brings together a calm setting, comfortable rooms and direct, personal
                service. Whether you are in Port Harcourt for work, a celebration or a quiet
                break, the experience begins with an easy arrival and a genuine welcome.
              </p>
              <div className="mt-9 grid max-w-xl gap-6 border-t border-black/10 pt-8 sm:grid-cols-2">
                <div>
                  <span className="material-symbols-outlined text-[#9d752e]">bed</span>
                  <h3 className="mt-3 font-headline-md text-xl text-[#321017]">Rest, beautifully</h3>
                  <p className="mt-2 text-sm leading-6 text-[#756a62]">Spaces shaped around comfort and a calmer pace.</p>
                </div>
                <div>
                  <span className="material-symbols-outlined text-[#9d752e]">concierge</span>
                  <h3 className="mt-3 font-headline-md text-xl text-[#321017]">Service, personally</h3>
                  <p className="mt-2 text-sm leading-6 text-[#756a62]">A direct line to the hotel whenever you need it.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="bg-[#efe8dc] py-24 lg:py-32">
          <Reveal className="mx-auto max-w-[1380px] px-5 md:px-10 lg:px-14">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#9d752e]">Rooms & suites</p>
                <h2 className="mt-4 font-headline-lg text-[42px] leading-tight text-[#321017] md:text-[58px]">Find your kind of stay.</h2>
              </div>
              <Link href="/rooms" className="w-fit border-b border-[#5a0c1d] pb-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#5a0c1d]">View all rooms</Link>
            </div>

            <div className="mt-14 grid gap-7 lg:grid-cols-3">
              {roomPreviews.map((room, index) => (
                <article key={room.title} className={`group transition duration-500 hover:-translate-y-1.5 ${index === 1 ? "lg:translate-y-10" : ""}`}>
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#ddd3c4] shadow-[0_16px_40px_rgba(50,16,23,0)] transition duration-500 group-hover:shadow-[0_26px_55px_rgba(50,16,23,.22)]">
                    <Image src={room.image} alt={room.title} fill sizes="(max-width: 1024px) 90vw, 30vw" className="object-cover transition duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#e3c177]">{room.eyebrow}</p>
                      <h3 className="mt-2 font-headline-md text-3xl">{room.title}</h3>
                    </div>
                  </div>
                  <p className="px-1 pt-5 text-sm leading-7 text-[#6b6059]">{room.copy}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="facilities" className="scroll-mt-20 overflow-hidden bg-[#fbf8f1] py-24 lg:py-32">
          <Reveal className="mx-auto grid max-w-[1380px] gap-14 px-5 md:px-10 lg:grid-cols-[.62fr_1.38fr] lg:gap-20 lg:px-14">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#b3893a]" />
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#9d752e]">
                  Facilities & amenities
                </p>
              </div>
              <h2 className="mt-6 font-headline-lg text-[44px] leading-[1.08] text-[#321017] md:text-[58px]">
                Everything you need, already considered.
              </h2>
              <p className="mt-6 max-w-md text-base leading-8 text-[#6c6159]">
                From breakfast and dependable connectivity to thoughtful in-room comforts,
                JAVIN is equipped to make every stay feel easy from arrival to departure.
              </p>
              <div className="mt-9 inline-flex items-center gap-3 rounded-full border border-[#9d752e]/20 bg-[#f4ecdf] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#76551e]">
                <span className="material-symbols-outlined text-base">verified</span>
                Confirmed hotel facilities
              </div>
            </div>

            <div className="grid border-l border-t border-[#5a0c1d]/10 sm:grid-cols-2 xl:grid-cols-3">
              {facilities.map((facility, index) => (
                <article
                  key={facility.label}
                  className="group min-h-44 border-b border-r border-[#5a0c1d]/10 bg-white/45 p-6 transition duration-300 hover:bg-[#5a0c1d] md:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="material-symbols-outlined text-[28px] text-[#aa8033] transition-colors group-hover:text-[#e2bd70]">
                      {facility.icon}
                    </span>
                    <span className="font-headline-md text-sm text-[#b9a891] transition-colors group-hover:text-white/45">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-9 max-w-[13rem] font-headline-md text-xl leading-snug text-[#321017] transition-colors group-hover:text-white">
                    {facility.label}
                  </h3>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="bg-[#2a1815] py-24 text-white lg:py-32">
          <Reveal className="mx-auto grid max-w-[1380px] items-center gap-14 px-5 md:px-10 lg:grid-cols-2 lg:px-14">
            <div className="relative aspect-[5/4] overflow-hidden">
              <Image src={hotelImages.presidential} alt="Space for memorable occasions at JAVIN Hotels" fill sizes="(max-width: 1024px) 90vw, 45vw" className="object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/15" />
            </div>
            <div className="lg:pl-10">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#d8b361]">Meet · Dine · Celebrate</p>
              <h2 className="mt-5 font-headline-lg text-[42px] leading-[1.08] md:text-[58px]">Bring your next occasion to JAVIN.</h2>
              <p className="mt-7 max-w-xl text-base leading-8 text-white/68">
                Start a conversation about meetings, intimate celebrations and private
                occasions. Our team will help you explore the right setting for your plans.
              </p>
              <Link href="/events" className="mt-9 inline-flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.17em] text-[#e2c176]">
                Explore gatherings <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </Reveal>
        </section>

        <section className="bg-[#fbf8f1] py-24 lg:py-32">
          <Reveal className="mx-auto max-w-[1380px] px-5 md:px-10 lg:px-14">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[hotelImages.standard, hotelImages.executive, hotelImages.deluxe, hotelImages.presidential].map((image, index) => (
                <div key={image} className={`relative overflow-hidden ${index % 2 ? "aspect-[4/5] lg:mt-14" : "aspect-[4/5]"}`}>
                  <Image src={image} alt={`JAVIN Hotels experience ${index + 1}`} fill sizes="(max-width: 640px) 90vw, 25vw" className="object-cover transition duration-700 hover:scale-105" />
                </div>
              ))}
            </div>
            <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#9d752e]">A glimpse inside</p>
                <h2 className="mt-3 font-headline-lg text-[40px] text-[#321017]">See more of JAVIN.</h2>
              </div>
              <div className="flex gap-3">
                <Link href="/gallery" className="rounded-full border border-[#5a0c1d]/20 px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#5a0c1d]">View gallery</Link>
                <a href={site.instagram} target="_blank" rel="noreferrer" className="rounded-full bg-[#5a0c1d] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white">Follow Instagram</a>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="relative overflow-hidden bg-[#640f23] py-24 text-white">
          <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full border border-white/10" />
          <div className="absolute -right-4 -top-12 h-64 w-64 rounded-full border border-white/10" />
          <Reveal className="relative mx-auto flex max-w-[1050px] flex-col items-center px-5 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#e4c27c]">Your Port Harcourt stay starts here</p>
            <h2 className="mt-5 font-headline-lg text-[42px] leading-[1.08] md:text-[64px]">Ready when you are.</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72">Connect directly with JAVIN Hotels for availability, directions or a tailored enquiry.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href={site.whatsapp} target="_blank" rel="noreferrer" className="rounded-full bg-[#d2aa58] px-8 py-4 text-xs font-extrabold uppercase tracking-[0.16em] text-[#2d1813]">Chat on WhatsApp</a>
              <Link href="/contact" className="rounded-full border border-white/30 px-8 py-4 text-xs font-extrabold uppercase tracking-[0.16em]">Contact the hotel</Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
