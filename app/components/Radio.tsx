import { useId } from "react";
import { Typography } from "./Typography";

type Props = {
  value: string;
  name: string;
  label: string;
  defaultChecked: boolean;
};

export const Radio = ({ name, value, label, defaultChecked }: Props) => {
  const id = useId();
  return (
    <div className="flex items-center">
      <input
        defaultChecked={defaultChecked}
        id={id}
        type="radio"
        value={value}
        name={name}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <Typography htmlFor={id} as="label" className="ml-2">
        {label}
      </Typography>
    </div>
  );
};
