export function Guarantee() {
  return (
    <section className="section bg-background">
      <div className="container-page">
        <div className="card-soft bg-gradient-warm text-center max-w-xl mx-auto p-8 sm:p-10">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="hsl(var(--brown))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 12l2 2 4-4" stroke="hsl(var(--brown))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <div className="flex justify-center mt-4 mb-6">
            <img
              src="/images/mockup-m2.png"
              alt="Garantia de 7 dias"
              className="max-w-[240px] w-full"
            />
          </div>

          <h2 className="font-serif text-brown">Você tem 7 dias de garantia</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Se por algum motivo você sentir que o material não é para você, basta solicitar o
            reembolso dentro do prazo de garantia. Simples, seguro e sem burocracia.
          </p>
        </div>
      </div>
    </section>
  );
}
