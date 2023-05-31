import { Link } from "@remix-run/react";
import type { PropsWithChildren, ReactNode } from "react";
import { routes } from "~/types/routes";
import { HeaderAndNaviagtion } from "./HeaderAndNavigation";
import { Typography } from "./Typography";
import { links } from "./links";

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
    <div className="flex items-center flex-col min-h-screen">
      <HeaderAndNaviagtion
        showNavigation={showNavigation}
        headerContent={headerContent}
        links={links}
      />
      <main className="md:max-w-[1000px] w-full mb-2 px-1">{children}</main>
      <footer className="mt-auto h-10 bg-red-50 w-full text-center p-2 flex justify-center gap-4">
        <Typography variant="body-small">Laget av Lasse & Sonica</Typography>
        {showLogout && (
          <Typography variant="body-small" className="underline">
            <Link to={`/${routes.logout}`}>Logg ut</Link>
          </Typography>
        )}
      </footer>
    </div>
  );
};
