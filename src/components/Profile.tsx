import { brand } from "../data/config";
import { VerifiedBadge } from "./Icons";

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
          width={38}
          height={38}
        />
        <div className="brand-meta">
          <div className="brand-title-row">
            <span className="brand-name">{brand.name}</span>
            <span className="brand-verified" title="Canal Oficial Verificado">
              <VerifiedBadge />
            </span>
          </div>
          <span className="brand-tag">Grupo VIP de Cupons</span>
        </div>
      </div>

      <h1 className="profile__headline">{headline}</h1>
      <p className="profile__support">{support}</p>
    </header>
  );
}
