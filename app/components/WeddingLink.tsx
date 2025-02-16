import { NavLink } from "react-router";
import { Typography } from "./Typography";
import type { LinkType } from "~/types/link";

export const WeddingLink = ({ link }: { link: LinkType }) => {
  return (
    <NavLink
      to={link.to}
      className={({ isActive }) =>
        `${
          isActive ? "border-black border-b-2 bg-slate-50" : ""
        } w-full inline-flex px-2`
      }
      prefetch="intent"
    >
      <Typography variant="body-small" className="p-1" as="span">
        {link.name}
      </Typography>
    </NavLink>
  );
};
