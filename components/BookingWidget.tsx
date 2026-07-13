export default function BookingWidget() {
  return (
    <section aria-label="Search room availability" className="bg-[#1d1512] px-5 pb-5 pt-[6.25rem] md:px-10 md:pb-6 lg:px-14">
      <form
        action="/rooms"
        method="get"
        className="mx-auto grid max-w-[1380px] grid-cols-2 overflow-hidden border border-white/12 bg-[#281a16] shadow-[0_18px_55px_rgba(0,0,0,.2)] lg:grid-cols-[1fr_1fr_.72fr_auto]"
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
    </section>
  );
}
