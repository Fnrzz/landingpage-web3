import CardBestOffer from "@/components/features/CardBestOffer";
import Hero from "@/components/features/Hero";
import Section2 from "@/components/features/Section2";
import Section3 from "@/components/features/Section3";
import Section4 from "@/components/features/Section4";
import StripeMarquee from "@/components/features/StripeMarquee";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Section2 />
      <div className="relative">
        <StripeMarquee className="transform lg:rotate-3 translate-y-[-20%] lg:translate-x-[-5%]" />
        <CardBestOffer />
      </div>
      <Section3 />
      <StripeMarquee className="transform lg:-rotate-3 translate-y-[-20%] lg:translate-x-[-5%]" />
      <Section4 />
      <StripeMarquee className="transform lg:rotate-3 translate-y-[-20%] lg:translate-x-[-5%]" />
    </main>
  );
}
