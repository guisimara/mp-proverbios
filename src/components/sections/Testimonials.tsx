const items = [
  {
    name: "Mariana A.",
    photo: "/images/ps1.png",
    text: "Esse material me ajudou a voltar a ter constância com Deus sem sentir culpa.",
  },
  {
    name: "Beatriz S.",
    photo: "/images/ps2.png",
    text: "Eu achava que ser virtuosa era ser perfeita. Hoje entendo que é caminhar com direção.",
  },
  {
    name: "Carolina T.",
    photo: "/images/ps3.png",
    text: "A linguagem é simples, mas toca profundamente. Parece uma conversa de irmã mais velha.",
  },
  {
    name: "Joana P.",
    photo: "/images/ps4.png",
    text: "O planner de oração me ajudou muito a organizar minha vida espiritual.",
  },
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

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
          {items.map((t, i) => (
            <div
              key={i}
              className="card-soft overflow-hidden p-0 hover:shadow-elegant transition-shadow duration-300"
            >
              {/* Foto do depoimento */}
              <div className="w-full aspect-[4/3] bg-secondary/40 overflow-hidden">
                <img
                  src={t.photo}
                  alt={`Depoimento de ${t.name}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.classList.add("flex", "items-center", "justify-center");
                      parent.innerHTML = `<span class="font-serif text-6xl text-primary/20">${t.name[0]}</span>`;
                    }
                  }}
                />
              </div>

              {/* Texto */}
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div>
                    <p className="text-sm font-medium text-brown">{t.name}</p>
                    <div className="flex gap-0.5 text-gold mt-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.6L6 22l1.5-7.2L2 10l7.1-1.1L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-brown/85 leading-relaxed italic">"{t.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
