import { brand } from "../data/config";

export function Profile() {
  return (
    <header className="profile">
      <img className="profile__logo" src={brand.logo} alt="Logo do Turbo Ofertas" width={112} height={112} />
      <h1 className="profile__name">{brand.name}</h1>
      <p className="profile__slogan">{brand.slogan}</p>
      <p className="profile__desc">{brand.description}</p>
    </header>
  );
}
