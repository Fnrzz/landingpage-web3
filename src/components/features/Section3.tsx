import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Section3 = () => {
  return (
    <section className="w-full min-h-screen flex flex-col gap-10 md:gap-20 relative z-[2] pt-30  px-6 md:px-12 lg:px-15 overflow-hidden">
      <div className="flex justify-start md:justify-end">
        <p className="w-full md:w-[80%] lg:w-1/2 text-base sm:text-lg md:text-xl lg:text-2xl text-white tracking-tighter text-left md:text-right lg:text-left">
          A CORE EXPRESSION OF WHO YOU ARE. IT&apos;S A PART OF YOUR NATURE IT
          IS INSIDE ALL OF US. SOME MORE FREE THAN OTHERS. REALITY HAS EVOLVED
          BEYOND THE PHYSICAL. TO FACILITATE & CREATE NEW DIGITAL TRIBES. WHAT
          IS YOUR BEAST HOOD?
        </p>
      </div>

      <div className="flex flex-col lg:flex-row h-full w-full mt-8 lg:mt-0">
        <div className="w-full lg:w-1/2 flex flex-col gap-16 md:gap-24 lg:gap-32 justify-center z-10">
          <div className="flex flex-col gap-5 md:gap-20 lg:gap-24">
            <h1 className="text-[50px] sm:text-[70px] md:text-[80px] lg:text-[90px] leading-[0.8] text-white font-bold scale-y-[1.3] md:scale-y-[1.5] lg:scale-y-[2] tracking-[-0.05em] lg:tracking-[-0.1em] origin-top ">
              WHAT KIND
            </h1>

            <h1 className="text-[50px] sm:text-[70px] md:text-[80px] lg:text-[90px] leading-[0.8] text-white font-bold scale-y-[1.3] md:scale-y-[1.5] lg:scale-y-[2] tracking-[-0.05em] lg:tracking-[-0.1em] origin-top ">
              BEAST ARE YOU?
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-max">
            <Button className="w-full sm:w-auto px-8 md:px-10 h-14 lg:h-15 text-white text-base md:text-lg lg:text-xl font-semibold rounded-full bg-transparent border-2 border-white hover:bg-white hover:text-black transition-colors">
              TAKE QUIZ
            </Button>
            <Button className="w-full sm:w-auto px-8 md:px-10 h-14 lg:h-15 text-white text-base md:text-lg lg:text-xl font-semibold rounded-full bg-transparent border-2 border-white hover:bg-white hover:text-black transition-colors">
              VIEW BEAST HOOD
            </Button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative h-[450px] md:h-[550px] lg:h-[800px] mt-10 lg:mt-0">
          <Image
            src="/assets/char5.avif"
            alt="char5"
            width={400}
            height={600}
            className="absolute left-0 bottom-0 w-1/2 h-full object-cover z-0"
          />
          <Image
            src="/assets/char4.avif"
            alt="char4"
            width={400}
            height={600}
            className="absolute right-0  bottom-0 w-1/2 h-full object-cover z-0"
          />

          <Image
            src="/assets/char2.avif"
            alt="char2"
            width={500}
            height={700}
            className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-1/2 h-full object-cover z-10 drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Section3;
