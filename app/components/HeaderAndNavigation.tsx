import { routes } from "~/types/routes";
import { Header } from "./Header";
import { WeddingLink } from "./WeddingLink";

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
    name: "Veibeskrivelse",
    to: `${routes.wedding.navigation}`,
  },
  {
    name: "Venner og familie",
    to: `${routes.wedding.friendsAndFamily}`,
  },
  {
    name: "Dresscode",
    to: `${routes.wedding.dresscode}`,
  },
  {
    name: "RSVP",
    to: `${routes.wedding.rsvp}`,
  },
  {
    name: "Ønskeliste",
    to: `${routes.wedding.wishlist}`,
  },
  {
    name: "Q+A",
    to: `${routes.wedding.qa}`,
  },
];

export const HeaderAndNaviagtion = ({
  showNavigation,
}: {
  showNavigation: boolean;
}) => {
  return (
    <>
      <Header showSideBar={showNavigation} />

      {showNavigation && (
        <nav className="py-4">
          <ul className="md:flex flex-row gap-4 hidden">
            {links.map((link) => {
              return (
                <li key={link.to}>
                  <WeddingLink link={link} />
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </>
  );
};
