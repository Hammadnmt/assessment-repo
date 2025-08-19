import Image from "next/image";
import React from "react";

type ProductProps = {
  imageSrc: string;
  imageAlt: string;
  tag: string;
  title: string;
  description: string;
  originalPrice?: string;
  currentPrice: string;
  isFree?: boolean;
  ctaText?: string;
  onCtaClick?: () => void;
};

export const Card = ({
  imageSrc,
  imageAlt,
  tag,
  title,
  description,
  originalPrice,
  currentPrice,
  isFree = false,
  ctaText = "Subscribe",
  onCtaClick,
}: ProductProps) => {
  return (
    <div className="flex flex-col justify-between rounded-xl bg-black overflow-hidden h-full relative">
      <div className=" flex py-2 px-4 border rounded-2xl justify-center items-start absolute top-[16px] right-[16px] bg-[#4BE26C]">
        <p className="text-[color:var(--background,#010203)] [leading-trim:both] [text-edge:cap] text-sm font-medium">
          Helo
        </p>
      </div>
      <div className="p-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={128}
              height={128}
              className="w-32 h-32 object-contain"
            />

            <div className="flex flex-col gap-2">
              <span className="text-[color:var(--Secondary-Heading,rgba(255,255,255,0.75))] text-base font-light leading-[145%] tracking-[-0.48px]">
                {tag}
              </span>
              <h2 className="text-[color:var(--Primary-Heading,#FFF)] text-[21.33px] font-light leading-[135%]">
                {title}
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-2 flex-grow">
            <p
              className="text-lg font-[325] leading-[140%] tracking-[-0.54px] 
             text-[var(--Secondary-Heading,rgba(255,255,255,0.75))] 
             line-clamp-4 hover:line-clamp-none transition-all"
            >
              {description}
            </p>
            <a href="#" className="text-[color:var(--Website,#5699FF)] ... self-start">
              Read more
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 pb-4 px-6">
        <Image src="/divider.png" width={100} height={1} alt="divider" className="w-full" />

        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-2">
            {originalPrice && (
              <span className="text-[color:var(--Secondary-Heading,rgba(255,255,255,0.75))] text-[21.33px] font-[350] leading-[120%] line-through">
                {originalPrice}
              </span>
            )}
            <span className="text-[color:var(--Primary-Heading,#FFF)] text-[21.33px] font-[350] leading-[135%]">
              {isFree ? "FREE" : currentPrice}
            </span>
          </div>

          {!isFree && (
            <button
              onClick={onCtaClick}
              className="bg-white border rounded-[8px] py-2 px-3.5 hover:bg-opacity-90 transition-colors"
            >
              <span className="text-[color:var(--background,#010203)] text-sm font-[350] leading-5">
                {ctaText}
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
