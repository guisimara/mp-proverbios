import { CTAButton } from "../CTAButton";

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

        {/* By Leticia Fessel — fonte manuscrita, base de logotipo */}
        <p className="font-script text-2xl sm:text-3xl text-primary/80 tracking-wide reveal">
          By Leticia Fessel
        </p>

        {/* Label sem linhas laterais */}
        <div className="mt-5 reveal">
          <span className="text-[0.65rem] tracking-[0.15em] uppercase text-brown/55 font-sans whitespace-nowrap">
            Material Cristão Para Mulheres
          </span>
        </div>

        <h1 className="mt-5 font-serif text-brown reveal reveal-delay-1">
          Em 10 minutos por dia, desenvolva uma rotina com Deus e comece a viver as virtudes da{" "}
          <em className="text-primary font-medium">Mulher Virtuosa de Provérbios 31</em>
        </h1>

        <p className="mt-5 text-[1rem] sm:text-[1.1rem] text-muted-foreground max-w-xl mx-auto leading-relaxed reveal reveal-delay-2">
          Um devocional prático e profundo para mulheres que desejam fortalecer sua identidade em Deus.
          Organizar sua rotina com propósito e viver uma feminilidade Bíblica com mais leveza, sabedoria e direção.
        </p>

        <div className="mt-10 flex justify-center reveal reveal-delay-2">
          <img
            src="/images/mockup-hero.png"
            alt="Mulher de Provérbios"
            className="max-w-sm sm:max-w-lg w-full"
          />
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
          <CTAButton href="#bonus" microcopy="Compra segura • Acesso imediato • Garantia de 7 dias">
            Quero começar agora
          </CTAButton>
        </div>
      </div>
    </header>
  );
}
