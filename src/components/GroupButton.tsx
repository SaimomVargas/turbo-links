import { track } from "@vercel/analytics";
import type { Group } from "../data/config";
import { PlatformIcon } from "./Icons";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

interface GroupButtonProps {
  group: Group;
  placement?: string;
}

export function GroupButton({ group, placement = "main" }: GroupButtonProps) {
  const handleClick = () => {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "Lead", {
        content_name: group.title,
        platform: group.platform,
        placement,
      });
    }

    try {
      track("cta_click", {
        title: group.title,
        platform: group.platform,
        placement,
        url: group.url,
      });
    } catch {
      // safe fallback
    }
  };

  const isSecondary = !group.featured;

  return (
    <a
      className={`group-btn group-btn--${group.platform}${isSecondary ? " group-btn--secondary" : ""}`}
      href={group.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      <span className="group-btn__shimmer" aria-hidden="true" />
      <span className="group-btn__icon">
        {group.image ? (
          <img src={group.image} alt="" width={28} height={28} loading="lazy" />
        ) : (
          <PlatformIcon platform={group.platform} />
        )}
      </span>
      <span className="group-btn__text">
        <span className="group-btn__title-row">
          <strong>{group.title}</strong>
          {group.badge && <span className="group-btn__badge">{group.badge}</span>}
        </span>
        <span className="group-btn__desc">{group.description}</span>
      </span>
      <span className="group-btn__action" aria-hidden="true">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </span>
    </a>
  );
}
