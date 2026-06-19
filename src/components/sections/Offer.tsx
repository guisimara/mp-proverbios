import { ProductMockup } from "../ProductMockup";
import { CTAButton } from "../CTAButton";

const values = [
  ["Material Mulher de Provérbios", "R$ 97"],
  ["Planner de Oração", "R$ 47"],
  ["Propósito 40 Dias", "R$ 47"],
  ["Afirmações Bíblicas", "R$ 27"],
  ["Mulher Plena", "R$ 37"],
  ["O Poder da Mesa", "R$ 37"],
];

export function Offer() {
  return (
    <section id="oferta" className="section bg-gradient-offer">
      <div className="container-page">
        <div className="relative rounded-3xl bg-card border-2 border-gold/40 shadow-elegant p-6 sm:p-10 text-center overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-gold" />
          <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gold/10" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-rose/10" />

          <span className="relative inline-block px-4 py-1 rounded-full bg-gold/20 text-brown text-[0.65rem] tracking-[0.25em] uppercase mb-4">
            Oferta especial por tempo limitado
          </span>

          <h2 className="relative font-serif text-3xl sm:text-4xl text-brown leading-tight max-w-xl mx-auto">
            Comece hoje sua jornada como Mulher de Provérbios
          </h2>

          <div className="relative mt-8 flex justify-center">
            <ProductMockup title="Mulher de Provérbios" subtitle="Kit Completo" size="md" variant="rose" />
          </div>

          <div className="relative mt-8 max-w-sm mx-auto space-y-2 text-left">
            {values.map(([n, v]) => (
              <div key={n} className="flex justify-between items-center py-1.5 border-b border-dashed border-border text-sm text-brown/85">
                <span>{n}</span>
                <span className="line-through text-muted-foreground">{v}</span>
              </div>
            ))}
            <div className="flex justify-between items-center pt-3 text-sm font-medium text-brown">
              <span>Valor total</span>
              <span className="line-through">R$ 292</span>
            </div>
          </div>

          <div className="relative mt-8">
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground">Hoje por apenas</p>
            <p className="font-serif text-6xl sm:text-7xl text-primary mt-1">
              R$37<span className="text-3xl align-top">,90</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">ou em até 5x de R$ 8,24</p>
          </div>

          <div className="relative mt-8">
            <CTAButton variant="gold" microcopy="Acesso imediato após a compra • Material digital • Compra 100% segura">
              Quero garantir meu acesso
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
