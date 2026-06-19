import { ReactNode } from "react";

export function CTAButton({
  children = "Quero começar agora",
  href = "https://checkout.exemplo.com/mulher-de-proverbios",
  variant = "primary",
  microcopy,
}: {
  children?: ReactNode;
  href?: string;
  variant?: "primary" | "gold";
  microcopy?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
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
