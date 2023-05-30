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
      className={`opacity-80 inline-flex items-center p-2 m-2 text-black rounded-[50%] focus:outline-none focus:ring-2 hover:ring-2 ${className}`}
      {...props}
    />
  );
};
