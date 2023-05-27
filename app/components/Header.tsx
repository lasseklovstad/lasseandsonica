import type { PropsWithChildren } from "react";
import { SideBar } from "./SideBar";
import { Typography } from "./Typography";

export const Header = ({
  showSideBar,
  children,
}: PropsWithChildren<{ showSideBar: boolean }>) => {
  return (
    <header
      className={`flex flex-col items-center w-full bg-red-50 ${
        showSideBar ? "md:pt-4" : "pt-4"
      }`}
    >
      {showSideBar && <SideBar />}
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
