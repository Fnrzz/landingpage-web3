"use client";

import Image from "next/image";
import { motion } from "motion/react";

const teamMembers = [
  {
    name: "CALEB",
    role: "CREATIVE & OPERATIONS",
    desc: "CREATIVE INDUSTRIES VETERAN. OPERATES TEAMS LIKE A BEAST. BIG COFFEE & 90'S SNEAKERS SNOB.",
    img: "/assets/char4.avif",
  },
  {
    name: "MARCUS",
    role: "LEAD DEVELOPER",
    desc: "WEB3 WIZARD. WRITES SMART CONTRACTS IN HIS SLEEP. PROBABLY A CYBORG IN DISGUISE.",
    img: "/assets/char2.avif",
  },
  {
    name: "ELARA",
    role: "COMMUNITY MANAGER",
    desc: "HEART OF THE TRIBE. KEEPS THE DISCORD ALIVE 24/7. NEVER MISSES A GM.",
    img: "/assets/char3.avif",
  },
  {
    name: "JAXON",
    role: "3D ARTIST",
    desc: "PIXEL PUSHER AND VERTEX MASTER. BRINGS BEASTS TO LIFE. ALWAYS RENDERING.",
    img: "/assets/char5.avif",
  },
  {
    name: "SOPHIA",
    role: "MARKETING DIRECTOR",
    desc: "GROWTH HACKER. KNOWS THE ALGORITHM BETTER THAN THE CREATORS THEMSELVES.",
    img: "/assets/char6.avif",
  },
];

const Section4 = () => {
  return (
    <section className="w-full pb-20 lg:pb-20 overflow-hidden bg-transparent">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 40,
        }}
      >
        {[...Array(2)].map((_, groupIndex) => (
          <div
            key={groupIndex}
            className="flex items-center gap-6 md:gap-10 lg:gap-14 pr-6 md:pr-10 lg:pr-14"
          >
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="shrink-0 w-[280px] sm:w-[340px] md:w-[380px] lg:w-[450px] bg-white rounded-[2rem] lg:rounded-[2.5rem] flex flex-col gap-4 lg:gap-5 py-8 lg:py-10 px-4 lg:px-6 shadow-2xl"
              >
                <div className="flex justify-between px-4 lg:px-8">
                  <div className="w-8 h-8 lg:w-12 lg:h-12 bg-[#f8672d] rounded-full border-4 lg:border-[5px] border-black p-1 flex items-center justify-center">
                    <div className="w-full h-full bg-black rounded-full"></div>
                  </div>
                  <div className="w-8 h-8 lg:w-12 lg:h-12 bg-[#f8672d] rounded-full border-4 lg:border-[5px] border-black p-1 flex items-center justify-center">
                    <div className="w-full h-full bg-black rounded-full"></div>
                  </div>
                </div>
                <div className="w-full h-[160px] md:h-[180px] lg:h-[200px] bg-[#f8672d] rounded-xl lg:rounded-2xl border-4 lg:border-[5px] border-black flex items-center justify-center overflow-hidden relative mt-2">
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={600}
                    height={600}
                    className="w-[60%] h-full object-cover object-top"
                  />
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-[55px] leading-none mt-4 font-bold text-center tracking-[-0.05em] scale-y-[1.3] lg:scale-y-[1.5] origin-bottom text-[#1a1a1a]">
                  {member.name}
                </h2>
                <h3 className="text-sm sm:text-base lg:text-xl text-[#f8672d] font-black text-center tracking-tight uppercase">
                  {member.role}
                </h3>
                <p className="text-sm md:text-base lg:text-lg text-center font-medium leading-tight text-[#1a1a1a] px-2">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Section4;
