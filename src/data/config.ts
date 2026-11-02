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
    // 9 palavras - benefício direto, sem números inventados
    headline: "Peças e Acessórios Automotivos com Cupons e Preços Baixos",
    support: "Promoções e cupons da Shopee todos os dias direto no seu WhatsApp.",
    buttonText: "Entrar no grupo grátis no WhatsApp",
  },
  b: {
    // 9 palavras - benefício focado em economia e utilidade
    headline: "Economize em Peças, Ferramentas e Acessórios para seu Carro",
    support: "Alertas diários de ofertas selecionadas na Shopee sem spam.",
    buttonText: "Quero entrar no grupo VIP grátis",
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

export const brand = {
  name: "Turbo Ofertas",
  logo: "/logo.svg",
  reassurance: "Grátis. Sem spam. Saia quando quiser.",
  telegramText: "Prefere o Telegram? Entre no canal oficial",
  trustBadges: [
    { icon: "🛡️", text: "100% Gratuito" },
    { icon: "🚫", text: "Zero Spam" },
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
  icon: string;
  name: string;
}

export const categoryChips: CategoryChip[] = [
  { id: "estetica", icon: "✨", name: "Estética Automotiva" },
  { id: "acessorios", icon: "🚘", name: "Acessórios" },
  { id: "ferramentas", icon: "🔧", name: "Ferramentas & Oficina" },
  { id: "manutencao", icon: "🏁", name: "Peças & Manutenção" },
];
