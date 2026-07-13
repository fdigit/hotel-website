import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { hotelImages, site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Directions",
  description: "Contact JAVIN Hotels Limited in Rumuepirikom, Port Harcourt by phone or WhatsApp.",
};

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`;

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="Contact & directions" title="We are ready to welcome you." description="For room availability, event enquiries or help finding the hotel, connect directly with the JAVIN team." image={hotelImages.standard} imageAlt="Comfortable room at JAVIN Hotels" />

        <section className="bg-[#fbf8f1] py-20 lg:py-28">
          <div className="mx-auto grid max-w-[1380px] gap-14 px-5 md:px-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-24 lg:px-14">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#9d752e]">Speak with the hotel</p>
              <h2 className="mt-5 font-headline-lg text-[42px] leading-[1.08] text-[#321017] md:text-[58px]">A direct line to JAVIN.</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#6c6159]">Get accurate information straight from the hotel team. Share your dates and requirements on WhatsApp, or call either number below.</p>

              <div className="mt-10 space-y-4">
                {site.phones.map((phone) => (
                  <a key={phone.href} href={phone.href} className="group flex items-center justify-between border-b border-black/10 py-5">
                    <span>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#9d752e]">Telephone</span>
                      <span className="mt-1 block font-headline-md text-2xl text-[#321017]">{phone.display}</span>
                    </span>
                    <span className="material-symbols-outlined text-[#5a0c1d] transition group-hover:translate-x-1">call</span>
                  </a>
                ))}
              </div>
              <a href={whatsappUrl("Hello JAVIN Hotels, I would like to make an enquiry.")} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#1f8f51] px-8 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-white"><span className="material-symbols-outlined text-lg">chat</span>Chat on WhatsApp</a>
            </div>

            <div className="bg-[#efe8dc] p-8 md:p-12">
              <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#9d752e]">Find us</p>
              <address className="mt-5 max-w-xl font-headline-md text-[30px] not-italic leading-[1.35] text-[#321017] md:text-[38px]">{site.address}</address>
              <a href={mapUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 border-b border-[#5a0c1d] pb-2 text-xs font-extrabold uppercase tracking-[0.15em] text-[#5a0c1d]">Open in Google Maps <span className="material-symbols-outlined text-base">north_east</span></a>

              <div className="mt-14 grid gap-5 border-t border-black/10 pt-8 sm:grid-cols-2">
                <a href={site.instagram} target="_blank" rel="noreferrer" className="group border border-black/8 bg-[#fbf8f1] p-6 transition hover:-translate-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9d752e]">Instagram</p>
                  <p className="mt-2 font-headline-md text-2xl text-[#321017]">@javinhotels</p>
                  <span className="mt-6 block text-xs text-[#695e56]">Follow the hotel →</span>
                </a>
                <a href={site.facebook} target="_blank" rel="noreferrer" className="group border border-black/8 bg-[#fbf8f1] p-6 transition hover:-translate-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9d752e]">Facebook</p>
                  <p className="mt-2 font-headline-md text-2xl text-[#321017]">Javin Hospitality</p>
                  <span className="mt-6 block text-xs text-[#695e56]">View the page →</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#5a0c1d] py-20 text-white">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#e1bd70]">Before you arrive</p>
            <h2 className="mt-4 font-headline-lg text-[42px] md:text-[56px]">Let us help make your arrival easy.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/72">Message the hotel with your expected arrival time or any questions you would like answered before your stay.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
