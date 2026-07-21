import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export default function PageHero({ eyebrow, title, description, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative min-h-[500px] overflow-hidden bg-[#201410] pt-20 sm:min-h-[560px] md:min-h-[650px]">
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="animate-ken-burns object-cover object-center" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,13,11,.9),rgba(24,13,11,.62)_58%,rgba(24,13,11,.25))]" />
      <div className="relative mx-auto flex min-h-[420px] max-w-[1380px] items-end px-5 pb-12 pt-20 text-white sm:min-h-[480px] sm:pb-16 md:min-h-[570px] md:px-10 md:pb-20 lg:px-14">
        <div className="max-w-3xl">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#e1bd70] sm:text-xs sm:tracking-[0.25em]">{eyebrow}</p>
          <h1 className="mt-4 font-display-lg text-[clamp(2.5rem,12vw,3.125rem)] leading-[1.04] tracking-[-.03em] sm:mt-5 sm:text-[66px] md:text-[78px]">{title}</h1>
          <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/80 sm:mt-6 sm:text-base sm:leading-8 md:text-lg">{description}</p>
        </div>
      </div>
    </section>
  );
}
