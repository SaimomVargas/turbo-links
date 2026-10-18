/**
 * Único arquivo que você precisa editar para mudar links e textos.
 * Para adicionar um grupo: inclua um item em `groups`.
 * Não existe link para categorias sem grupo cadastrado: elas aparecem como "Em breve".
 */

export type Platform = "telegram" | "whatsapp";
export type Status = "ativo" | "em-breve";

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Group {
  title: string;
  description: string;
  categoryId: string;
  platform: Platform;
  url: string;
  status: Status;
  /** Mostra o grupo como botão principal no topo */
  featured?: boolean;
  /** Imagem opcional (caminho em /public ou URL) */
  image?: string;
}

export const brand = {
  name: "Turbo Ofertas",
  slogan: "Mais ofertas, menos preço!",
  description: "Promoções, cupons e achadinhos para economizar de verdade.",
  logo: "/logo.svg",
};

export const categories: Category[] = [
  { id: "automotivo", name: "Automotivo", description: "Peças, acessórios e itens para o carro e a moto." },
  { id: "tecnologia", name: "Tecnologia", description: "Eletrônicos, periféricos e gadgets." },
  { id: "games", name: "Games", description: "Jogos, consoles e acessórios." },
  { id: "casa", name: "Casa e decoração", description: "Utilidades, móveis e decoração." },
  { id: "moda", name: "Moda e beleza", description: "Roupas, calçados e cuidados pessoais." },
  { id: "variadas", name: "Ofertas variadas", description: "As melhores promoções de todas as áreas." },
];

export const groups: Group[] = [
  {
    title: "Entrar no Telegram",
    description: "Acompanhe nossas ofertas e achadinhos.",
    categoryId: "variadas",
    platform: "telegram",
    url: "https://t.me/turboofertass",
    status: "ativo",
    featured: true,
  },
  {
    title: "Entrar no grupo do WhatsApp",
    description: "Receba promoções diretamente no grupo.",
    categoryId: "variadas",
    platform: "whatsapp",
    url: "https://chat.whatsapp.com/BvxUXtqwkgoEYTEKKdLG8G?s=sw&p=i&mlu=4&ilr=4",
    status: "ativo",
    featured: true,
  },
];
