import CardBestOffer from "@/components/features/CardBestOffer";
import Hero from "@/components/features/Hero";
import Section2 from "@/components/features/Section2";
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
    </main>
  );
}
