import { cn } from "@/lib/utils";

interface MockupProps {
  title: string;
  subtitle?: string;
  variant?: "rose" | "gold" | "olive" | "nude" | "brown";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  device?: "book" | "phone" | "tablet";
}

const variantStyles: Record<string, string> = {
  rose: "bg-gradient-to-br from-rose/90 to-rose/70 text-primary-foreground",
  gold: "bg-gradient-to-br from-gold/90 to-gold/60 text-brown",
  olive: "bg-gradient-to-br from-olive/85 to-olive/65 text-primary-foreground",
  nude: "bg-gradient-to-br from-secondary to-rose-soft text-brown",
  brown: "bg-gradient-to-br from-brown to-brown/70 text-primary-foreground",
};

const sizeClasses: Record<string, string> = {
  sm: "w-28 h-40",
  md: "w-40 h-56",
  lg: "w-52 h-72",
  xl: "w-64 h-[22rem]",
};

export function ProductMockup({
  title,
  subtitle,
  variant = "rose",
  size = "md",
  className,
  device = "book",
}: MockupProps) {
  const radius = device === "phone" ? "rounded-[2rem]" : device === "tablet" ? "rounded-2xl" : "rounded-lg";
  return (
    <div className={cn("relative shrink-0", className)}>
      <div
        className={cn(
          "relative flex flex-col items-center justify-between p-5 shadow-elegant overflow-hidden",
          variantStyles[variant],
          sizeClasses[size],
          radius
        )}
      >
        {/* Ornament top */}
        <div className="w-full flex flex-col items-center gap-1.5 pt-2">
          <div className="h-px w-10 bg-current opacity-50" />
          <span className="text-[0.6rem] tracking-[0.25em] uppercase opacity-80">Cristão · Digital</span>
          <div className="h-px w-10 bg-current opacity-50" />
        </div>

        {/* Title */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-2">
          <h3 className="font-serif font-medium leading-tight text-xl sm:text-2xl">{title}</h3>
          {subtitle && (
            <p className="mt-2 text-[0.65rem] tracking-[0.2em] uppercase opacity-80">{subtitle}</p>
          )}
        </div>

        {/* Ornament bottom */}
        <div className="w-full flex flex-col items-center gap-1.5 pb-1">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="opacity-80">
            <path d="M12 2v20M5 9c0 4 3 7 7 7s7-3 7-7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 20% 10%, white 0%, transparent 50%)" }} />
      </div>
      {/* Page edge */}
      {device === "book" && (
        <div className={cn("absolute top-1 -right-1 h-[calc(100%-0.5rem)] w-1.5 rounded-r bg-card/80 shadow-card")} />
      )}
    </div>
  );
}

export function HeroMockupStack() {
  return (
    <div className="relative mx-auto w-full max-w-md aspect-[5/4] flex items-center justify-center">
      {/* Tablet behind */}
      <div className="absolute -left-2 sm:left-0 top-6 rotate-[-8deg] animate-float" style={{ animationDelay: "0.2s" }}>
        <div className="w-44 sm:w-52 h-60 sm:h-72 rounded-2xl bg-brown p-2 shadow-elegant">
          <div className="w-full h-full rounded-xl bg-gradient-to-br from-secondary to-rose-soft flex flex-col items-center justify-center p-4 text-brown">
            <span className="text-[0.55rem] tracking-[0.3em] uppercase opacity-70">Devocional</span>
            <h4 className="font-serif text-lg mt-2 text-center">Propósito 40 Dias</h4>
            <div className="mt-3 space-y-1 w-full">
              <div className="h-1 w-full bg-brown/15 rounded" />
              <div className="h-1 w-4/5 bg-brown/15 rounded" />
              <div className="h-1 w-3/5 bg-brown/15 rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Main book front */}
      <div className="relative z-10 animate-float">
        <ProductMockup title="Mulher de Provérbios" subtitle="Guia Cristão" variant="rose" size="xl" />
      </div>

      {/* Phone in front-right */}
      <div className="absolute -right-1 sm:right-2 bottom-2 rotate-[10deg] z-20 animate-float" style={{ animationDelay: "0.6s" }}>
        <div className="w-24 sm:w-28 h-48 sm:h-56 rounded-[1.6rem] bg-brown p-1.5 shadow-elegant">
          <div className="w-full h-full rounded-[1.3rem] bg-gradient-to-b from-gold/80 to-gold/40 flex flex-col items-center justify-center p-3 text-brown">
            <span className="text-[0.5rem] tracking-[0.25em] uppercase">Planner</span>
            <h5 className="font-serif text-sm mt-1 text-center leading-tight">Oração & Fé</h5>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-3 opacity-80">
              <path d="M12 3v18M5 10c0 4 3 7 7 7s7-3 7-7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
