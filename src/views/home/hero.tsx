import devices from "@/assets/images/illustration-devices.svg";
import { hero } from "@/data";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <Image
        src={devices}
        alt=""
        priority
        fetchPriority="high"
        className="ms-2.25 mt-14.75 w-126.5 max-w-none lg:absolute lg:top-28.75 lg:left-[calc(50%+28px)] lg:ms-0 lg:mt-0 lg:w-240"
      />

      <div className="mt-21.5 px-8 lg:mt-40.5 lg:px-10">
        <div className="max-w-page mx-auto">
          <p className="flex items-center gap-4 lg:gap-3.75">
            <span className="v-heading bg-very-dark-blue text-label tracking-label inline-flex h-6.25 w-12 items-center justify-center rounded-full text-white">
              {hero.badge}
            </span>
            <span className="v-label text-very-dark-blue/70 text-label tracking-eyebrow">
              {hero.eyebrow}
            </span>
          </p>

          <h1 className="v-heading text-very-dark-blue text-display lg:text-display-lg max-w-headline mt-4">
            {hero.title}
          </h1>

          <p className="text-body max-w-copy mt-4 lg:mt-8">
            {hero.description}
          </p>

          <div className="mt-6.75 flex flex-wrap items-center gap-5 lg:mt-16 lg:gap-6">
            <a
              href="#demo"
              className="v-btn bg-red-deep hover:bg-red text-label-sm lg:text-cta h-10 w-38.25 shrink-0 lg:h-12 lg:w-46"
            >
              {hero.ctaLabel}
            </a>
            <p className="v-label text-very-dark-blue/70 text-label-sm tracking-hint lg:text-label lg:tracking-eyebrow">
              {hero.ctaHint}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
