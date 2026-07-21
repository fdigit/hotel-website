import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { hotelImages } from "@/lib/site";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="relative flex min-h-[78vh] items-center overflow-hidden bg-[#241613] px-5 pb-20 pt-32 text-white">
        <Image src={hotelImages.deluxe} alt="" fill priority sizes="100vw" className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-[#2b1715]/60" />
        <section className="relative mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#e0bc70]">404 · Page not found</p>
          <h1 className="mt-5 font-display-lg text-[40px] leading-tight sm:text-[50px] md:text-[72px]">This door doesn&apos;t lead anywhere.</h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/72">The page may have moved, but your JAVIN experience is only a step away.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className="rounded-full bg-[#d3ab59] px-8 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-[#2c1813]">Return home</Link>
            <Link href="/rooms" className="rounded-full border border-white/30 px-8 py-4 text-xs font-extrabold uppercase tracking-[0.14em]">Explore rooms</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
