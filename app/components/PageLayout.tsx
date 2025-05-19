import type { PropsWithChildren, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { href, Link } from "react-router";

import { HeaderAndNavigation } from "./HeaderAndNavigation";
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
  const { t } = useTranslation("common");
  return (
    <div className="flex min-h-screen flex-col items-center">
      <HeaderAndNavigation
        showNavigation={showNavigation}
        headerContent={headerContent}
        links={[
          {
            name: t("home"),
            to: href("/wedding/home"),
          },
          {
            name: t("ourstory"),
            to: href("/wedding/ourstory"),
          },
          {
            name: t("program"),
            to: href("/wedding/program"),
          },
          {
            name: t("friendsandfamily"),
            to: href("/wedding/friendsandfamily"),
          },
          {
            name: t("rsvp"),
            to: href("/wedding/rsvp"),
          },
          {
            name: t("pictures"),
            to: href("/wedding/pictures"),
          },
          {
            name: t("qa"),
            to: href("/wedding/qa"),
          },
        ]}
      />
      <main className="mb-2 w-full px-1 md:max-w-[1000px]">{children}</main>
      <footer className="mt-auto flex h-10 w-full justify-center gap-4 bg-red-50 p-2 text-center">
        <Typography variant="body-small">{t("createdBy")}</Typography>
        {showLogout && (
          <Typography variant="body-small" className="underline">
            <Link to={href("/logout")}>{t("logout")}</Link>
          </Typography>
        )}
      </footer>
    </div>
  );
};
