import { getVariant, getUtmParams, redirects } from "../data/config";
import { track } from "@vercel/analytics";

interface FooterProps {
  variant?: string;
}

export function Footer({ variant: propVariant }: FooterProps) {
  const variant = propVariant || getVariant();

  const handleBotClick = () => {
    const utms = getUtmParams();
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "Lead", {
        title: "Bot comparador no Telegram",
        content_name: "Bot comparador no Telegram",
        platform: "telegram_bot",
        placement: "footer",
        variant,
        url: redirects.bot,
        ...utms,
      });
    }

    try {
      track("cta_click", {
        title: "Bot comparador no Telegram",
        platform: "telegram_bot",
        placement: "footer",
        variant,
        url: redirects.bot,
        ...utms,
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
          Chamar nosso bot no Telegram
        </a>
      </div>

      <p className="footer__brand">
        Turbo Ofertas
      </p>

      <p className="footer__disclaimer">
        <strong>Transparência:</strong> o acesso ao grupo no WhatsApp é 100% gratuito. Participamos de programas de afiliados e podemos receber comissões por compras realizadas através dos links indicados, sem custo adicional para você.
      </p>

      <p className="footer__copy">
        © {new Date().getFullYear()} Turbo Ofertas. Todos os direitos reservados.
      </p>
    </footer>
  );
}
