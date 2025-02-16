import type { IconProps } from "~/types/icon";

export const RightArrowIos = ({ className }: IconProps) => (
  <svg
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`h-4 w-4 ${className ?? ""}`}
  >
    <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"></path>
  </svg>
);
