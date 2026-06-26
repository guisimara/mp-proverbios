import { CTAButton } from "../CTAButton";

const features = [
  "Reflexões guiadas",
  "Devocionais práticos",
  "Exercícios de identidade",
  "Direcionamentos bíblicos",
  "Espaço para anotações",
  "Aplicações para a vida real",
];

export function ProductIntro() {
  return (
    <section className="section bg-background">
      <div className="container-page text-center">
        <div className="divider-ornament">
          <span className="text-[0.8rem] tracking-[0.3em] uppercase">O Produto</span>
        </div>
        <h2 className="font-serif text-brown leading-tight">
          Conheça o <em className="text-primary font-medium">Mulher de Provérbios</em>
        </h2>
        <p className="mt-5 text-muted-foreground max-w-xl mx-auto leading-relaxed">
          O Mulher de Provérbios é um material digital cristão criado para mulheres que desejam viver uma transformação real,
          saindo da teoria e aprendendo a aplicar princípios bíblicos na rotina, nos relacionamentos,
          nas emoções e na caminhada com Deus.
        </p>

        <div className="mt-10 flex justify-center">
          <img
            src="/images/mockup-m2.webp" loading="lazy" width="600" height="500"
            alt="Mulher de Provérbios"
            className="w-full"
            style={{ maxWidth: "35rem" }}
          />
        </div>

        <ul className="mt-10 grid sm:grid-cols-2 gap-3 max-w-lg mx-auto text-left">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-3 text-sm text-brown/90">
              <span className="w-6 h-6 rounded-full bg-gold/20 text-brown flex items-center justify-center shrink-0">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <CTAButton href="#bonus">Sim, eu quero o material</CTAButton>
        </div>
      </div>
    </section>
  );
}
