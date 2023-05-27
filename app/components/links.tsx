import { routes } from "~/types/routes";

export const links = [
  {
    name: "Hjem",
    to: `${routes.wedding.home}`,
  },
  {
    name: "Vår historie",
    to: `${routes.wedding.ourStory}`,
  },
  {
    name: "Program",
    to: `${routes.wedding.program}`,
  },
  {
    name: "Venner og familie",
    to: `${routes.wedding.friendsAndFamily}`,
  },
  {
    name: "RSVP",
    to: `${routes.wedding.rsvp}`,
  },
  {
    name: "Q+A",
    to: `${routes.wedding.qa}`,
  },
  {
    name: "Bilder",
    to: `${routes.wedding.pictures}`,
  },
];
