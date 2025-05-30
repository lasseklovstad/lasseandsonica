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

interface Props<T extends React.ElementType> {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  as?: T;
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
  h5: "md:text-xl text-lg",
  body: "md:text-lg text-md",
  "body-small": "md:text-md text-sm",
  small: "md:text-sm text-xs",
};

export const Typography = <T extends React.ElementType = "div">({
  variant = "body",
  children,
  className,
  as,
  ...props
}: Props<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof Props<T>>) => {
  const sizeClasses = sizes[variant];
  const Tag = as || tags[variant];

  return (
    <Tag
      {...props}
      className={`${sizeClasses}${className ? " " + className : ""}`}
    >
      {children}
    </Tag>
  );
};
