"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { hotelImages } from "@/lib/site";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Header />
      <main className="relative flex min-h-[78vh] items-center overflow-hidden bg-[#241613] px-5 pb-20 pt-32 text-white">
        <Image src={hotelImages.presidential} alt="" fill priority sizes="100vw" className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-[#2b1715]/60" />
        <section className="relative mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#e0bc70]">Something went wrong</p>
          <h1 className="mt-5 font-display-lg text-[50px] leading-tight md:text-[72px]">A small hiccup, not a lost stay.</h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/72">
            Please try again, or reach the hotel directly if the issue continues.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => reset()}
              className="rounded-full bg-[#d3ab59] px-8 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-[#2c1813]"
            >
              Try again
            </button>
            <Link href="/" className="rounded-full border border-white/30 px-8 py-4 text-xs font-extrabold uppercase tracking-[0.14em]">
              Return home
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
