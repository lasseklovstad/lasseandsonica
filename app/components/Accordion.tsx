import { forwardRef, type ReactNode, type ForwardedRef } from "react";

import { Typography } from "./Typography";

type AccordionProps = {
  title: string;
  content: ReactNode;
  defaultOpen: boolean;
};

export const Accordion = forwardRef(
  (
    { title, content, defaultOpen }: AccordionProps,
    ref: ForwardedRef<HTMLDetailsElement>,
  ) => {
    return (
      <details className="group w-full" open={defaultOpen} ref={ref}>
        <summary className="flex list-none items-center justify-between border border-gray-200 p-4 group-open:bg-gray-100 hover:cursor-pointer hover:bg-gray-100 focus:ring-2 focus:ring-gray-200">
          <Typography variant="h5" as="div">
            {title}
          </Typography>
          <svg
            className="h-6 w-6 shrink-0 transition-transform group-open:rotate-180"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </summary>
        <div className="border border-t-0 border-gray-200 p-4">{content}</div>
      </details>
    );
  },
);

Accordion.displayName = "Accordion";
