/**
 * Arquivo de configuração de marca, grupos e categorias automotivas.
 */

export type Platform = "telegram" | "whatsapp";
export type Status = "ativo" | "em-breve";

export interface VisualCategory {
  id: string;
  name: string;
  icon: string;
  tag: string;
  description: string;
  examples: string[];
}

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

export const brand = {
  name: "Turbo Ofertas",
  tagline: "Achadinhos & Peças Automotivas",
  headline: "Economize até 70% em Peças, Acessórios e Ferramentas para seu Carro",
  radar: "Radar de Ofertas Ativo • Shopee e Grandes Lojas",
  description:
    "Nossa IA monitora a Shopee 24h por dia para encontrar erros de preço, cupons escondidos e os melhores achadinhos automotivos antes que todo mundo veja.",
  trustBadges: [
    { icon: "🛡️", text: "100% Gratuito" },
    { icon: "⚡", text: "Alertas em Tempo Real" },
    { icon: "🚫", text: "Zero Spam" },
    { icon: "🔒", text: "Links Verificados" },
  ],
  highlights: [
    {
      icon: "🤖",
      title: "IA Caçadora de Bugs de Preço",
      desc: "Algoritmo rastreia descontos anormais e cupons relâmpago antes que esgotem.",
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
  logo: "/logo.svg",
};

export const visualCategories: VisualCategory[] = [
  {
    id: "estetica",
    name: "Estética Automotiva",
    icon: "✨",
    tag: "Até 60% OFF",
    description: "Ceras, vitrificadores, shampoos neutros, toalhas de microfibra e politrizes.",
    examples: ["Ceras & Selantes", "Microfibras 500GSM", "Politrizes", "Shampoos Automotivos"],
  },
  {
    id: "acessorios",
    name: "Acessórios para Carros",
    icon: "🚘",
    tag: "Achadinhos",
    description: "Suportes veiculares, iluminação LED, organizadores, centrais e carregadores turbo.",
    examples: ["Suportes Magnéticos", "LEDs Internos/Externos", "Centrais Multimídia", "Organizadores"],
  },
  {
    id: "ferramentas",
    name: "Ferramentas & Oficina",
    icon: "🔧",
    tag: "Bugs de Preço",
    description: "Scanners OBD2, jogos de catraca, calibradores digitais e compressores portáteis 12V.",
    examples: ["Scanner OBD2 Bluetooth", "Maleta de Ferramentas", "Compressores Portáteis"],
  },
  {
    id: "manutencao",
    name: "Peças & Manutenção",
    icon: "🏁",
    tag: "Cupons Shopee",
    description: "Filtros de ar, palhetas de silicone, lâmpadas super brancas, aditivos e fluidos.",
    examples: ["Filtros Esportivos", "Palhetas de Silicone", "Aditivos & Óleos", "Lâmpadas H4/H7"],
  },
];

export const groups: Group[] = [
  {
    title: "Entrar no Grupo VIP do WhatsApp",
    description: "Alertas mais rápidos • Vagas abertas e gratuitas.",
    categoryId: "automotivo",
    platform: "whatsapp",
    badge: "Mais Recomendado",
    url: "https://chat.whatsapp.com/BvxUXtqwkgoEYTEKKdLG8G?s=sw&p=i&mlu=4&ilr=4",
    status: "ativo",
    featured: true,
  },
  {
    title: "Entrar no Canal do Telegram",
    description: "Histórico completo de ofertas e achadinhos.",
    categoryId: "automotivo",
    platform: "telegram",
    badge: "Histórico Completo",
    url: "https://t.me/turboofertass",
    status: "ativo",
    featured: true,
  },
];
