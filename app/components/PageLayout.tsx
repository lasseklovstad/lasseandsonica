import type { PropsWithChildren, ReactNode } from "react";
import { href, Link } from "react-router";

import { HeaderAndNavigation } from "./HeaderAndNavigation";
import { links } from "./links";
import { Typography } from "./Typography";

export const PageLayout = ({
  children,
  showNavigation,
  showLogout,
  headerContent,
}: PropsWithChildren<{
  showNavigation: boolean;
  showLogout: boolean;
  headerContent: ReactNode;
}>) => {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <HeaderAndNavigation
        showNavigation={showNavigation}
        headerContent={headerContent}
        links={links}
      />
      <main className="mb-2 w-full px-1 md:max-w-[1000px]">{children}</main>
      <footer className="mt-auto flex h-10 w-full justify-center gap-4 bg-red-50 p-2 text-center">
        <Typography variant="body-small">Laget av Lasse & Sonica</Typography>
        {showLogout && (
          <Typography variant="body-small" className="underline">
            <Link to={href("/logout")}>Logg ut</Link>
          </Typography>
        )}
      </footer>
    </div>
  );
};
