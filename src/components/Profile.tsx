import { brand } from "../data/config";

interface ProfileProps {
  headline: string;
  support: string;
}

export function Profile({ headline, support }: ProfileProps) {
  return (
    <header className="profile">
      <div className="brand-header">
        <img
          className="brand-logo"
          src={brand.logo}
          alt="Logo do Turbo Ofertas"
          width={36}
          height={36}
        />
        <span className="brand-name">{brand.name}</span>
      </div>

      <h1 className="profile__headline">{headline}</h1>
      <p className="profile__support">{support}</p>
    </header>
  );
}
