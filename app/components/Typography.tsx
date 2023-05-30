import type { ElementType } from "react";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "body"
  | "body-small"
  | "small";

interface Props {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
}

const tags: Record<Variant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  body: "p",
  "body-small": "p",
  small: "span",
};

const sizes: Record<Variant, string> = {
  h1: "md:text-5xl font-bold text-4xl",
  h2: "md:text-4xl font-bold text-3xl",
  h3: "md:text-3xl font-bold text-2xl",
  h4: "md:text-2xl font-semibold text-xl",
  h5: "md:text-xl font-semibold text-lg",
  body: "md:text-lg text-md",
  "body-small": "md:text-md text-sm",
  small: "md:text-sm text-xs",
};

export const Typography = ({
  variant = "body",
  children,
  className,
  as,
}: Props) => {
  const sizeClasses = sizes[variant];
  const Tag = as || tags[variant];

  return (
    <Tag className={`${sizeClasses}${className ? " " + className : ""}`}>
      {children}
    </Tag>
  );
};
