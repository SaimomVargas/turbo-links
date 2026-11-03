import { brand } from "../data/config";
import { VerifiedBadge } from "./Icons";

export interface ProfileProps {
  title?: string;
  bio?: string;
  headline?: string;
  support?: string;
}

export function Profile({
  title = "TURBO OFERTAS",
  bio = "Peças, ferramentas e estética automotiva com cupons diários no seu celular.",
}: ProfileProps = {}) {
  return (
    <header className="profile-header profile" aria-label="Perfil Turbo Ofertas">
      <div className="profile-avatar-container">
        <div className="profile-avatar-ring">
          <img
            className="profile-avatar"
            src={brand.logo}
            alt={`Logo ${brand.name}`}
            width={72}
            height={72}
          />
        </div>
      </div>

      <div className="profile-title-row">
        <h1 className="profile-title">{title}</h1>
        <span
          className="profile-verified"
          title="Canal Oficial Verificado"
          aria-label="Canal Oficial Verificado"
        >
          <VerifiedBadge />
        </span>
      </div>

      <p className="profile-bio">{bio}</p>
    </header>
  );
}
