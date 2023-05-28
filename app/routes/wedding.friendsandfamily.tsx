import { Link, NavLink, Outlet } from "@remix-run/react";
import type { PropsWithChildren } from "react";
import { CloudinaryImage } from "~/components/CloudinaryImage";
import { PageTitle } from "~/components/PageTitle";
import { Typography } from "~/components/Typography";

export default function FriendsAndFamily() {
  return (
    <div>
      <PageTitle
        title="Venner og familie"
        subtitle={["Trykk på bildene for å oppdage mer."]}
      />
      <div className="flex gap-4 md:gap-16 mx-4 justify-center items-center">
        <RoundedImageLink
          title="Sonica"
          imageUrl="Bryllup/sonica_squar_tmyspn.jpg"
          to="sonica"
          role="Brud"
        />
        <RoundedImageLink
          title="Lasse"
          imageUrl="Bryllup/lasse_squar_nb1kto.jpg"
          to="lasse"
          role="Brudgom"
        />
      </div>
      <Outlet />
    </div>
  );
}

const TextOverImage = ({ children }: PropsWithChildren) => {
  return (
    <Typography
      variant="h3"
      as="div"
      className="text-white absolute top-0 h-full flex items-center w-full justify-center"
    >
      {children}
    </Typography>
  );
};

const RoundedImageLink = ({
  to,
  title,
  imageUrl,
  role,
}: {
  to: string;
  title: string;
  imageUrl: string;
  role: string;
}) => {
  return (
    <NavLink
      to={to}
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
        {role}
      </Typography>
    </NavLink>
  );
};
