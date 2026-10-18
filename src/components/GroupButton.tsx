import type { Group } from "../data/config";
import { PlatformIcon } from "./Icons";

export function GroupButton({ group }: { group: Group }) {
  return (
    <a className="group-btn" href={group.url} target="_blank" rel="noopener noreferrer">
      <span className="group-btn__shimmer" aria-hidden="true" />
      <span className="group-btn__icon">
        {group.image ? (
          <img src={group.image} alt="" width={26} height={26} loading="lazy" />
        ) : (
          <PlatformIcon platform={group.platform} />
        )}
      </span>
      <span className="group-btn__text">
        <strong>{group.title}</strong>
        <span>{group.description}</span>
      </span>
      <span className="group-btn__action" aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </span>
    </a>
  );
}
