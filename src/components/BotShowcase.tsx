import { useRef, useState } from "react";
import { botInfo } from "../data/config";
import { PlatformIcon } from "./Icons";

export function BotShowcase() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
    if (iframeRef.current && iframeRef.current.contentWindow) {
      iframeRef.current.contentWindow.postMessage("play", "*");
    }
  };

  const handleBotClick = () => {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "Schedule", {
        content_name: "Bot Ofertas Todo Dia Telegram",
        platform: "telegram",
        test_event_code: "TEST97697",
      });
    }
  };

  return (
    <section className="bot-showcase" aria-labelledby="bot-showcase-title">
      <div className="bot-showcase__card">
        {/* Header do Bot */}
        <div className="bot-showcase__header">
          <div className="bot-showcase__badge">
            <span className="bot-showcase__badge-dot" aria-hidden="true" />
            <span>{botInfo.badge}</span>
          </div>
          <h2 id="bot-showcase-title" className="bot-showcase__title">
            Conheça o Bot <span className="highlight-text">{botInfo.name}</span>
          </h2>
          <p className="bot-showcase__subtitle">{botInfo.description}</p>
        </div>

        {/* Player de Vídeo em Moldura Estilo Smartphone */}
        <div className="bot-video">
          <div className="bot-video__phone-frame">
            <div className="bot-video__speaker-notch" aria-hidden="true" />
            <div className="bot-video__screen">
              <iframe
                ref={iframeRef}
                src="/video-institucional.html"
                title="Vídeo demonstrativo do Bot Ofertas Todo Dia no Telegram"
                className="bot-video__iframe"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
              />
            </div>
          </div>

          <div className="bot-video__controls">
            <button
              type="button"
              className="bot-video__play-btn"
              onClick={handlePlayVideo}
              aria-label="Reproduzir vídeo demonstrativo"
            >
              <span className="bot-video__play-icon" aria-hidden="true">
                {isPlaying ? "🔄" : "▶"}
              </span>
              <span>{isPlaying ? "Reiniciar Vídeo" : "Assistir Vídeo"}</span>
            </button>
            <span className="bot-video__tip">Dica: você também pode tocar no vídeo para reproduzir.</span>
          </div>
        </div>

        {/* Como funciona - 3 passos simples */}
        <div className="bot-steps" aria-label="Como usar o bot">
          <h3 className="bot-steps__title">Como economizar em 3 passos:</h3>
          <div className="bot-steps__grid">
            {botInfo.steps.map((step) => (
              <div key={step.num} className="bot-step-card">
                <div className="bot-step-card__top">
                  <span className="bot-step-card__num">{step.num}</span>
                  <span className="bot-step-card__icon" aria-hidden="true">{step.icon}</span>
                </div>
                <strong className="bot-step-card__title">{step.title}</strong>
                <p className="bot-step-card__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Métricas / Vantagens rápidas */}
        <div className="bot-stats">
          {botInfo.stats.map((stat, idx) => (
            <div key={idx} className="bot-stat-item">
              <span className="bot-stat-item__value">{stat.value}</span>
              <span className="bot-stat-item__label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Botão de Ação Direta para o Bot */}
        <div className="bot-showcase__cta">
          <a
            href={botInfo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bot-cta-btn"
            onClick={handleBotClick}
            id="btn-entrar-bot-telegram"
          >
            <span className="bot-cta-btn__glow" aria-hidden="true" />
            <span className="bot-cta-btn__icon">
              <PlatformIcon platform="telegram" />
            </span>
            <span className="bot-cta-btn__content">
              <span className="bot-cta-btn__label">ABRIR BOT NO TELEGRAM</span>
              <span className="bot-cta-btn__handle">{botInfo.handle} • Acesso Imediato</span>
            </span>
            <span className="bot-cta-btn__arrow" aria-hidden="true">
              <svg
                width="22"
                height="22"
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
          <span className="bot-showcase__guarantee">
            🔒 100% Gratuito • Sem necessidade de cadastro
          </span>
        </div>
      </div>
    </section>
  );
}
