import { ArrowRightIcon, MoveIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="flex flex-col-reverse md:flex-row gap-12 md:gap-8 p-6 md:p-15 justify-between w-full">
      <div className="w-full md:w-[60%] lg:w-2/3 flex flex-col gap-8 md:gap-10">
        <h2 className="font-bold text-4xl sm:text-5xl md:text-3xl lg:text-4xl text-white inline-block origin-left scale-y-[1.3] md:scale-y-[1.5] lg:scale-y-[2] tracking-[-0.05em] leading-tight">
          A KID CALLED BEAST
        </h2>

        <h6 className="text-xl sm:text-2xl md:text-3xl text-gray-200 tracking-tighter max-w-[90%]">
          WE ARE A LABOR OF LOVE BY WEB3 LAB
        </h6>

        <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-2">
          <Link
            href="/"
            className="text-lg sm:text-xl md:text-2xl text-gray-200 tracking-tighter underline hover:text-white transition-colors"
          >
            COMMUNITY
          </Link>
          <MoveIcon className="w-4 h-4 md:w-6 md:h-6 text-gray-200 rotate-[45deg]" />

          <Link
            href="/"
            className="text-lg sm:text-xl md:text-2xl text-gray-200 tracking-tighter underline hover:text-white transition-colors"
          >
            CONTACT
          </Link>
          <MoveIcon className="w-4 h-4 md:w-6 md:h-6 text-gray-200 rotate-[45deg]" />

          <Link
            href="/"
            className="text-lg sm:text-xl md:text-2xl text-gray-200 tracking-tighter underline hover:text-white transition-colors"
          >
            QUIZ
          </Link>
          <MoveIcon className="hidden sm:block w-4 h-4 md:w-6 md:h-6 text-gray-200 rotate-[45deg]" />

          <Link
            href="/"
            className="text-lg sm:text-xl md:text-2xl text-gray-200 tracking-tighter underline hover:text-white transition-colors"
          >
            BEASTHOOD
          </Link>
        </div>
      </div>

      <div className="w-full md:w-[40%] lg:w-1/3 flex flex-col gap-4 md:gap-5 mt-4 md:mt-0">
        <h6 className="text-xl sm:text-2xl md:text-3xl text-gray-200 tracking-tighter">
          SIGN UP FOR OUR NEWSLETTER
        </h6>
        <div className="flex items-center pb-2 border-b-2 border-white/50 focus-within:border-white transition-colors">
          <input
            type="email"
            placeholder="Your email address"
            className="text-white text-base md:text-lg w-full border-0 outline-0 bg-transparent placeholder:text-gray-500 py-2"
          />
          <Button
            size="icon"
            variant="ghost"
            className="bg-transparent hover:bg-white/10 rounded-full"
            aria-label="Submit Newsletter"
          >
            <ArrowRightIcon className="text-white w-5 h-5 md:w-6 md:h-6" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
