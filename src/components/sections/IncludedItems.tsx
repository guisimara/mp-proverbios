const items = [
  {
    tag: "Principal",
    title: "Mulher de Provérbios",
    desc: "Um guia prático e edificante para mulheres que desejam viver os princípios de Provérbios 31, identidade, feminilidade, sabedoria.",
    img: "/images/mproverbios.png",
    price: "R$ 97,00",
  },
  {
    tag: "Bônus 1",
    title: "Propósito de 40 Dias da Mulher Virtuosa",
    desc: "Fortaleça sua fé, desenvolva uma conexão mais profunda com Deus. Com reflexões diárias, passagens bíblicas e desafios práticos.",
    img: "/images/proposito40d.png",
    price: "R$ 47,00",
  },
  {
    tag: "Bônus 2",
    title: "Mulher Plena: Equilíbrio Espiritual, Emoções e Pessoal",
    desc: "Pequenos hábitos que aumentam a feminilidade. Como desenvolver um jeito mais gracioso e elegante.",
    img: "/images/Mulher Plena.jpg",
    price: "R$ 37,00",
  },
  {
    tag: "Bônus 3",
    title: "O Poder da Mesa: Restaurando lares e corações",
    desc: "Redescubra a importância da mesa como um lugar de comunhão, cura e transformação. Assim como Jesus se sentava à mesa para ensinar.",
    img: "/images/O Poder da Mesa.png",
    price: "R$ 37,00",
  },
  {
    tag: "Bônus 4",
    title: "Temperamentos e Relacionamentos",
    desc: "Um guia prático para mulheres que desejam se conhecer melhor, compreender suas reações emocionais e melhorar a forma como se relacionam.",
    img: "/images/temperamentos.png",
    price: "R$ 47,00",
  },
  {
    tag: "Bônus 5",
    title: "Oração Intercessora: Impactando Vidas Através da Fé",
    desc: "Jesus disse, vão e façam discípulos de todas as nações. Saiba exatamente como trazer mais pessoas a conhecer a palavra de Deus.",
    img: "/images/Oração Intercessora.jpg",
    price: "R$ 37,00",
  },
  {
    tag: "Bônus 6",
    title: "Aulas em Vídeo Exclusivas para Alunas",
    desc: "Aulas práticas e edificantes para mulheres que desejam compreender, de forma simples e profunda, como viver os princípios de Provérbios 31.",
    img: "/images/videoaula.png",
    price: "R$ 97,00",
  },
  {
    tag: "Bônus 7",
    title: "Jejum de Ester",
    desc: "3 Dias de Direção, Alinhamento e Sabedoria. Talvez você tenha chegado até aqui cansada de tentar resolver tudo sozinha.",
    img: "/images/jejum ester.png",
    price: "R$ 27,00",
  },
  {
    tag: "Bônus 8",
    title: "Áudio Especial de Afirmações Bíblicas para Mulheres",
    desc: "Renove sua mente, fortalecer sua identidade em Cristo e trazer paz ao seu coração.",
    img: "/images/afirmacoes.png",
    price: "R$ 27,00",
  },
];

export function IncludedItems() {
  return (
    <section className="section bg-gradient-warm">
      <div className="container-page text-center">
        <div className="divider-ornament">
          <span className="text-[0.65rem] tracking-[0.3em] uppercase">Tudo Incluso</span>
        </div>
        <h2 className="font-serif text-brown leading-tight">
          Veja tudo o que você recebe comprando o{" "}
          <em className="text-primary font-medium">Mulher de Provérbios</em>
        </h2>
        <p className="mt-3 text-muted-foreground max-w-md mx-auto">
          Kit com material digital completo para auxiliar a sua jornada espiritual. Confira:
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {items.map((item) => (
            <article
              key={item.title}
              className="card-soft flex flex-col overflow-hidden p-0 hover:shadow-elegant transition-shadow duration-300"
            >
              <div className="w-full overflow-hidden bg-gradient-to-b from-secondary/40 to-secondary/10">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="p-5 flex flex-col gap-2 flex-1">
                <span className="text-[0.6rem] tracking-[0.25em] uppercase text-accent font-sans">
                  {item.tag}
                </span>

                <h3
                  className="font-serif text-brown leading-tight"
                  style={{ fontSize: "1.4rem", fontWeight: 500 }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-muted-foreground leading-relaxed flex-1"
                  style={{ fontSize: "0.9rem" }}
                >
                  {item.desc}
                </p>

                <div className="mt-3 pt-3 border-t border-dashed border-border flex items-center gap-3">
                  <span className="text-muted-foreground line-through" style={{ fontSize: "1.2rem" }}>
                    {item.price}
                  </span>
                  <span className="font-semibold text-emerald-600" style={{ fontSize: "1.2rem" }}>
                    R$ 0,00
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
