import { ProductMockup } from "../ProductMockup";
import { CTAButton } from "../CTAButton";

const values = [
  ["Material Mulher de Provérbios", "R$ 97,00"],
  ["Planner de Oração", "R$ 47,00"],
  ["Propósito 40 Dias", "R$ 47,00"],
  ["Afirmações Bíblicas", "R$ 27,00"],
  ["Mulher Plena", "R$ 37,00"],
  ["O Poder da Mesa", "R$ 37,00"],
];

const trustCards = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Acesso imediato",
    sub: "Liberado após a compra",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 7h6M9 11h6M9 15h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    label: "100% digital",
    sub: "Acesse em qualquer dispositivo",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Compra segura",
    sub: "7 dias de garantia",
  },
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
            Comece hoje mesmo sua jornada como uma Mulher de Provérbios
          </h2>

          {/* Mockup */}
          <div className="relative mt-8 flex justify-center">
            <ProductMockup title="Mulher de Provérbios" subtitle="Kit Completo" size="lg" variant="rose" />
          </div>

          {/* Você recebe hoje */}
          <div className="relative mt-8 max-w-sm mx-auto">
            <p className="text-[0.65rem] tracking-[0.28em] uppercase text-accent mb-4">Você recebe hoje</p>
            <div className="space-y-2 text-left">
              {values.map(([n, v]) => (
                <div key={n} className="flex justify-between items-center py-1.5 border-b border-dashed border-border text-sm text-brown/85">
                  <span className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-rose shrink-0">
                      <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {n}
                  </span>
                  <span className="line-through text-muted-foreground shrink-0 ml-2">{v}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center pt-3 text-sm font-semibold text-brown">
              <span>Valor total</span>
              <span className="line-through text-muted-foreground">R$ 292,00</span>
            </div>
          </div>

          {/* Pitch */}
          <div className="relative mt-8 max-w-sm mx-auto">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Por tudo isso, você não vai pagar R$ 292. Hoje, você garante acesso completo ao kit
              por um investimento único — sem assinatura, sem renovação.
            </p>
          </div>

          {/* Preço */}
          <div className="relative mt-6">
            <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground">Hoje por apenas</p>
            <p className="font-sans font-black text-6xl sm:text-7xl text-primary mt-1 tracking-tight">
              R$<span className="text-5xl sm:text-6xl">37</span><span className="text-3xl sm:text-4xl">,90</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">ou em até 5x de R$ 8,24</p>
          </div>

          {/* Botão verde */}
          <div className="relative mt-8">
            <a
              href="https://pay.kiwify.com.br/n09blri"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green text-base px-8 py-5 w-full sm:w-auto"
            >
              Quero garantir meu acesso
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* 3 cards de confiança */}
          <div className="relative mt-6 grid grid-cols-3 gap-3 max-w-sm mx-auto">
            {trustCards.map((c) => (
              <div key={c.label} className="flex flex-col items-center gap-1.5 bg-secondary/50 rounded-xl p-3 border border-border/50">
                <span className="text-accent">{c.icon}</span>
                <p className="text-[0.65rem] font-semibold text-brown leading-tight text-center">{c.label}</p>
                <p className="text-[0.55rem] text-muted-foreground text-center leading-tight">{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
