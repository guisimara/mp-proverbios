import { ProductMockup } from "../ProductMockup";

const items = [
  { title: "Mulher de Provérbios", desc: "O guia central para entender e aplicar os princípios da mulher virtuosa na sua vida.", variant: "rose" as const, tag: "Principal" },
  { title: "Planner de Oração", desc: "Para organizar seus pedidos, respostas, devocionais e momentos com Deus.", variant: "gold" as const, tag: "Bônus 1" },
  { title: "Propósito 40 Dias", desc: "Uma jornada espiritual para criar constância e profundidade.", variant: "nude" as const, tag: "Bônus 2" },
  { title: "Afirmações Bíblicas", desc: "Verdades da Palavra para fortalecer sua identidade.", variant: "olive" as const, tag: "Bônus 3" },
  { title: "Mulher Plena", desc: "Conteúdos para vida emocional, espiritual e feminina.", variant: "brown" as const, tag: "Bônus 4" },
  { title: "O Poder da Mesa", desc: "Um material especial sobre presença, lar e conexão familiar.", variant: "rose" as const, tag: "Bônus 5" },
];

export function IncludedItems() {
  return (
    <section className="section bg-gradient-warm">
      <div className="container-page text-center">
        <div className="divider-ornament">
          <span className="text-[0.65rem] tracking-[0.3em] uppercase">Tudo Incluso</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-brown leading-tight">
          Veja tudo o que está incluso
        </h2>
        <p className="mt-3 text-muted-foreground max-w-md mx-auto">Um kit digital completo para sua jornada.</p>

        <div className="mt-10 grid sm:grid-cols-2 gap-5 text-left">
          {items.map((item, i) => (
            <article key={item.title} className="card-soft flex gap-4 items-center hover:shadow-elegant transition-shadow duration-300">
              <ProductMockup title={item.title} variant={item.variant} size="sm" />
              <div className="flex-1 min-w-0">
                <span className="text-[0.6rem] tracking-[0.25em] uppercase text-accent">{item.tag}</span>
                <h3 className="font-serif text-xl text-brown mt-1 leading-tight">{item.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
