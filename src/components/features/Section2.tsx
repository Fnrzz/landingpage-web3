import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";

const Section2 = () => {
  return (
    <section className="w-full min-h-screen flex md:items-center lg:items-start bg-[#f8672d] relative z-[2] ">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-[#222222] border-[8px] md:border-[12px] border-[#f8672d] flex items-center justify-center">
          <ArrowDownIcon
            className="w-8 h-8 md:w-10 md:h-10 text-[#f8672d]"
            strokeWidth={2.5}
          />
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full opacity-30 z-0 lg:z-[1] lg:opacity-100 flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/char1.avif"
          alt="char1"
          width={600}
          height={600}
          className="w-full lg:w-[500px] h-full object-cover lg:object-contain scale-[1.3] transform translate-y-10 md:translate-y-20 lg:translate-y-40 lg:translate-x-[60%]"
        />
      </div>

      <div className="pt-28 md:pt-35 pb-20 px-6 md:px-15 flex flex-col gap-6 md:gap-10 relative  h-full justify-center">
        <h1 className="text-[50px] lg:text-[90px] leading-[0.85] lg:leading-none text-white font-bold scale-y-[1.2] md:scale-y-[1.5] lg:scale-y-[2.5] tracking-[-0.03em] lg:tracking-[-0.08em] origin-top-left lg:origin-center mb-8 md:mb-16 whitespace-normal lg:whitespace-nowrap">
          THERE&apos;S A NEW KID IN A TOWN
        </h1>

        <p className="w-full md:w-[80%] lg:w-1/2 text-lg md:text-xl lg:text-2xl text-white tracking-tighter">
          SOME MORE FREE THAN OTHERS. REALITY HAS EVOLVED BEYOND THE PHYSICAL.
          TO FACILITATE & CREATE NEW DIGITAL TRIBES.
        </p>

        <Button className="w-fit mt-4 px-8 md:px-10 h-12 md:h-14 lg:h-15 text-white text-base md:text-lg lg:text-xl font-semibold rounded-full bg-transparent border-2 border-white hover:bg-white hover:text-[#f8672d] transition-colors pointer-events-auto">
          SEE OUR COLLECTION
        </Button>
      </div>
    </section>
  );
};

export default Section2;
