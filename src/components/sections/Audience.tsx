const forYou = [
  "Você quer se aproximar de Deus com mais constância.",
  "Você deseja entender melhor a mulher de Provérbios 31.",
  "Você quer fortalecer sua identidade em Cristo.",
  "Você sente que precisa de direção espiritual na rotina.",
  "Você quer viver feminilidade bíblica sem peso e sem comparação.",
  "Você busca um material simples, bonito e profundo para estudar no seu tempo.",
];

const notForYou = [
  "Você procura uma fórmula mágica sem prática diária.",
  "Você não deseja aplicar princípios bíblicos na sua vida.",
  "Você espera um conteúdo frio, técnico e sem profundidade espiritual.",
];

export function Audience() {
  return (
    <section className="section bg-gradient-warm">
      <div className="container-page space-y-10">
        <div>
          <div className="divider-ornament">
            <span className="text-[0.8rem] tracking-[0.3em] uppercase">Para Você</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-brown leading-tight text-center max-w-lg mx-auto">
            Esse material é para você se...
          </h2>
          <ul className="mt-8 space-y-3 max-w-xl mx-auto">
            {forYou.map((t) => (
              <li key={t} className="flex items-start gap-3 card-soft py-4">
                <span className="w-7 h-7 rounded-full bg-rose/15 text-rose flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
                <p className="text-sm text-brown/90 leading-relaxed">{t}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-2xl sm:text-3xl text-brown/70 leading-tight text-center max-w-lg mx-auto">
            Esse material não é para você se...
          </h2>
          <ul className="mt-6 space-y-3 max-w-xl mx-auto">
            {notForYou.map((t) => (
              <li key={t} className="flex items-start gap-3 py-3 px-4 rounded-xl bg-muted/60 border border-border/40">
                <span className="w-6 h-6 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-sm shrink-0">×</span>
                <p className="text-sm text-muted-foreground leading-relaxed">{t}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
