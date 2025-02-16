import type { PropsWithChildren } from "react";
import { NavLink } from "react-router";

import { CloudinaryImage } from "./CloudinaryImage";
import { Typography } from "./Typography";

const TextOverImage = ({ children }: PropsWithChildren) => {
  return (
    <Typography
      variant="h3"
      as="div"
      className="absolute top-0 flex h-full w-full items-center justify-center pb-4 text-white"
    >
      {children}
    </Typography>
  );
};

export const RoundedImageLink = ({
  to,
  title,
  imageUrl,
  weedingRole,
}: {
  to: string;
  title: string;
  imageUrl: string;
  weedingRole: string;
}) => {
  return (
    <NavLink
      to={to}
      preventScrollReset
      className={({ isActive }) =>
        `relative w-[325px] transition duration-500 ease-in-out ${
          isActive ? "scale-105 brightness-100" : "scale-100 brightness-75"
        }`
      }
    >
      <TextOverImage>{title}</TextOverImage>
      <CloudinaryImage
        imageAlt={title}
        imageUrl={imageUrl}
        className="overflow-auto rounded-[50%] shadow-md"
      />
      <Typography
        as="div"
        variant="h3"
        className="text-center font-cursive font-thin"
      >
        {weedingRole}
      </Typography>
    </NavLink>
  );
};
