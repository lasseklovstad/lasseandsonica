import { Fragment } from "react";
import { Typography } from "./Typography";

export const PageTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string[];
}) => {
  return (
    <div className="flex flex-col items-center text-center">
      <Typography variant="h2" className="mb-4">
        {title}
      </Typography>
      <Typography className="mb-4">
        {subtitle.map((text, i) => (
          <Fragment key={i}>
            {text}
            <br />
          </Fragment>
        ))}
      </Typography>
      <div className="w-44 border-2 mb-4" />
    </div>
  );
};
