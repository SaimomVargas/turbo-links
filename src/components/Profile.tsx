import { brand } from "../data/config";

export function Profile() {
  return (
    <header className="profile">
      <div className="radar-badge" role="status">
        <span className="radar-badge__dot" aria-hidden="true" />
        <span>{brand.radar}</span>
      </div>

      <div className="profile__header">
        <img
          className="profile__logo"
          src={brand.logo}
          alt="Logo do Turbo Ofertas"
          width={104}
          height={104}
        />
        <div className="profile__identity">
          <h1 className="profile__name">{brand.name}</h1>
          <span className="profile__tagline">{brand.tagline}</span>
        </div>
      </div>

      <h2 className="profile__headline">{brand.headline}</h2>
      <p className="profile__desc">{brand.description}</p>

      <div className="trust-pills" aria-label="Garantias dos grupos">
        {brand.trustBadges.map((badge, idx) => (
          <span key={idx} className="trust-pill">
            <span className="trust-pill__icon" aria-hidden="true">
              {badge.icon}
            </span>
            <span className="trust-pill__text">{badge.text}</span>
          </span>
        ))}
      </div>
    </header>
  );
}
