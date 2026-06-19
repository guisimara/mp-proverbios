const before = ["Rotina sem direção", "Vida espiritual instável", "Emoções no comando", "Comparação e culpa"];
const after = ["Clareza espiritual", "Constância com Deus", "Postura mais sábia", "Feminilidade com propósito"];

export function Transformation() {
  return (
    <section className="section bg-gradient-warm">
      <div className="container-page text-center">
        <div className="divider-ornament">
          <span className="text-[0.65rem] tracking-[0.3em] uppercase">Transformação</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-brown leading-tight max-w-2xl mx-auto">
          O que muda quando você começa a construir sua vida com sabedoria bíblica?
        </h2>

        <div className="mt-10 grid sm:grid-cols-2 gap-5 text-left">
          <div className="card-soft border-rose-soft/80 bg-secondary/40">
            <h3 className="font-serif text-2xl text-brown/70 mb-4">Antes</h3>
            <ul className="space-y-3">
              {before.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="w-6 h-6 rounded-full bg-muted text-muted-foreground/80 flex items-center justify-center text-xs">×</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-soft border-gold/40 bg-card relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gold/10" />
            <h3 className="font-serif text-2xl text-primary mb-4">Depois</h3>
            <ul className="space-y-3 relative">
              {after.map((a) => (
                <li key={a} className="flex items-center gap-3 text-sm text-brown">
                  <span className="w-6 h-6 rounded-full bg-rose/15 text-rose flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Este material foi criado para te conduzir passo a passo em uma jornada simples,
          profunda e prática de fortalecimento espiritual, identidade e virtude.
        </p>
      </div>
    </section>
  );
}
