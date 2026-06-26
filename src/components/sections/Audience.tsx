const forYou = [
  "Você quer se aproximar de Deus com mais constância.",
  "Você deseja entender melhor a mulher de Provérbios 31.",
  "Você quer fortalecer sua identidade em Cristo.",
  "Você sente que precisa de direção espiritual na rotina.",
  "Você quer viver feminilidade bíblica sem peso e sem comparação.",
  "Você busca um material simples, bonito e profundo para estudar no seu tempo.",
];

const notForYou = [
  "Você procura uma fórmula mágica sem prática diária.",
  "Você não deseja aplicar princípios bíblicos na sua vida.",
  "Você espera um conteúdo frio, técnico e sem profundidade espiritual.",
];

export function Audience() {
  return (
    <section className="section bg-gradient-warm">
      <div className="container-page">
        <div className="divider-ornament">
          <span className="text-[0.8rem] tracking-[0.3em] uppercase">Para Você</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-brown leading-tight text-center max-w-lg mx-auto mb-10">
          Esse material é para você?
        </h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {/* Card É para você */}
          <div className="bg-white rounded-2xl border border-border/60 shadow-card p-6 flex flex-col gap-4">
            <h3 className="font-serif text-lg text-brown text-center mb-2">✅ É para você se...</h3>
            <ul className="space-y-3">
              {forYou.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12l5 5L20 7" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p className="text-sm text-brown/90 leading-relaxed">{t}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Card NÃO é para você */}
          <div className="bg-white rounded-2xl border border-border/60 shadow-card p-6 flex flex-col gap-4">
            <h3 className="font-serif text-lg text-brown text-center mb-2">❌ Não é para você se...</h3>
            <ul className="space-y-3">
              {notForYou.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6l12 12" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p className="text-sm text-brown/90 leading-relaxed">{t}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
