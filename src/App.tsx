import { track } from "@vercel/analytics";
import { Analytics } from "@vercel/analytics/react";
import { brand, groups } from "./data/config";
import { Profile } from "./components/Profile";
import { GroupButton } from "./components/GroupButton";
import { BotShowcase } from "./components/BotShowcase";
import { Categories } from "./components/Categories";
import { Highlights } from "./components/Highlights";
import { Footer } from "./components/Footer";
import { PlatformIcon } from "./components/Icons";

export default function App() {
  const activeGroups = groups.filter((g) => g.status === "ativo");
  const whatsappGroup = groups.find((g) => g.platform === "whatsapp");

  const handleStickyClick = () => {
    if (!whatsappGroup) return;

    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "Lead", {
        content_name: whatsappGroup.title,
        platform: "whatsapp",
        placement: "sticky",
      });
    }

    try {
      track("cta_click", {
        title: whatsappGroup.title,
        platform: "whatsapp",
        placement: "sticky",
        url: whatsappGroup.url,
      });
    } catch {
      // safe fallback
    }
  };

  return (
    <main className="page">
      {/* 1. Hero Automotivo: Identidade e Headline */}
      <Profile />

      {/* 2. CTAs Principais Logo Após a Headline */}
      <section className="cta-block" aria-label="Grupos principais">
        <div className="cta-block__header">
          <span className="cta-block__pulse" aria-hidden="true" />
          <span className="cta-block__text">Escolha onde prefere receber as ofertas:</span>
        </div>
        <nav className="stack" aria-label="Grupos principais de ofertas">
          {activeGroups.map((g) => (
            <GroupButton key={g.url} group={g} placement="main" />
          ))}
        </nav>
      </section>

      {/* 3. Prova de Confiança e Descrição Complementar */}
      <section className="hero-reassurance" aria-label="Garantias dos grupos">
        <div className="trust-pills">
          {brand.trustBadges.map((badge, idx) => (
            <span key={idx} className="trust-pill">
              <span className="trust-pill__icon" aria-hidden="true">
                {badge.icon}
              </span>
              <span className="trust-pill__text">{badge.text}</span>
            </span>
          ))}
        </div>
        <p className="profile__desc">{brand.description}</p>
      </section>

      {/* 4. Destaque: Bot Ofertas Todo Dia (Vídeo Institucional e Demonstração) */}
      <BotShowcase />

      {/* 5. Seção Visual de Categorias Automotivas */}
      <Categories />

      {/* 6. Prova de Confiança e Diferenciais */}
      <Highlights />

      {/* 7. Repetição Estratégica dos CTAs no Final da Página */}
      <section className="bottom-cta" aria-labelledby="cta-bottom-title">
        <div className="bottom-cta__card">
          <div className="bottom-cta__tag">
            <span>🏁</span> 100% Gratuito & Acesso Imediato
          </div>
          <h3 id="cta-bottom-title" className="bottom-cta__title">
            Pronto para economizar no seu carro?
          </h3>
          <p className="bottom-cta__desc">
            Ofertas com bugs de preço e cupons da Shopee toda semana, direto no seu celular.
          </p>
          <div className="stack">
            {activeGroups.map((g) => (
              <GroupButton key={`bottom-${g.url}`} group={g} placement="bottom" />
            ))}
          </div>
        </div>
      </section>

      {/* 8. Rodapé com Isenção e Direitos */}
      <Footer />

      {/* 9. Botão Fixo no Rodapé no Celular (abaixo de 640px) */}
      {whatsappGroup && (
        <aside className="sticky-cta" aria-label="Acesso rápido ao WhatsApp">
          <a
            href={whatsappGroup.url}
            target="_blank"
            rel="noopener noreferrer"
            className="sticky-cta__btn"
            onClick={handleStickyClick}
          >
            <span className="sticky-cta__icon">
              <PlatformIcon platform="whatsapp" />
            </span>
            <span className="sticky-cta__info">
              <strong className="sticky-cta__title">Entrar no Grupo VIP do WhatsApp</strong>
              <small className="sticky-cta__subtitle">Grátis • Sem Spam • Vagas Abertas</small>
            </span>
            <span className="sticky-cta__arrow" aria-hidden="true">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </span>
          </a>
        </aside>
      )}

      <Analytics />
    </main>
  );
}
