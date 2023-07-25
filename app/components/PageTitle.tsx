import { Link } from "@remix-run/react";
import type { ReactNode } from "react";
import { Fragment } from "react";
import { Divider } from "./Divider";
import { Typography } from "./Typography";
import { LeftArrowIos } from "./icons/LeftArrowIos";
import { RightArrowIos } from "./icons/RightArrowIos";

type LinkType = { to: string; name: string };

export const PageTitle = ({
  title,
  subtitle,
  nextLink,
  backLink,
}: {
  title: string;
  subtitle: ReactNode[];
  nextLink?: LinkType;
  backLink?: LinkType;
}) => {
  return (
    <div className="flex flex-col items-center text-center w-full">
      {nextLink || backLink ? (
        <div className="flex justify-between w-full md:hidden pt-1 text-gray-500">
          {backLink ? (
            <Link to={backLink.to} className="p-1 inline-flex items-center">
              <LeftArrowIos />
              {backLink.name}
            </Link>
          ) : (
            <div />
          )}
          {nextLink ? (
            <Link to={nextLink.to} className="p-1 inline-flex items-center">
              {nextLink.name} <RightArrowIos />
            </Link>
          ) : (
            <div />
          )}
        </div>
      ) : null}
      <Typography variant="h2" className="mb-4 mt-2">
        {title}
      </Typography>
      <Typography className="mb-4 italic">
        {subtitle.map((text, i) => (
          <Fragment key={i}>
            {text}
            <br />
          </Fragment>
        ))}
      </Typography>
      <Divider />
    </div>
  );
};
