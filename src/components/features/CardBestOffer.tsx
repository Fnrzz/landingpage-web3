import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const CardBestOffer = () => {
  return (
    <div className="absolute w-[80%] md:w-[50%] lg:w-[450px] h-fit border-4 md:border-[6px] border-[#1a1a1a] bg-white z-[3]  top-[-120%] lg:top-[-100%] left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-15 rounded-[1.5rem] md:rounded-[2.5rem] p-4 md:p-6 flex flex-col gap-3 md:gap-4 shadow-xl">
      <div className="absolute -top-6 -right-4 sm:-top-10 sm:-right-8 md:-top-14 md:-right-14 w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-[#1a1a1a] rounded-full flex items-center justify-center z-20">
        <svg
          className="absolute w-full h-full animate-[spin_15s_linear_infinite]"
          viewBox="0 0 100 100"
        >
          <path
            id="textPath"
            d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
            fill="none"
          />
          <text className="text-[10.5px] font-bold fill-white tracking-[0.16em]">
            <textPath href="#textPath" startOffset="0%">
              MAKE OFFER - MAKE OFFER - MAKE OFFER -
            </textPath>
          </text>
        </svg>

        <ArrowUpRight
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white z-10"
          strokeWidth={1.5}
        />
      </div>

      <div className="flex flex-col relative z-10 pt-2 pl-1 md:pl-2">
        <span className="text-[#f8672d] font-bold text-base md:text-lg tracking-wide">
          BEST OFFER
        </span>

        <div className="flex items-end gap-2 md:gap-3 mt-10 md:mt-15 mb-2">
          <span className="text-[40px] md:text-[50px] leading-[0.75] font-black text-[#1a1a1a] scale-y-[2] origin-bottom tracking-[-0.1em]">
            0.4636
          </span>
          <span className="text-2xl md:text-3xl font-black text-[#1a1a1a] scale-y-[1.8] origin-bottom tracking-tighter pb-1">
            WETH
          </span>
        </div>
      </div>
      <div className="w-full aspect-[4/3] bg-[#f8672d] border-4 md:border-[6px] border-[#1a1a1a] rounded-2xl md:rounded-3xl relative overflow-hidden mt-4 md:mt-6">
        <Image
          src="/assets/char3.avif"
          alt="Character"
          fill
          className="object-cover object-top"
        />
      </div>
    </div>
  );
};

export default CardBestOffer;
