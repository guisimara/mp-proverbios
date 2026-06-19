import { Hero } from "@/components/sections/Hero";
import { PainPoint } from "@/components/sections/PainPoint";
import { Transformation } from "@/components/sections/Transformation";
import { ProductIntro } from "@/components/sections/ProductIntro";
import { IncludedItems } from "@/components/sections/IncludedItems";
import { Expert } from "@/components/sections/Expert";
import { Audience } from "@/components/sections/Audience";
import { Testimonials } from "@/components/sections/Testimonials";
import { Offer } from "@/components/sections/Offer";
import { Guarantee } from "@/components/sections/Guarantee";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { StickyCTA } from "@/components/StickyCTA";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <PainPoint />
      <Transformation />
      <ProductIntro />
      <IncludedItems />
      <Expert />
      <Audience />
      <Testimonials />
      <Offer />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <StickyCTA />
    </main>
  );
};

export default Index;
