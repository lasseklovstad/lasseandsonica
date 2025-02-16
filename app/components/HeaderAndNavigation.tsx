import type { ReactNode } from "react";

import type { LinkType } from "~/types/link";

import { Header } from "./Header";
import { WeddingLink } from "./WeddingLink";

export const HeaderAndNavigation = ({
  showNavigation,
  headerContent,
  links,
}: {
  showNavigation: boolean;
  headerContent: ReactNode;
  links: LinkType[];
}) => {
  return (
    <>
      <Header showSideBar={showNavigation} links={links}>
        {headerContent}
      </Header>

      {showNavigation && (
        <nav className="md:py-4">
          <ul className="hidden flex-row md:flex">
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
