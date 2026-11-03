import { realOffersList, redirects, type RealOffer } from "../data/config";
import { StarIcon } from "./Icons";

interface RealOffersCarouselProps {
  onCtaClick?: (offer?: RealOffer) => void;
  offers?: RealOffer[];
}

export function RealOffersCarousel({
  onCtaClick,
  offers = realOffersList,
}: RealOffersCarouselProps) {
  return (
    <section
      className="real-offers-section"
      aria-labelledby="real-offers-heading"
    >
      <div className="real-offers__header">
        <div className="real-offers__title-group">
          <div className="real-offers__kicker">OFERTAS REAIS DO GRUPO</div>
          <h2 id="real-offers-heading" className="real-offers__title">
            Últimas promoções enviadas
          </h2>
          <p className="real-offers__subtitle">
            Curadoria diária com cupons verificados e descontos reais
          </p>
        </div>

        <div className="real-offers__indicator" aria-hidden="true">
          <span>Deslize</span>
          <svg
            viewBox="0 0 16 16"
            width="12"
            height="12"
            fill="currentColor"
            className="real-offers__indicator-icon"
          >
            <path
              fillRule="evenodd"
              d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div
        className="real-offers__track"
        role="region"
        aria-label="Carrossel com 4 ofertas reais do grupo"
        tabIndex={0}
      >
        {offers.map((offer) => (
          <a
            key={offer.id}
            href={redirects.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="offer-card"
            aria-label={`${offer.title} - ${offer.discount} por ${offer.currentPrice}`}
            onClick={() => onCtaClick?.(offer)}
          >
            {/* Imagem do produto com tags */}
            <div className="offer-card__media">
              <img
                src={offer.image}
                alt={offer.title}
                loading="lazy"
                className="offer-card__image"
                width={280}
                height={200}
              />
              <div className="offer-card__badges-overlay">
                <span className="offer-card__discount-badge">
                  {offer.discount}
                </span>
                <span className="offer-card__store-badge">
                  {offer.store}
                </span>
              </div>
            </div>

            {/* Dados e Preços */}
            <div className="offer-card__body">
              <span className="offer-card__curation-tag">
                {offer.badge}
              </span>

              <h3 className="offer-card__title" title={offer.title}>
                {offer.title}
              </h3>

              {offer.rating && (
                <div className="offer-card__rating">
                  <span className="offer-card__star-icon" aria-hidden="true">
                    <StarIcon size={12} />
                  </span>
                  <span className="offer-card__rating-text">
                    {offer.rating}
                  </span>
                </div>
              )}

              <div className="offer-card__pricing">
                <del className="offer-card__old-price">
                  De {offer.oldPrice}
                </del>
                <div className="offer-card__current-price-row">
                  <span className="offer-card__price-prefix">Por</span>
                  <span className="offer-card__current-price">
                    {offer.currentPrice}
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
