import type { PropsWithChildren } from "react";

import type { LinkType } from "~/types/link";

import { SideBar } from "./SideBar";
import { Typography } from "./Typography";

export const Header = ({
  showSideBar,
  children,
  links,
}: PropsWithChildren<{ showSideBar: boolean; links: LinkType[] }>) => {
  return (
    <header
      className={`flex w-full flex-col items-center bg-red-50 ${
        showSideBar ? "md:pt-2" : "pt-2"
      }`}
    >
      <div className="relative flex w-full items-center justify-center p-1">
        {showSideBar && <SideBar links={links} />}
        <img
          alt="Bilde av to ringer"
          className="w-10 sm:w-14"
          src="/ringer.png"
        />
      </div>

      <div className="mb-4 flex w-full flex-col items-center gap-2">
        <Typography
          variant="h1"
          className="font-cursive text-6xl font-normal md:text-8xl"
        >
          Sonica & Lasse
        </Typography>
        {children}
      </div>
    </header>
  );
};
