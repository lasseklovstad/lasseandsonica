import { href } from "react-router";

export const links = [
  {
    name: "Hjem",
    to: href("/wedding/home"),
  },
  {
    name: "Vår historie",
    to: href("/wedding/ourstory"),
  },
  {
    name: "Program",
    to: href("/wedding/program"),
  },
  {
    name: "Venner og familie",
    to: href("/wedding/friendsandfamily"),
  },
  {
    name: "RSVP",
    to: href("/wedding/rsvp"),
  },
  {
    name: "Bilder",
    to: href("/wedding/pictures"),
  },
  {
    name: "Q+A",
    to: href("/wedding/qa"),
  },
];
