/**
 * Configuração central do turbo-links: rotas de redirecionamento,
 * variantes A/B, categorias e dados do grupo.
 * 
 * NOTA: Os links reais de destino ficam exclusivamente no vercel.json.
 */

export type Platform = "whatsapp" | "telegram";

export const redirects = {
  whatsapp: "/go/whatsapp",
  telegram: "/go/telegram",
  bot: "/go/bot",
};

export interface ABVariant {
  headline: string;
  support: string;
  buttonText: string;
}

export const abVariants: Record<"a" | "b", ABVariant> = {
  a: {
    headline: "Peças e acessórios automotivos com cupons na Shopee",
    support: "Ofertas e cupons da Shopee enviados todo dia no seu WhatsApp.",
    buttonText: "Entrar no grupo grátis no WhatsApp",
  },
  b: {
    headline: "Peças, ferramentas e acessórios para seu carro no WhatsApp",
    support: "Avisos diários de promoções e cupons da Shopee sem spam.",
    buttonText: "Entrar no grupo VIP grátis",
  },
};

export function getVariant(): "a" | "b" {
  if (typeof window === "undefined") return "a";
  const params = new URLSearchParams(window.location.search);
  return params.get("v")?.toLowerCase() === "b" ? "b" : "a";
}

export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

export function getUtmParams(): UtmParams {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const utms: UtmParams = {};
  const fields: (keyof UtmParams)[] = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
  ];
  fields.forEach((k) => {
    const v = params.get(k);
    if (v) utms[k] = v;
  });
  return utms;
}

export interface TrustBadge {
  text: string;
}

export const brand = {
  name: "Turbo Ofertas",
  logo: "/logo.svg",
  reassurance: "Grátis. Sem spam. Saia quando quiser.",
  telegramText: "Prefere o Telegram? Entre no canal oficial",
  trustBadges: [
    { text: "100% gratuito" },
    { text: "Zero spam" },
  ],
};

/**
 * Dados reais do grupo. Só mostre se comprováveis.
 * Deixe vazio ("") para ocultar e não exibir contadores inventados.
 */
export const groupRealData = {
  lastOfferTime: "", // Ex: "Última oferta hoje às 14:30" (deixe vazio se não tiver)
  offersToday: "",    // Ex: "18 ofertas postadas hoje" (deixe vazio se não tiver)
};

export interface CategoryChip {
  id: string;
  name: string;
}

export const categoryChips: CategoryChip[] = [
  { id: "estetica", name: "Estética automotiva" },
  { id: "acessorios", name: "Acessórios" },
  { id: "ferramentas", name: "Ferramentas e oficina" },
  { id: "manutencao", name: "Peças e manutenção" },
];
