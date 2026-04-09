import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="w-full flex flex-col gap-16 lg:gap-15 px-6 md:px-12 lg:px-15 py-10 relative  min-h-screen justify-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-40 z-[-1] lg:z-[1] lg:opacity-100 flex items-center justify-center">
        <Image
          src="/assets/char3.avif"
          alt="char3"
          width={600}
          height={600}
          className="w-full h-full object-cover lg:object-contain scale-[1.3] transform translate-y-25 lg:translate-y-13 lg:translate-x-[-4%]"
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0 relative  w-full">
        <div className="w-full lg:w-[60%] flex justify-center lg:justify-start">
          <h1 className="text-[110px] md:text-[160px] lg:text-[180px] leading-none text-white font-bold scale-y-[1.5] lg:scale-y-[2] tracking-[-0.05em] lg:tracking-[-0.1em] whitespace-nowrap mt-10 lg:mt-0">
            A KIDS
          </h1>
        </div>

        <div className="w-full md:w-[80%] lg:w-[40%] text-center lg:text-left flex flex-col items-center lg:items-start">
          <p className="text-xl md:text-2xl lg:text-3xl text-white tracking-tighter">
            SOME MORE FREE THAN OTHERS. REALITY HAS EVOLVED BEYOND THE PHYSICAL.
            TO FACILITATE & CREATE NEW DIGITAL TRIBES.
          </p>
          <Button className="mt-8 px-10 h-14 lg:h-15 text-black text-lg lg:text-xl font-semibold rounded-full bg-[#f8672d]">
            VIEW OPENSEA
          </Button>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-0 relative mt-10 lg:mt-0 w-full">
        <div className="w-full md:w-[80%] lg:w-[40%] flex flex-col gap-6 text-center lg:text-left">
          <Image
            src="/assets/orange-lines.webp"
            alt="beast"
            width={600}
            height={600}
            className="w-full h-[80px] md:h-[120px] lg:h-[150px] object-cover rounded-xl lg:rounded-none"
          />
          <p className="text-xl md:text-2xl lg:text-3xl text-white tracking-tighter">
            A CORE EXPRESSION OF WHO YOU ARE. IT&apos;S A PART OF YOUR NATURE IT
            IS INSIDE ALL OF US.
          </p>
        </div>

        <div className="w-full lg:w-[60%] flex justify-center lg:justify-end">
          <h1 className="text-[80px] md:text-[160px] lg:text-[180px] leading-none text-white lg:text-right font-bold scale-y-[1.5] lg:scale-y-[2] tracking-[-0.05em] lg:tracking-[-0.1em] whitespace-nowrap">
            ED BEAST
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
