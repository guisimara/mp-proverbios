export function Expert() {
  return (
    <section className="section bg-background">
      <div className="container-page text-center">
        <div className="divider-ornament">
          <span className="text-[0.8rem] tracking-[0.3em] uppercase">Sobre Mim</span>
        </div>

        {/* Foto — placeholder até a foto real chegar */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-[40%] aspect-square rounded-full overflow-hidden shadow-elegant border-4 border-card bg-secondary flex items-center justify-center">
              <img
                src="/images/leticia.png"
                alt="Letícia Fessel"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<span class="font-serif text-5xl text-primary/60">LF</span>`;
                  }
                }}
              />
            </div>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-gold/90 text-brown text-[0.6rem] tracking-[0.2em] uppercase rounded-full whitespace-nowrap shadow-card">
              Letícia Fessel
            </span>
          </div>
        </div>

        {/* Mini título */}
        <p className="mt-8 text-[0.9rem] tracking-[0.25em] uppercase text-accent font-sans">
          Fundadora do Clube da Mulher Virtuosa
        </p>

        <h2 className="mt-2 font-serif text-brown leading-tight max-w-xl mx-auto">
          Criado por uma mulher cristã para mulheres cristãs
        </h2>

        <div className="mt-6 space-y-4 text-muted-foreground max-w-xl mx-auto leading-relaxed text-left sm:text-center">
          <p>
            Sou criadora de conteúdos sobre feminilidade bíblica, identidade em Cristo, vida espiritual e
            construção de uma rotina com propósito. Este material nasceu para ajudar mulheres comuns a
            viverem a fé de forma prática, profunda e possível dentro da vida real.
          </p>
          <p>
            Eu não criei este material para mulheres que querem apenas consumir mais um conteúdo cristão.
            Eu criei para mulheres que querem construir uma vida com Deus na prática.
          </p>
          <p>
            Mulheres que sabem que a transformação não acontece só em grandes momentos, mas nas pequenas
            escolhas: no modo como falam, cuidam da casa, servem, oram, se posicionam e decidem voltar
            para Deus mesmo nos dias difíceis.
          </p>
        </div>

        <div className="mt-10 mx-auto max-w-md card-soft bg-secondary/60 border-gold/30">
          <p className="font-serif italic text-xl text-brown leading-snug">
            "O Mulher de Provérbios nasceu para ser simples de acompanhar, profundo o suficiente para
            confrontar e prático o bastante para caber na sua rotina."
          </p>
          <p className="mt-3 text-xs text-muted-foreground tracking-wide">
            Letícia Fessel — Clube da Mulher Virtuosa
          </p>
        </div>
      </div>
    </section>
  );
}
