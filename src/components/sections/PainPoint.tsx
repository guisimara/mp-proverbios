const pains = [
  "Você começa propósitos, mas se perde no meio do caminho.",
  "Você quer ser mais sábia, mas vive cansada e sobrecarregada.",
  "Você deseja se aproximar de Deus, mas não sabe por onde começar.",
  "Você quer ser uma mulher virtuosa, mas se cobra demais.",
];

export function PainPoint() {
  return (
    <section className="section bg-background">
      <div className="container-page text-center">
        <div className="divider-ornament">
          <span className="text-[0.65rem] tracking-[0.3em] uppercase">Identificação</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-brown leading-tight max-w-xl mx-auto">
          Você sente que ama a Deus, mas ainda se sente perdida na prática?
        </h2>
        <p className="mt-5 text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Muitas mulheres conhecem Provérbios 31, admiram a mulher virtuosa, mas não sabem
          como trazer essa sabedoria para a rotina real: casamento, maternidade, trabalho,
          casa, emoções, decisões e vida espiritual.
        </p>

        <ul className="mt-10 grid sm:grid-cols-2 gap-4 text-left">
          {pains.map((p) => (
            <li key={p} className="card-soft flex gap-3 items-start">
              <span className="flex items-center justify-center w-9 h-9 rounded-full bg-rose-soft text-rose shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 9v4M12 17h.01M10.3 3.86L2.82 17a2 2 0 001.71 3h14.94a2 2 0 001.71-3L13.7 3.86a2 2 0 00-3.4 0z"
                    stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <p className="text-sm text-brown/90 leading-relaxed">{p}</p>
            </li>
          ))}
        </ul>

        <p className="mt-12 font-serif italic text-2xl sm:text-3xl text-primary leading-snug max-w-lg mx-auto">
          “Ser uma Mulher de Provérbios não é sobre perfeição. É sobre direção.”
        </p>
      </div>
    </section>
  );
}
