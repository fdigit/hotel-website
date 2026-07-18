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
    <section className="relative min-h-[560px] overflow-hidden bg-[#201410] pt-20 md:min-h-[650px]">
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="animate-ken-burns object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,13,11,.88),rgba(24,13,11,.55)_50%,rgba(24,13,11,.15))]" />
      <div className="relative mx-auto flex min-h-[480px] max-w-[1380px] items-end px-5 pb-16 pt-24 text-white md:min-h-[570px] md:px-10 md:pb-20 lg:px-14">
        <div className="max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#e1bd70]">{eyebrow}</p>
          <h1 className="mt-5 font-display-lg text-[50px] leading-[1.02] tracking-[-.03em] sm:text-[66px] md:text-[78px]">{title}</h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/75 md:text-lg">{description}</p>
        </div>
      </div>
    </section>
  );
}
