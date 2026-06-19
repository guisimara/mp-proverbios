export function Expert() {
  return (
    <section className="section bg-background">
      <div className="container-page text-center">
        <div className="divider-ornament">
          <span className="text-[0.65rem] tracking-[0.3em] uppercase">Quem Criou</span>
        </div>

        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-rose flex items-center justify-center shadow-elegant border-4 border-card">
              <span className="font-serif text-5xl text-primary-foreground">LF</span>
            </div>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-gold/90 text-brown text-[0.6rem] tracking-[0.2em] uppercase rounded-full whitespace-nowrap">Letícia Fessel</span>
          </div>
        </div>

        <h2 className="mt-8 font-serif text-3xl sm:text-4xl text-brown leading-tight max-w-xl mx-auto">
          Criado por uma mulher cristã para mulheres cristãs
        </h2>
        <p className="mt-5 text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Letícia Fessel é criadora de conteúdos sobre feminilidade bíblica, identidade em Cristo,
          vida espiritual e construção de uma rotina com propósito. Este material nasceu para ajudar
          mulheres comuns a viverem a fé de forma prática, profunda e possível dentro da vida real.
        </p>

        <div className="mt-10 mx-auto max-w-md card-soft bg-secondary/60 border-gold/30">
          <p className="font-serif italic text-xl text-brown leading-snug">
            “Você não precisa se tornar outra pessoa. Você precisa se lembrar de quem Deus te chamou para ser.”
          </p>
        </div>
      </div>
    </section>
  );
}
