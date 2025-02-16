import { NavLink } from "react-router";
import type { PropsWithChildren } from "react";
import { CloudinaryImage } from "./CloudinaryImage";
import { Typography } from "./Typography";

const TextOverImage = ({ children }: PropsWithChildren) => {
  return (
    <Typography
      variant="h3"
      as="div"
      className="text-white absolute top-0 h-full flex items-center w-full justify-center pb-4"
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
        `relative duration-500 transition ease-in-out w-[325px] ${
          isActive ? "scale-105 brightness-100" : "scale-100 brightness-75"
        }`
      }
    >
      <TextOverImage>{title}</TextOverImage>
      <CloudinaryImage
        imageAlt={title}
        imageUrl={imageUrl}
        className="shadow-md rounded-[50%] overflow-auto"
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
