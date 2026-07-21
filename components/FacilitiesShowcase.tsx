"use client";

import { useEffect, useRef, useState } from "react";

type Facility = {
  icon: string;
  label: string;
};

type FacilitiesShowcaseProps = {
  facilities: Facility[];
};

const AUTOPLAY_INTERVAL_MS = 4000;
const INTERACTION_RESUME_DELAY_MS = 3000;

function FacilityCard({ facility, index }: { facility: Facility; index: number }) {
  return (
    <article className="group min-h-44 border-b border-r border-[#5a0c1d]/10 bg-white/45 p-6 transition duration-300 hover:bg-[#5a0c1d] md:p-7">
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
  );
}

export default function FacilitiesShowcase({ facilities }: FacilitiesShowcaseProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollFrameRef = useRef<number | null>(null);
  const resumeTimerRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  const scheduleInteractionResume = () => {
    if (resumeTimerRef.current !== null) window.clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = window.setTimeout(() => setIsInteracting(false), INTERACTION_RESUME_DELAY_MS);
  };

  const handleInteractionStart = () => {
    if (resumeTimerRef.current !== null) window.clearTimeout(resumeTimerRef.current);
    setIsInteracting(true);
  };

  const goToSlide = (index: number) => {
    const nextIndex = (index + facilities.length) % facilities.length;
    const track = trackRef.current;
    const slide = track?.children[nextIndex] as HTMLElement | undefined;

    if (track && slide) {
      track.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
      setActiveIndex(nextIndex);
    }

    setIsInteracting(true);
    scheduleInteractionResume();
  };

  useEffect(() => {
    if (isPaused || isInteracting || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => {
        const nextIndex = (currentIndex + 1) % facilities.length;
        const track = trackRef.current;
        const slide = track?.children[nextIndex] as HTMLElement | undefined;

        if (track && slide) {
          track.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
        }

        return nextIndex;
      });
    }, AUTOPLAY_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [facilities.length, isPaused, isInteracting]);

  useEffect(
    () => () => {
      if (resumeTimerRef.current !== null) window.clearTimeout(resumeTimerRef.current);
    },
    []
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const updateEndPadding = () => {
      const firstSlide = track.children[0] as HTMLElement | undefined;
      if (!firstSlide) return;
      // Without this, the trailing slides' offsetLeft exceeds the natural
      // scrollWidth - clientWidth, so the browser clamps their scroll target
      // to the same max position and several indices near the end stop
      // visually advancing even though activeIndex keeps incrementing.
      track.style.paddingRight = `${Math.max(0, track.clientWidth - firstSlide.offsetWidth)}px`;
    };

    updateEndPadding();
    window.addEventListener("resize", updateEndPadding);
    return () => window.removeEventListener("resize", updateEndPadding);
  }, [facilities.length]);

  const updateActiveSlide = () => {
    if (scrollFrameRef.current !== null) window.cancelAnimationFrame(scrollFrameRef.current);

    scrollFrameRef.current = window.requestAnimationFrame(() => {
      const track = trackRef.current;
      if (!track) return;

      const slides = Array.from(track.children) as HTMLElement[];
      const nearestIndex = slides.reduce((nearest, slide, index) => {
        const currentDistance = Math.abs(slide.offsetLeft - track.scrollLeft);
        const nearestDistance = Math.abs(slides[nearest].offsetLeft - track.scrollLeft);
        return currentDistance < nearestDistance ? index : nearest;
      }, 0);

      setActiveIndex(nearestIndex);
      scrollFrameRef.current = null;
    });
  };

  return (
    <>
      <div className="hidden border-l border-t border-[#5a0c1d]/10 sm:grid sm:grid-cols-2 xl:grid-cols-3">
        {facilities.map((facility, index) => (
          <FacilityCard key={facility.label} facility={facility} index={index} />
        ))}
      </div>

      <div
        className="min-w-0 sm:hidden"
        aria-roledescription="carousel"
        aria-label="Hotel facilities and amenities"
      >
        <div
          ref={trackRef}
          className="amenities-scroller flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5a0c1d]/40"
          onScroll={updateActiveSlide}
          onPointerDown={handleInteractionStart}
          onPointerUp={scheduleInteractionResume}
          onPointerCancel={scheduleInteractionResume}
          onTouchStart={handleInteractionStart}
          onTouchEnd={scheduleInteractionResume}
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              goToSlide(activeIndex - 1);
            } else if (event.key === "ArrowRight") {
              event.preventDefault();
              goToSlide(activeIndex + 1);
            }
          }}
        >
          {facilities.map((facility, index) => (
            <div
              key={facility.label}
              className="w-[84%] max-w-[300px] shrink-0 snap-start"
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${facilities.length}: ${facility.label}`}
            >
              <FacilityCard facility={facility} index={index} />
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <p
            className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#8b765e]"
            aria-live="polite"
            aria-atomic="true"
          >
            {String(activeIndex + 1).padStart(2, "0")} / {String(facilities.length).padStart(2, "0")}
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => goToSlide(activeIndex - 1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#5a0c1d]/15 text-[#5a0c1d] transition hover:bg-[#5a0c1d] hover:text-white"
              aria-label="Previous facility"
            >
              <span className="material-symbols-outlined text-xl">arrow_back</span>
            </button>
            <button
              type="button"
              onClick={() => setIsPaused((paused) => !paused)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[#5a0c1d]/15 text-[#5a0c1d] transition hover:bg-[#5a0c1d] hover:text-white"
              aria-label={isPaused ? "Resume automatic slides" : "Pause automatic slides"}
              aria-pressed={isPaused}
            >
              <span className="material-symbols-outlined text-xl">{isPaused ? "play_arrow" : "pause"}</span>
            </button>
            <button
              type="button"
              onClick={() => goToSlide(activeIndex + 1)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#5a0c1d] text-white transition hover:bg-[#74142a]"
              aria-label="Next facility"
            >
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
