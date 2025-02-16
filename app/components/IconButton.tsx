interface IconButtonProps<T extends React.ElementType> {
  as?: T;
  children?: React.ReactNode;
  className?: string;
}

export const IconButton = <T extends React.ElementType = "button">({
  as,
  className,
  ...props
}: IconButtonProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof IconButtonProps<T>>) => {
  const Component = as || "button";
  return (
    <Component
      className={`m-2 inline-flex items-center rounded-[50%] p-2 text-black opacity-80 hover:ring-2 focus:ring-2 focus:outline-hidden ${className}`}
      {...props}
    />
  );
};
