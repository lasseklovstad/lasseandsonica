import type { ReactNode } from "react";
import { Typography } from "./Typography";

type AccordionProps = {
  title: string;
  content: ReactNode;
};

export const Accordion = ({ title, content }: AccordionProps) => {
  return (
    <details className="group w-full">
      <summary className="hover:cursor-pointer hover:bg-gray-100 group-open:bg-gray-100 p-4 flex justify-between items-center focus:ring-2 focus:ring-gray-200 border border-gray-200">
        <Typography variant="h5" as="div">
          {title}
        </Typography>
        <svg
          className="w-6 h-6 shrink-0 group-open:rotate-180 transition-transform"
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
      <div className="p-4 border border-t-0 border-gray-200">{content}</div>
    </details>
  );
};
