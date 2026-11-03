import { redirects } from "../data/config";
import { PlatformIcon, TelegramIcon, BotIcon } from "./Icons";

export interface ActionButtonsProps {
  onWhatsAppClick?: () => void;
  onCtaClick?: () => void;
  onTelegramClick?: () => void;
  onBotClick?: () => void;
  whatsAppUrl?: string;
  telegramUrl?: string;
  botUrl?: string;
}

export function ActionButtons({
  onWhatsAppClick,
  onCtaClick,
  onTelegramClick,
  onBotClick,
  whatsAppUrl = redirects.whatsapp,
  telegramUrl = redirects.telegram,
  botUrl = redirects.bot,
}: ActionButtonsProps = {}) {
  const handleWhatsApp = () => {
    onWhatsAppClick?.();
    onCtaClick?.();
  };

  return (
    <section className="action-buttons-section" aria-label="Ações e canais Turbo Ofertas">
      {/* Botão Principal de Conversão WhatsApp */}
      <a
        href={whatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="main-cta-btn primary-whatsapp-btn"
        onClick={handleWhatsApp}
        id="btn-main-whatsapp"
      >
        <span className="main-cta-btn__icon" aria-hidden="true">
          <PlatformIcon platform="whatsapp" />
        </span>
        <span className="main-cta-btn__text">
          <strong className="main-cta-btn__title">Entrar no Grupo VIP no WhatsApp</strong>
          <small className="main-cta-btn__subtext">100% Grátis · Saia quando quiser</small>
        </span>
      </a>

      {/* Linha de Ações Circulares: Telegram e Bot */}
      <div className="contact-actions-row" aria-label="Canais secundários e busca">
        <div className="circle-action-item">
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="circle-action-btn circle-action-btn--telegram"
            onClick={onTelegramClick}
            aria-label="Canal Telegram"
            title="Canal Telegram"
            id="btn-circle-telegram"
          >
            <TelegramIcon size={24} />
          </a>
          <span className="circle-action-label">Canal Telegram</span>
        </div>

        <div className="circle-action-item">
          <a
            href={botUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="circle-action-btn circle-action-btn--bot"
            onClick={onBotClick}
            aria-label="Buscar Cupons"
            title="Buscar Cupons"
            id="btn-circle-bot"
          >
            <BotIcon size={24} />
          </a>
          <span className="circle-action-label">Buscar Cupons</span>
        </div>
      </div>
    </section>
  );
}
