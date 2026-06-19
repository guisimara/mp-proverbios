import { ProductMockup } from "../ProductMockup";

const items = [
  {
    title: "Mulher de Provérbios",
    desc: "O guia central para entender e aplicar os princípios da mulher virtuosa na sua vida.",
    variant: "rose" as const,
    tag: "Principal",
    price: "R$ 97,00",
  },
  {
    title: "Planner de Oração",
    desc: "Para organizar seus pedidos, respostas, devocionais e momentos com Deus.",
    variant: "gold" as const,
    tag: "Bônus 1",
    price: "R$ 47,00",
  },
  {
    title: "Propósito 40 Dias",
    desc: "Uma jornada espiritual para criar constância e profundidade.",
    variant: "nude" as const,
    tag: "Bônus 2",
    price: "R$ 47,00",
  },
  {
    title: "Afirmações Bíblicas",
    desc: "Verdades da Palavra para fortalecer sua identidade.",
    variant: "olive" as const,
    tag: "Bônus 3",
    price: "R$ 27,00",
  },
  {
    title: "Mulher Plena",
    desc: "Conteúdos para vida emocional, espiritual e feminina.",
    variant: "brown" as const,
    tag: "Bônus 4",
    price: "R$ 37,00",
  },
  {
    title: "O Poder da Mesa",
    desc: "Um material especial sobre presença, lar e conexão familiar.",
    variant: "rose" as const,
    tag: "Bônus 5",
    price: "R$ 37,00",
  },
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

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {items.map((item) => (
            <article
              key={item.title}
              className="card-soft flex flex-col overflow-hidden p-0 hover:shadow-elegant transition-shadow duration-300"
            >
              {/* Mockup grande, quase preenchendo o card */}
              <div className="w-full flex justify-center items-end bg-gradient-to-b from-secondary/40 to-secondary/10 pt-6 pb-0">
                <ProductMockup
                  title={item.title}
                  variant={item.variant}
                  size="lg"
                  className="translate-y-2"
                />
              </div>

              {/* Conteúdo */}
              <div className="p-5 flex flex-col gap-2 flex-1">
                {/* Tag */}
                <span className="text-[0.6rem] tracking-[0.25em] uppercase text-accent font-sans">
                  {item.tag}
                </span>

                {/* Título */}
                <h3 className="font-serif text-xl text-brown leading-tight">{item.title}</h3>

                {/* Descrição */}
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">{item.desc}</p>

                {/* Valores */}
                <div className="mt-3 pt-3 border-t border-dashed border-border flex items-center gap-3">
                  <span className="text-sm text-muted-foreground line-through">{item.price}</span>
                  <span className="text-sm font-semibold text-emerald-600">R$ 0,00</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
