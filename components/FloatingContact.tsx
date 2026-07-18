import { site } from "@/lib/site";

export default function FloatingContact() {
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with JAVIN Hotels on WhatsApp"
      className="animate-soft-pulse fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#1f9d55] text-white shadow-[0_16px_40px_rgba(0,0,0,.24)] transition hover:-translate-y-1 hover:bg-[#178447] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1f9d55]"
    >
      <span className="material-symbols-outlined text-[26px]">chat</span>
    </a>
  );
}
