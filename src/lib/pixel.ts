// ============================================================
// ⚠️  ARQUIVO PROTEGIDO — NÃO ALTERAR SEM AUTORIZAÇÃO EXPLÍCITA
// Rastreamento Meta Pixel — eventos de conversão centralizados
// Pixel ID: 26718632214483228 | Ver CLAUDE.md
// ============================================================

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

const PIXEL_ID = "26718632214483228";

export const pixel = {
  pageView() {
    if (typeof window.fbq !== "function") return;
    window.fbq("track", "PageView");
  },

  viewContent() {
    if (typeof window.fbq !== "function") return;
    window.fbq("track", "ViewContent", {
      content_name: "Mulher de Provérbios",
      content_category: "Devocional Cristão",
      content_ids: ["mp-proverbios-31"],
      content_type: "product",
      value: 37.90,
      currency: "BRL",
    });
  },

  initiateCheckout() {
    if (typeof window.fbq !== "function") return;
    window.fbq("track", "InitiateCheckout", {
      content_name: "Mulher de Provérbios",
      content_ids: ["mp-proverbios-31"],
      content_type: "product",
      value: 37.90,
      currency: "BRL",
      num_items: 1,
    });
  },

  lead() {
    if (typeof window.fbq !== "function") return;
    window.fbq("track", "Lead", {
      content_name: "Mulher de Provérbios",
      value: 37.90,
      currency: "BRL",
    });
  },
};
