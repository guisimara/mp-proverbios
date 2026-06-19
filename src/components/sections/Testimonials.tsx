const items = [
  { name: "Mariana A.", text: "Esse material me ajudou a voltar a ter constância com Deus sem sentir culpa." },
  { name: "Beatriz S.", text: "Eu achava que ser virtuosa era ser perfeita. Hoje entendo que é caminhar com direção." },
  { name: "Carolina T.", text: "A linguagem é simples, mas toca profundamente. Parece uma conversa de irmã mais velha." },
  { name: "Joana P.", text: "O planner de oração me ajudou muito a organizar minha vida espiritual." },
];

export function Testimonials() {
  return (
    <section className="section bg-background">
      <div className="container-page text-center">
        <div className="divider-ornament">
          <span className="text-[0.65rem] tracking-[0.3em] uppercase">Depoimentos</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-brown leading-tight">
          Mulheres que começaram essa jornada
        </h2>

        <div className="mt-10 grid sm:grid-cols-2 gap-4 text-left">
          {items.map((t, i) => (
            <div key={i} className="card-soft bg-gradient-to-br from-card to-secondary/30 hover:shadow-elegant transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-rose flex items-center justify-center text-primary-foreground font-serif">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-medium text-brown">{t.name}</p>
                  <div className="flex gap-0.5 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.6L6 22l1.5-7.2L2 10l7.1-1.1L12 2z" /></svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-brown/85 leading-relaxed italic">“{t.text}”</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground italic">* Depoimentos ilustrativos.</p>
      </div>
    </section>
  );
}
