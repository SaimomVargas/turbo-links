import type { Platform } from "../data/config";

export function PlatformIcon({ platform }: { platform: Platform }) {
  if (platform === "telegram") {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <path
          fill="#229ED9"
          d="M21.5 3.5 2.8 10.8c-.9.4-.9 1 0 1.3l4.8 1.5 1.8 5.6c.2.6.4.8.9.8.4 0 .6-.2.9-.5l2.3-2.2 4.7 3.5c.9.5 1.5.2 1.7-.9l3-14.4c.3-1.3-.5-1.9-1.4-1.5z"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path fill="#25D366" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z" />
      <path
        fill="#fff"
        d="M16.5 14.3c-.2-.1-1.3-.6-1.5-.7-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1-.9-.4-1.9-1-2.7-2-.2-.3-.4-.5-.5-.8 0-.2 0-.3.1-.4l.4-.5.2-.4v-.4l-.7-1.6c-.2-.4-.3-.4-.5-.4h-.4c-.2 0-.4.1-.6.3-.5.5-.8 1.2-.7 1.9.2 1.2 1 2.4 2 3.4 1.2 1.2 2.7 2 4.2 2.2.8.1 1.6-.4 2-1 .1-.3.2-.6.1-.8z"
      />
    </svg>
  );
}
