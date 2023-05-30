import type { IconProps } from "~/types/icon";

export const LeftArrowIos = ({ className }: IconProps) => (
  <svg
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
    className={`w-[1em] h-[1em] ${className ?? ""}`}
  >
    <path d="M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"></path>
  </svg>
);
