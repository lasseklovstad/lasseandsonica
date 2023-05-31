import type { PropsWithChildren } from "react";
import { SideBar } from "./SideBar";
import { Typography } from "./Typography";
import type { LinkType } from "~/types/link";

export const Header = ({
  showSideBar,
  children,
  links,
}: PropsWithChildren<{ showSideBar: boolean; links: LinkType[] }>) => {
  return (
    <header
      className={`flex flex-col items-center w-full bg-red-50 ${
        showSideBar ? "md:pt-2" : "pt-2"
      }`}
    >
      <div className="relative flex items-center justify-center w-full p-1">
        {showSideBar && <SideBar links={links} />}
        <img
          alt="Bilde av to ringer"
          className="w-10 sm:w-14"
          src="/ringer.png"
        />
      </div>

      <div className="flex flex-col items-center w-full gap-2 mb-4">
        <Typography
          variant="h1"
          className="font-cursive font-normal text-6xl md:text-8xl"
        >
          Sonica & Lasse
        </Typography>
        {children}
      </div>
    </header>
  );
};
