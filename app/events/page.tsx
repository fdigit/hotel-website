import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { hotelImages, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Meetings & Occasions",
  description: "Start an enquiry for meetings, private occasions and celebrations at JAVIN Hotels Limited.",
};

const occasions = [
  { icon: "business_center", title: "Meetings", copy: "A polished setting for focused conversations, team sessions and professional gatherings." },
  { icon: "celebration", title: "Celebrations", copy: "Bring together the people who matter for birthdays, milestones and intimate occasions." },
  { icon: "restaurant", title: "Private moments", copy: "Start planning a tailored experience around your guest list, timing and vision." },
];

export default function EventsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="Meet · Celebrate · Connect" title="Gather, the JAVIN way." description="A thoughtful setting for business conversations, private moments and the occasions worth bringing people together for." image={hotelImages.presidential} imageAlt="Elegant space for a JAVIN Hotels occasion" />

        <section className="bg-[#fbf8f1] py-20 lg:py-28">
          <div className="mx-auto max-w-[1380px] px-5 md:px-10 lg:px-14">
            <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#9d752e]">Your occasion starts with a conversation</p>
                <h2 className="mt-5 font-headline-lg text-[42px] leading-[1.08] text-[#321017] md:text-[58px]">Plans made personal.</h2>
                <p className="mt-6 text-base leading-8 text-[#6c6159]">Every event begins differently. Share your preferred date, expected guest count and the kind of experience you have in mind. The JAVIN team can confirm suitable spaces and current options directly.</p>
                <a href={whatsappUrl("Hello JAVIN Hotels, I would like to discuss an event or private occasion.")} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-[#5a0c1d] px-8 py-4 text-xs font-extrabold uppercase tracking-[0.15em] text-white">Start an event enquiry</a>
              </div>
              <div className="grid gap-5 sm:grid-cols-3">
                {occasions.map((occasion) => (
                  <article key={occasion.title} className="border border-black/8 bg-white p-7 shadow-[0_16px_45px_rgba(39,20,12,.05)]">
                    <span className="material-symbols-outlined text-3xl text-[#ae8437]">{occasion.icon}</span>
                    <h3 className="mt-8 font-headline-md text-2xl text-[#321017]">{occasion.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#6d625a]">{occasion.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#271714] py-20 text-white lg:py-28">
          <div className="mx-auto grid max-w-[1380px] items-center gap-12 px-5 md:px-10 lg:grid-cols-2 lg:px-14">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden"><Image src={hotelImages.executive} alt="JAVIN Hotels occasion detail" fill sizes="45vw" className="object-cover" /></div>
              <div className="relative mt-12 aspect-[3/4] overflow-hidden"><Image src={hotelImages.deluxe} alt="JAVIN Hotels hospitality setting" fill sizes="45vw" className="object-cover" /></div>
            </div>
            <div className="lg:pl-12">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d8b361]">The useful details</p>
              <h2 className="mt-5 font-headline-lg text-[42px] leading-tight md:text-[56px]">Tell us what you are planning.</h2>
              <div className="mt-9 space-y-6 border-t border-white/15 pt-8">
                {["Your preferred date and time", "An estimated number of guests", "The nature of your meeting or occasion", "Any food, setup or accessibility needs"].map((item, index) => (
                  <div key={item} className="flex items-center gap-5"><span className="font-headline-md text-xl text-[#d8b361]">0{index + 1}</span><p className="text-sm text-white/72">{item}</p></div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
