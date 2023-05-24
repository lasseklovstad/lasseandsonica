import { NavLink } from "@remix-run/react";
import { useCountdown } from "~/hooks/useCountdown";
import { routes } from "~/types/routes";
import { Typography } from "./Typography";

const links = [
  {
    name: "Hjem",
    to: `/${routes.home}`,
  },
  {
    name: "Vår Historie",
    to: `/${routes.ourStory}`,
  },
  {
    name: "Program",
    to: `/${routes.program}`,
  },
  {
    name: "Veibeskrivelse",
    to: `/${routes.navigation}`,
  },
  {
    name: "Våre fantistiske venner og familie",
    to: `/${routes.friendsAndFamily}`,
  },
  {
    name: "Dresscode",
    to: `/${routes.dresscode}`,
  },
  {
    name: "RSVP",
    to: `/${routes.rsvp}`,
  },
  {
    name: "Ønskeliste",
    to: `/${routes.wishlist}`,
  },
  {
    name: "Q + A",
    to: `/${routes.qa}`,
  },
];

const startDate = new Date(2023, 7, 11, 12, 30);

export const HeaderAndNaviagtion = () => {
  const [days, hours, minutes, seconds] = useCountdown(startDate);
  return (
    <>
      <header className="flex flex-col items-center gap-4 my-4">
        <Typography variant="h1">Lasse & Sonica</Typography>
        <Typography variant="h4" as="div">
          {startDate
            .toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
            })
            .toUpperCase()}{" "}
          • OSLO, NORWAY
        </Typography>
        <Typography>
          {days} dager, {hours} timer, {minutes} minutter, {seconds} sekunder
        </Typography>
      </header>
      <nav>
        <ul className="md:flex flex-row gap-2 hidden">
          {links.map((link) => {
            return (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `${isActive ? "border-black border-b-2" : ""}`
                  }
                >
                  <Typography className="pb-4 p-1" as="span">
                    {link.name}
                  </Typography>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
