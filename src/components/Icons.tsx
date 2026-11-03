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

export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true" className={className}>
      <path
        fillRule="evenodd"
        d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function VerifiedBadge({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="#0a7c42" aria-hidden="true" className={className}>
      <path
        fillRule="evenodd"
        d="M8 0c-.6 0-1.1.3-1.4.7L5.5 2.1c-.3.3-.7.5-1.1.5H2.5C1.7 2.6 1 3.3 1 4.1v1.9c0 .4-.2.8-.5 1.1L.2 8.5c-.3.3-.3.8 0 1.1l.3 1.4c.3.3.5.7.5 1.1v1.9c0 .8.7 1.5 1.5 1.5h1.9c.4 0 .8.2 1.1.5l1.4 1.3c.3.3.8.3 1.1 0l1.4-1.3c.3-.3.7-.5 1.1-.5h1.9c.8 0 1.5-.7 1.5-1.5v-1.9c0-.4.2-.8.5-1.1l.3-1.4c.3-.3.3-.8 0-1.1l-.3-1.4c-.3-.3-.5-.7-.5-1.1V4.1c0-.8-.7-1.5-1.5-1.5h-1.9c-.4 0-.8-.2-1.1-.5L9.4.7C9.1.3 8.6 0 8 0zm2.7 6.3a.75.75 0 0 0-1.06-1.06L6.5 8.44 5.36 7.3a.75.75 0 0 0-1.06 1.06l1.67 1.67a.75.75 0 0 0 1.06 0l3.67-3.67z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function StarIcon({
  className = "",
  size = 14,
  filled = true,
}: {
  className?: string;
  size?: number;
  filled?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? "0" : "1.5"}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export function ShieldIcon({
  className = "",
  size = 18,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function TelegramIcon({
  className = "",
  size = 20,
  color,
}: {
  className?: string;
  size?: number;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color || "currentColor"}
      aria-hidden="true"
      className={className}
    >
      <path d="M21.5 3.5 2.8 10.8c-.9.4-.9 1 0 1.3l4.8 1.5 1.8 5.6c.2.6.4.8.9.8.4 0 .6-.2.9-.5l2.3-2.2 4.7 3.5c.9.5 1.5.2 1.7-.9l3-14.4c.3-1.3-.5-1.9-1.4-1.5z" />
    </svg>
  );
}

export function BotIcon({
  className = "",
  size = 20,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="11" width="18" height="10" rx="3" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4" />
      <line x1="8" y1="16" x2="8.01" y2="16" />
      <line x1="16" y1="16" x2="16.01" y2="16" />
      <path d="M9 19h6" />
    </svg>
  );
}

export function LightningIcon({
  className = "",
  size = 18,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}
