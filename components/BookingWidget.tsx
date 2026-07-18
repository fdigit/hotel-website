"use client";

import Link from "next/link";
import { useState } from "react";

function todayIso() {
  return new Date().toISOString().split("T")[0];
}

export default function BookingWidget() {
  const [checkIn, setCheckIn] = useState("");

  return (
    <section aria-label="Search room availability" className="relative z-20 -mt-12 px-5 sm:-mt-14 md:px-10 lg:-mt-16 lg:px-14">
      <form
        action="/rooms"
        method="get"
        className="mx-auto grid max-w-[1380px] grid-cols-2 overflow-hidden rounded-2xl border border-white/12 bg-[#281a16] shadow-[0_25px_70px_rgba(0,0,0,.35)] lg:grid-cols-[1fr_1fr_.72fr_auto]"
      >
        <label className="min-w-0 border-b border-r border-white/10 px-4 py-5 sm:px-6 lg:border-b-0">
          <span className="flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#d5ad5d] sm:text-[10px]">
            <span className="material-symbols-outlined text-[16px]">calendar_today</span>
            Check In
          </span>
          <input
            required
            type="date"
            name="checkIn"
            min={todayIso()}
            defaultValue=""
            onChange={(event) => setCheckIn(event.target.value)}
            aria-label="Check in date"
            className="mt-3 w-full min-w-0 border-0 bg-transparent p-0 text-sm font-semibold text-white outline-none [color-scheme:dark] sm:text-base"
          />
        </label>

        <label className="min-w-0 border-b border-white/10 px-4 py-5 sm:px-6 lg:border-b-0 lg:border-r">
          <span className="flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#d5ad5d] sm:text-[10px]">
            <span className="material-symbols-outlined text-[16px]">event_available</span>
            Check Out
          </span>
          <input
            required
            type="date"
            name="checkOut"
            min={checkIn || todayIso()}
            aria-label="Check out date"
            className="mt-3 w-full min-w-0 border-0 bg-transparent p-0 text-sm font-semibold text-white outline-none [color-scheme:dark] sm:text-base"
          />
        </label>

        <label className="min-w-0 border-r border-white/10 px-4 py-5 sm:px-6">
          <span className="flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#d5ad5d] sm:text-[10px]">
            <span className="material-symbols-outlined text-[17px]">group</span>
            Guests
          </span>
          <select
            name="guests"
            aria-label="Number of guests"
            defaultValue="2"
            className="mt-3 w-full border-0 bg-[#281a16] p-0 text-sm font-semibold text-white outline-none sm:text-base"
          >
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="5">5 Guests</option>
            <option value="6">6 Guests</option>
          </select>
        </label>

        <button
          type="submit"
          className="flex min-h-24 items-center justify-center gap-2 bg-[#d0a850] px-4 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#281711] transition hover:bg-[#e2bd70] sm:px-7 sm:text-xs"
        >
          Search Rooms
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </form>
      <p className="mx-auto mt-4 max-w-[1380px] text-center text-[11px] text-[#5f5147] sm:text-right">
        Reservations are confirmed directly by the hotel.{" "}
        <Link href="/booking-confirmed" className="font-semibold text-[#8a611f] underline underline-offset-2 hover:text-[#5a0c1d]">
          How booking works
        </Link>
      </p>
    </section>
  );
}
