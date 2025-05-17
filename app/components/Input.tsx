import type { ComponentPropsWithRef } from "react";
import { useId } from "react";

import { cn } from "~/utils/utils";

type Props = {
  labelProps: ComponentPropsWithRef<"label">;
  inputProps: ComponentPropsWithRef<"input">;
  errors?: string[] | undefined;
  className?: string;
};

export const InputField = ({
  labelProps,
  inputProps,
  errors,
  className,
}: Props) => {
  const fallbackId = useId();
  const id = inputProps.id ?? fallbackId;
  const errorId = `${id}-error`;
  return (
    <div className={className}>
      <label
        {...labelProps}
        htmlFor={id}
        className={cn("text-md mb-1 block md:text-lg", labelProps.className)}
      />
      <input
        {...inputProps}
        id={id}
        aria-describedby={errorId}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500"
      />
      <div id={errorId} className={"text-base text-red-600"}>
        {errors ? errors[0] : null}
      </div>
    </div>
  );
};
