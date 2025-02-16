import type { HTMLInputTypeAttribute } from "react";
import { useId } from "react";

import { Typography } from "./Typography";

type Props = {
  label: string;
  placeholder?: string;
  name: string;
  type: HTMLInputTypeAttribute;
  defaultValue?: string;
};

export const Input = ({
  label,
  name,
  type,
  placeholder,
  defaultValue,
}: Props) => {
  const id = useId();
  return (
    <>
      <label htmlFor={id} className="mb-1 block">
        <Typography as="span" variant="body">
          {label}
        </Typography>
      </label>
      <input
        defaultValue={defaultValue}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500"
      />
    </>
  );
};
