import { href } from "react-router";

import { PageTitle } from "~/components/PageTitle";
import { Typography } from "~/components/Typography";

import type { Route } from "./+types/wedding.program";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Program - Lasse & Sonica" }];
};

export default function Program() {
  return (
    <div>
      <PageTitle
        title="Program"
        nextLink={{
          to: href("/wedding/friendsandfamily"),
          name: "Venner og familie",
        }}
        backLink={{
          to: href("/wedding/ourstory"),
          name: "Vår historie",
        }}
        subtitle={["Her er program for dagen."]}
      />
      <div className="flex w-full flex-col">
        {[
          {
            startTime: <>16.00</>,
            size: "large",
            title: "Velkommen til bryllupsfest på Månefisken",
          },
          {
            startTime: <>16:30</>,
            title: "Kjærlighetsseremoni",
          },
          {
            startTime: <>17:30</>,
            title: "Middag",
          },
          {
            startTime: <>22:00</>,
            title: "Fest og underholdning",
          },
          {
            startTime: <>01:00</>,
            title: "Takk for nå",
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
