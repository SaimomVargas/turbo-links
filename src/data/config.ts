/**
 * Configuração central do turbo-links: rotas de redirecionamento,
 * variantes A/B, categorias e dados do grupo.
 */

export type Platform = "whatsapp" | "telegram";
export type Status = "ativo" | "em-breve";

export const redirects = {
  whatsapp: "/go/whatsapp",
  telegram: "/go/telegram",
  bot: "/go/bot",
};

export const externalUrls = {
  whatsapp: "https://chat.whatsapp.com/BvxUXtqwkgoEYTEKKdLG8G?s=sw&p=i&mlu=4&ilr=4",
  telegram: "https://t.me/turboofertass",
  bot: "https://t.me/ofertas_toda_hora_bot?start=site",
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

export const brand = {
  name: "Turbo Ofertas",
  logo: "/logo.svg",
  reassurance: "Grátis. Sem spam. Saia quando quiser.",
  telegramText: "Prefere o Telegram? Entre no canal oficial",
  trustBadges: [
    { icon: "🛡️", text: "100% Gratuito" },
    { icon: "🚫", text: "Zero Spam" },
    { icon: "🔒", text: "Links Verificados" },
    { icon: "⚡", text: "Alertas Diários" },
  ],
  highlights: [
    {
      icon: "🔍",
      title: "Monitoramento de Ofertas e Cupons",
      desc: "Rastreamos promoções, cupons relâmpago e oportunidades reais na Shopee e grandes lojas.",
    },
    {
      icon: "⚡",
      title: "Notificação Imediata no Bolso",
      desc: "Receba o alerta direto no WhatsApp ou Telegram sem perder tempo.",
    },
    {
      icon: "🎯",
      title: "Foco 100% no seu Carro & Moto",
      desc: "Curadoria especializada em estética, ferramentas e manutenção que realmente valem a pena.",
    },
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

export interface Group {
  title: string;
  description: string;
  categoryId: string;
  platform: Platform;
  url: string;
  status: Status;
  badge?: string;
  featured?: boolean;
  image?: string;
}

export const groups: Group[] = [
  {
    title: "Entrar no Grupo VIP do WhatsApp",
    description: "Grátis, sem spam. Você pode sair quando quiser.",
    categoryId: "automotivo",
    platform: "whatsapp",
    badge: "Mais Recomendado",
    url: redirects.whatsapp,
    status: "ativo",
    featured: true,
  },
  {
    title: "Entrar no Canal do Telegram",
    description: "Histórico de ofertas e achadinhos.",
    categoryId: "automotivo",
    platform: "telegram",
    badge: "Canal Oficial",
    url: redirects.telegram,
    status: "ativo",
    featured: false,
  },
];

export const botInfo = {
  name: "Ofertas Todo Dia",
  handle: "@ofertas_toda_hora_bot",
  url: redirects.bot,
  badge: "Gratuito no Telegram",
  description: "Envie o link de qualquer produto e encontre o menor preço.",
  steps: [
    { num: "1", title: "Copie o link", desc: "Copie o link do produto", icon: "🔗" },
    { num: "2", title: "Envie no Telegram", desc: "Cole na conversa com o bot", icon: "💬" },
    { num: "3", title: "Receba o menor preço", desc: "Link direto com a economia", icon: "💰" },
  ],
  stats: [
    { label: "Economia", value: "Menor Preço" },
    { label: "Velocidade", value: "Em segundos" },
    { label: "Acesso", value: "100% Gratuito" },
  ],
};
