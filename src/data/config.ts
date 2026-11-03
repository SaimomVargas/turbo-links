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
  logo: "/logo.jpg",
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

export interface RealOffer {
  id: string;
  badge: string;
  title: string;
  oldPrice: string;
  currentPrice: string;
  discount: string;
  store: "Amazon" | "Shopee";
  image: string;
  rating?: string;
}

export const realOffersList: RealOffer[] = [
  {
    id: "vonixx-kit",
    badge: "PRATICIDADE NO VOLANTE",
    title: "Kit Completo para Estética Automotiva Vonixx V-FLOC SINTRA FAST INTENSE TOK FINAL PNEU PRETINHO e ACESSÓRIOS",
    oldPrice: "R$ 199,92",
    currentPrice: "R$ 159,52",
    discount: "-20%",
    store: "Amazon",
    image: "/offers/offer-vonixx.jpg",
    rating: "4,5 ★ Escolha da Amazon",
  },
  {
    id: "philips-h4",
    badge: "CUIDADO ESPECIAL PRO CARRO",
    title: "Lâmpada Farol H4 12V 60/55W Philips 12342C1 Standard",
    oldPrice: "R$ 26,79",
    currentPrice: "R$ 19,49",
    discount: "-27%",
    store: "Amazon",
    image: "/offers/offer-philips.jpg",
    rating: "4,6 ★",
  },
  {
    id: "petrol-max",
    badge: "OPORTUNIDADE DO DIA",
    title: "Aditivo Concentrado Alta Performance Petrol Max Motorflu 200 mL",
    oldPrice: "R$ 20,53",
    currentPrice: "R$ 14,93",
    discount: "-27%",
    store: "Amazon",
    image: "/offers/offer-petrol.jpg",
    rating: "5,0 ★ Mais vendido",
  },
  {
    id: "magilclean-shampoo",
    badge: "CUIDADO ESPECIAL PRO CARRO",
    title: "Shampoo Automotivo Autoclean Ultra Limpador Magilclean 1,5L",
    oldPrice: "R$ 58,90",
    currentPrice: "R$ 41,70",
    discount: "-29%",
    store: "Amazon",
    image: "/offers/offer-magilclean.jpg",
    rating: "4,0 ★",
  },
];

