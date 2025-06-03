import { useTranslation } from "react-i18next";

import { PageTitle } from "~/components/PageTitle";
import { Typography } from "~/components/Typography";
import { getBackLink, getNextLink, useLinks } from "~/hooks/useLinks";

import type { Route } from "./+types/wedding.program";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Program - Lasse & Sonica" }];
};

export default function Program() {
  const { t } = useTranslation("program");
  const links = useLinks();
  return (
    <div>
      <PageTitle
        title={t("title")}
        backLink={getBackLink("program", links)}
        nextLink={getNextLink("program", links)}
        subtitle={[t("subtitle")]}
      />
      <div className="flex w-full flex-col">
        {[
          {
            startTime: "16:00",
            size: "large",
            title: t("welcome"),
          },
          {
            startTime: "16:30",
            title: t("ceremony"),
          },
          {
            startTime: "17:30",
            title: t("dinner"),
          },
          {
            startTime: "22:00",
            title: t("party"),
          },
          {
            startTime: "01:00",
            title: t("thankYou"),
          },
        ].map(({ startTime, title, size }, i) => {
          return (
            <div className="flex w-full md:gap-20" key={i}>
              <div className="flex w-[135px] flex-col items-center">
                <Typography
                  variant={size === "large" ? "h5" : "body-small"}
                  className="w-full rounded-xs text-center font-medium text-gray-500"
                >
                  {startTime}
                </Typography>
                <div className="h-full w-[2px] bg-red-200" />
              </div>
              <div className="w-full px-1 pb-8">
                <Typography
                  variant={size === "large" ? "h4" : "h5"}
                  className={size !== "large" ? "italic" : ""}
                >
                  {title}
                </Typography>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
