import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Como recebo o material?", a: "Após a confirmação da compra, você recebe o acesso no e-mail cadastrado." },
  { q: "O material é físico?", a: "Não. O Mulher de Provérbios é 100% digital." },
  { q: "Posso acessar pelo celular?", a: "Sim. Você pode acessar pelo celular, tablet ou computador." },
  { q: "Serve para solteiras?", a: "Sim. O conteúdo foi pensado para mulheres solteiras, casadas e mães." },
  { q: "Por quanto tempo tenho acesso?", a: "Você terá acesso conforme as condições informadas na plataforma de compra." },
  { q: "Tem garantia?", a: "Sim. Você tem 7 dias de garantia." },
];

export function FAQ() {
  return (
    <section className="section bg-gradient-warm">
      <div className="container-page">
        <div className="text-center">
          <div className="divider-ornament">
            <span className="text-[0.65rem] tracking-[0.3em] uppercase">Dúvidas</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-brown">Perguntas frequentes</h2>
        </div>

        <Accordion type="single" collapsible className="mt-10 max-w-xl mx-auto space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border bg-card rounded-2xl px-5 shadow-card"
            >
              <AccordionTrigger className="text-left font-serif text-lg text-brown hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
