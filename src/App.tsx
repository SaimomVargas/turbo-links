import { Analytics } from "@vercel/analytics/react";
import { brand, groups } from "./data/config";
import { Profile } from "./components/Profile";
import { GroupButton } from "./components/GroupButton";
import { BotShowcase } from "./components/BotShowcase";
import { Categories } from "./components/Categories";
import { Highlights } from "./components/Highlights";
import { Footer } from "./components/Footer";

export default function App() {
  const activeGroups = groups.filter((g) => g.status === "ativo");

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
            <GroupButton key={g.url} group={g} />
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

      {/* 3. Destaque: Bot Ofertas Todo Dia (Vídeo Institucional e Demonstração) */}
      <BotShowcase />

      {/* 4. Seção Visual de Categorias Automotivas */}
      <Categories />

      {/* 5. Prova de Confiança e Diferenciais da IA */}
      <Highlights />


      {/* 5. Repetição Estratégica dos CTAs no Final da Página */}
      <section className="bottom-cta" aria-labelledby="cta-bottom-title">
        <div className="bottom-cta__card">
          <div className="bottom-cta__tag">
            <span>🏁</span> 100% Gratuito & Acesso Imediato
          </div>
          <h3 id="cta-bottom-title" className="bottom-cta__title">
            Pronto para economizar no seu carro?
          </h3>
          <p className="bottom-cta__desc">
            Mais de centenas de ofertas com bugs de preço e cupons exclusivos da Shopee toda semana.
          </p>
          <div className="stack">
            {activeGroups.map((g) => (
              <GroupButton key={`bottom-${g.url}`} group={g} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Rodapé com Isenção e Direitos */}
      <Footer />
      <Analytics />
    </main>
  );
}
