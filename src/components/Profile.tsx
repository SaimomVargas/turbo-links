import { brand } from "../data/config";

export function Profile() {
  return (
    <header className="profile">
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
    </header>
  );
}
