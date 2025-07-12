import { type SVGProps } from "react";

/**
 * Pick-n-Talk Logo
 * Combines a pictogram (circle) and a speech bubble for a friendly, accessible look.
 */
export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Pick-n-Talk Logo"
      role="img"
      {...props}
    >
      {/* Main pictogram circle */}
      <circle cx="10" cy="13" r="6" fill="#3B82F6" stroke="#2563EB" strokeWidth="1.5" />
      {/* Speech bubble */}
      <ellipse cx="21" cy="19" rx="7" ry="5" fill="#F9FAFB" stroke="#2563EB" strokeWidth="1.5" />
      <polygon points="21,24 24,28 18,24" fill="#F9FAFB" stroke="#2563EB" strokeWidth="1" />
      {/* Text for brand initials */}
      <text x="10" y="15" textAnchor="middle" fontSize="5" fill="#F9FAFB" fontFamily="Arial, sans-serif" fontWeight="bold">PnT</text>
      {/* Decorative dots for accessibility */}
      <circle cx="6" cy="9" r="1" fill="#F9FAFB" />
      <circle cx="14" cy="9" r="1" fill="#F9FAFB" />
      <circle cx="10" cy="20" r="1" fill="#F9FAFB" />
    </svg>
  );
}
