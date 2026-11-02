import { brand } from "../data/config";

export function Profile() {
  return (
    <header className="profile">
      <div className="profile__header">
        <img
          className="profile__logo"
          src={brand.logo}
          alt="Logo do Turbo Ofertas"
          width={88}
          height={88}
        />
        <div className="profile__identity">
          <span className="profile__name">{brand.name}</span>
          <span className="profile__tagline">{brand.tagline}</span>
        </div>
      </div>

      <h1 className="profile__headline">{brand.headline}</h1>
    </header>
  );
}
