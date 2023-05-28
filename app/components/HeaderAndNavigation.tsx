import type { ReactNode } from "react";
import { Header } from "./Header";
import { WeddingLink } from "./WeddingLink";
import { links } from "./links";

export const HeaderAndNaviagtion = ({
  showNavigation,
  headerContent,
}: {
  showNavigation: boolean;
  headerContent: ReactNode;
}) => {
  return (
    <>
      <Header showSideBar={showNavigation}>{headerContent}</Header>

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
