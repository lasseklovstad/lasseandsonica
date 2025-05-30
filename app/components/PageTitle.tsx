import type { ReactNode } from "react";
import { Fragment } from "react";
import { Link } from "react-router";

import { Divider } from "./Divider";
import { LeftArrowIos } from "./icons/LeftArrowIos";
import { RightArrowIos } from "./icons/RightArrowIos";
import { Typography } from "./Typography";

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
    <div className="flex w-full flex-col items-center text-center">
      {nextLink || backLink ? (
        <div className="flex w-full justify-between pt-1 text-gray-500 md:hidden">
          {backLink ? (
            <Link to={backLink.to} className="inline-flex items-center p-1">
              <LeftArrowIos />
              {backLink.name}
            </Link>
          ) : (
            <div />
          )}
          {nextLink ? (
            <Link to={nextLink.to} className="inline-flex items-center p-1">
              {nextLink.name} <RightArrowIos />
            </Link>
          ) : (
            <div />
          )}
        </div>
      ) : null}
      <Typography variant="h2" className="mt-2 mb-4">
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
