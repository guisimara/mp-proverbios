import { ReactNode } from "react";
import { pixel } from "@/lib/pixel";

const CHECKOUT_URL = "https://pay.kiwify.com.br/n09blri";

/** Pega fbclid e UTMs da URL atual e repassa para o checkout */
function buildCheckoutUrl(base: string): string {
  if (typeof window === "undefined") return base;
  const params = new URLSearchParams(window.location.search);
  const forward = new URLSearchParams();

  // Parâmetros que o Kiwify usa para atribuição no CAPI
  const keys = ["fbclid", "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
  keys.forEach((k) => {
    const v = params.get(k);
    if (v) forward.set(k, v);
  });

  const qs = forward.toString();
  return qs ? `${base}?${qs}` : base;
}

export function CTAButton({
  children = "Quero começar agora",
  href,
  toCheckout = false,
  variant = "primary",
  microcopy,
}: {
  children?: ReactNode;
  href?: string;
  toCheckout?: boolean;
  variant?: "primary" | "gold";
  microcopy?: string;
}) {
  const baseHref = toCheckout ? CHECKOUT_URL : (href ?? "#oferta");
  const isExternal = baseHref.startsWith("http");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (toCheckout) {
      pixel.initiateCheckout();
      // Atualiza o href com fbclid/UTMs antes de navegar
      const url = buildCheckoutUrl(CHECKOUT_URL);
      if (url !== CHECKOUT_URL) {
        e.preventDefault();
        window.open(url, "_blank", "noopener,noreferrer");
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <a
        href={baseHref}
        onClick={handleClick}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={variant === "gold" ? "btn-gold" : "btn-primary"}
      >
        {children}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
      {microcopy && (
        <p className="text-xs text-muted-foreground text-center max-w-xs">{microcopy}</p>
      )}
    </div>
  );
}
