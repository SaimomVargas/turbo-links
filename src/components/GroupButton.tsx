import type { Group } from "../data/config";
import { PlatformIcon } from "./Icons";

export function GroupButton({ group }: { group: Group }) {
  return (
    <a className="group-btn" href={group.url} target="_blank" rel="noopener noreferrer">
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
    </a>
  );
}
