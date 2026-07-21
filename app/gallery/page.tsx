import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { hotelImages, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Take a visual tour of the JAVIN Hotels stay experience in Port Harcourt.",
};

const gallery = [
  { image: hotelImages.deluxe, title: "A calmer arrival", className: "md:col-span-2 md:row-span-2" },
  { image: hotelImages.standard, title: "Comfort in the details", className: "" },
  { image: hotelImages.executive, title: "Space to settle in", className: "" },
  { image: hotelImages.presidential, title: "A more distinctive stay", className: "md:col-span-2" },
  { image: hotelImages.executive, title: "Room for your plans", className: "" },
  { image: hotelImages.deluxe, title: "Restful by design", className: "" },
];

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero eyebrow="The JAVIN view" title="A glimpse of the experience." description="Step inside the mood, comfort and quiet detail that shape a stay at JAVIN Hotels in Port Harcourt." image={hotelImages.presidential} imageAlt="JAVIN Hotels interior" />
        <section className="bg-[#fbf8f1] py-16 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-[1380px] px-5 md:px-10 lg:px-14">
            <Reveal className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#9d752e]">Look around</p>
                <h2 className="mt-4 font-headline-lg text-[36px] leading-tight text-[#321017] sm:text-[42px] md:text-[58px]">The feeling of JAVIN.</h2>
              </div>
              <a href={site.instagram} target="_blank" rel="noreferrer" className="w-fit rounded-full border border-[#5a0c1d]/20 px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#5a0c1d]">Latest on Instagram</a>
            </Reveal>

            <Reveal className="mt-10 grid auto-rows-[240px] gap-4 sm:mt-14 sm:auto-rows-[300px] sm:gap-5 md:grid-cols-2 md:auto-rows-[330px] lg:grid-cols-4">
              {gallery.map((item, index) => (
                <figure key={`${item.title}-${index}`} className={`group relative overflow-hidden bg-[#e5ded1] ${item.className}`}>
                  <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 90vw, 45vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-80" />
                  <figcaption className="absolute bottom-0 left-0 p-5 font-headline-md text-xl text-white sm:p-6 sm:text-2xl">{item.title}</figcaption>
                </figure>
              ))}
            </Reveal>

            <Reveal className="mt-12 border border-[#5a0c1d]/10 bg-[#f1eadf] p-6 text-center sm:mt-16 sm:p-8 md:p-12">
              <p className="font-headline-md text-[26px] leading-tight text-[#321017] sm:text-3xl">Follow the hotel&apos;s story as it unfolds.</p>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#6c6159]">For the latest real-time hotel photos, updates and announcements, visit JAVIN Hotels on Instagram and Facebook.</p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <a href={site.instagram} target="_blank" rel="noreferrer" className="rounded-full bg-[#5a0c1d] px-7 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white">Instagram</a>
                <a href={site.facebook} target="_blank" rel="noreferrer" className="rounded-full border border-[#5a0c1d]/20 px-7 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#5a0c1d]">Facebook</a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
