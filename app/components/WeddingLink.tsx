import { NavLink } from "@remix-run/react";
import { Typography } from "./Typography";

export const WeddingLink = ({
  link,
}: {
  link: { name: string; to: string };
}) => {
  return (
    <NavLink
      to={link.to}
      className={({ isActive }) =>
        `${isActive ? "border-black border-b-2" : ""} w-full inline-flex`
      }
      prefetch="intent"
    >
      <Typography variant="body-small" className="p-1" as="span">
        {link.name}
      </Typography>
    </NavLink>
  );
};
