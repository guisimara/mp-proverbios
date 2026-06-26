import { useEffect, useState } from "react";
import { pixel } from "@/lib/pixel";

const CHECKOUT_URL = "https://pay.kiwify.com.br/n09blri";

function buildCheckoutUrl(): string {
  const params = new URLSearchParams(window.location.search);
  const forward = new URLSearchParams();
  ["fbclid", "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach((k) => {
    const v = params.get(k);
    if (v) forward.set(k, v);
  });
  const qs = forward.toString();
  return qs ? `${CHECKOUT_URL}?${qs}` : CHECKOUT_URL;
}

export function StickyCTA() {
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
          href={buildCheckoutUrl()}
          onClick={() => pixel.initiateCheckout()}
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
