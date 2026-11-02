import { getVariant, redirects } from "../data/config";
import { track } from "@vercel/analytics";

interface FooterProps {
  variant?: string;
}

export function Footer({ variant: propVariant }: FooterProps) {
  const variant = propVariant || getVariant();

  const handleBotClick = () => {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "Lead", {
        content_name: "Bot Comparador no Telegram",
        platform: "telegram",
        placement: "footer",
        variant,
      });
    }

    try {
      track("cta_click", {
        title: "Bot Comparador no Telegram",
        platform: "telegram_bot",
        placement: "footer",
        variant,
        url: redirects.bot,
      });
    } catch {
      // safe fallback
    }
  };

  return (
    <footer className="footer">
      <div className="footer__secondary-bot">
        <span>Quer comparar o preço de outro item? </span>
        <a
          href={redirects.bot}
          target="_blank"
          rel="noopener noreferrer"
          className="footer__bot-link"
          onClick={handleBotClick}
        >
          Chamar nosso Bot no Telegram →
        </a>
      </div>

      <p className="footer__brand">
        Turbo Ofertas • Comunidade de Economia Automotiva
      </p>

      <p className="footer__disclaimer">
        <strong>Transparência:</strong> O acesso ao grupo do WhatsApp é 100% gratuito. Participamos de programas de afiliados e podemos receber comissões por compras realizadas através dos links indicados, sem custo extra para você.
      </p>

      <p className="footer__copy">
        © {new Date().getFullYear()} Turbo Ofertas. Todos os direitos reservados.
      </p>
    </footer>
  );
}
