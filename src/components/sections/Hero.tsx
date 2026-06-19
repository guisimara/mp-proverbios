import { HeroMockupStack } from "./ProductMockup";
import { CTAButton } from "./CTAButton";

const bullets = [
  "Acesso imediato",
  "Material 100% digital",
  "Linguagem simples, profunda e prática",
  "Para solteiras, casadas e mães",
];

export function Hero() {
  return (
    <header className="relative overflow-hidden bg-gradient-warm">
      <div className="absolute inset-0 opacity-40 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(ellipse at top, hsl(var(--rose-soft)) 0%, transparent 60%)" }} />
      <div className="container-page relative pt-12 pb-16 sm:pt-16 sm:pb-20 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card/80 border border-accent/30 text-xs tracking-[0.2em] uppercase text-brown reveal">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Material cristão digital para mulheres
        </span>

        <h1 className="mt-6 font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-brown reveal reveal-delay-1">
          Descubra como viver a sabedoria da{" "}
          <em className="text-primary font-medium">Mulher de Provérbios</em> no seu dia a dia
        </h1>

        <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed reveal reveal-delay-2">
          Um guia prático e espiritual para mulheres que desejam fortalecer sua identidade em Deus,
          organizar sua rotina com propósito e viver uma feminilidade bíblica com mais leveza,
          sabedoria e direção.
        </p>

        <div className="mt-10 reveal reveal-delay-2">
          <HeroMockupStack />
        </div>

        <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto text-left reveal reveal-delay-3">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-3 text-sm text-brown/90">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-rose/15 text-rose shrink-0">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-10 reveal reveal-delay-3">
          <CTAButton microcopy="Compra segura • Acesso imediato • Garantia de 7 dias">
            Quero começar agora
          </CTAButton>
        </div>
      </div>
    </header>
  );
}
