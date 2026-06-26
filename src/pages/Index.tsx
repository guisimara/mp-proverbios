import { useEffect, lazy, Suspense } from "react";
import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";
import { pixel } from "@/lib/pixel";

// Seções abaixo do fold carregadas de forma lazy (reduz JS inicial)
const PainPoint     = lazy(() => import("@/components/sections/PainPoint").then(m => ({ default: m.PainPoint })));
const Transformation = lazy(() => import("@/components/sections/Transformation").then(m => ({ default: m.Transformation })));
const ProductIntro  = lazy(() => import("@/components/sections/ProductIntro").then(m => ({ default: m.ProductIntro })));
const IncludedItems = lazy(() => import("@/components/sections/IncludedItems").then(m => ({ default: m.IncludedItems })));
const Audience      = lazy(() => import("@/components/sections/Audience").then(m => ({ default: m.Audience })));
const Offer         = lazy(() => import("@/components/sections/Offer").then(m => ({ default: m.Offer })));
const Guarantee     = lazy(() => import("@/components/sections/Guarantee").then(m => ({ default: m.Guarantee })));
const Expert        = lazy(() => import("@/components/sections/Expert").then(m => ({ default: m.Expert })));
const FAQ           = lazy(() => import("@/components/sections/FAQ").then(m => ({ default: m.FAQ })));
const FinalCTA      = lazy(() => import("@/components/sections/FinalCTA").then(m => ({ default: m.FinalCTA })));
const StickyCTA     = lazy(() => import("@/components/StickyCTA").then(m => ({ default: m.StickyCTA })));

const Index = () => {
  useEffect(() => {
    pixel.viewContent();
  }, []);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero e Depoimentos carregam imediatamente (acima do fold) */}
      <Hero />
      <Testimonials />

      {/* Restante carrega de forma lazy após o JS inicial */}
      <Suspense fallback={null}>
        <PainPoint />
        <Transformation />
        <ProductIntro />
        <IncludedItems />
        <Audience />
        <Offer />
        <Guarantee />
        <Expert />
        <FAQ />
        <FinalCTA />
        <StickyCTA />
      </Suspense>
    </main>
  );
};

export default Index;
