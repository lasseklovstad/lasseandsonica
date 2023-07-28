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
      <label htmlFor={id} className="block mb-1">
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
        className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
    </>
  );
};
