import { NavLink } from "react-router";

import type { LinkType } from "~/types/link";

import { Typography } from "./Typography";

export const WeddingLink = ({ link }: { link: LinkType }) => {
  return (
    <NavLink
      to={link.to}
      className={({ isActive }) =>
        `${
          isActive ? "border-b-2 border-black bg-slate-50" : ""
        } inline-flex w-full px-2`
      }
      viewTransition
      prefetch="intent"
    >
      <Typography variant="body-small" className="p-1" as="span">
        {link.name}
      </Typography>
    </NavLink>
  );
};
