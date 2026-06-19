import { useEffect, useState } from "react";

export function StickyCTA({ href = "https://checkout.exemplo.com/mulher-de-proverbios" }: { href?: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 sm:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-card/95 backdrop-blur border-t border-border shadow-elegant px-4 py-3">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full text-xs"
        >
          Garantir acesso por R$ 37,90
        </a>
      </div>
    </div>
  );
}
