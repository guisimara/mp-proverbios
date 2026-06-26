import { CTAButton } from "../CTAButton";

export function FinalCTA() {
  return (
    <section className="section bg-background pb-32 sm:pb-24">
      <div className="container-page text-center">
        <div className="divider-ornament">
          <span className="text-[0.8rem] tracking-[0.3em] uppercase">Sua decisão</span>
        </div>
        <h2 className="font-serif text-brown leading-[1.1] max-w-xl mx-auto">
          Deus não te chamou para viver perdida em si mesma.
        </h2>
        <p className="mt-5 text-muted-foreground max-w-lg mx-auto leading-relaxed">
          Existe uma mulher sábia, firme e cheia de propósito sendo formada em você.
          Comece hoje essa jornada.
        </p>

        <div className="mt-10 flex justify-center">
          <img
            src="/images/mockup-hero.png"
            alt="Mulher de Provérbios"
            className="w-full"
            style={{ maxWidth: "35rem" }}
          />
        </div>

        <div className="mt-10">
          <CTAButton toCheckout variant="gold" microcopy="Clique no botão e receba seu acesso agora.">
            Sim, quero ser uma Mulher de Provérbios
          </CTAButton>
        </div>

        <p className="mt-12 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Mulher de Provérbios — Material cristão digital. Todos os direitos reservados.
        </p>
      </div>
    </section>
  );
}
