import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { href } from "react-router";

import type { CloudinaryImageProps } from "~/components/CloudinaryImage";
import { CloudinaryImage } from "~/components/CloudinaryImage";
import { PageTitle } from "~/components/PageTitle";
import { Typography } from "~/components/Typography";

import type { Route } from "./+types/wedding.ourstory";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Vår historie - Lasse & Sonica" }];
};

export default function OurStory() {
  const { t } = useTranslation("ourstory");
  const { t: tCommon } = useTranslation("common");
  const timeline: TimelineEvent[] = [
    {
      date: <TimelineDate date={new Date(2018, 11, 7)} />,
      title: t("timeline.firstMeeting.title"),
      content: [
        {
          text: t("timeline.firstMeeting.content"),
        },
      ],
    },
    {
      date: <TimelineDate date={new Date(2020, 4, 27)} />,
      title: t("timeline.firstSpark.title"),
      content: [
        {
          text: t("timeline.firstSpark.content1"),
          images: [
            {
              imageUrl: "Bryllup/slackline_ovgmfq.jpg",
              imageAlt: t("timeline.firstSpark.slackLineImageAlt"),
            },
          ],
        },
        {
          text: t("timeline.firstSpark.content2"),
          images: [
            {
              imageUrl: "Bryllup/IMG_20200527_180005_azyfrh.jpg",
              imageAlt: t("timeline.firstSpark.slackLineWithLasseImageAlt"),
              className: "max-w-[400px]",
            },
          ],
        },
      ],
    },
    {
      date: <TimelineDate date={new Date(2020, 5, 21)} />,
      title: t("timeline.firstDate.title"),
      content: [
        {
          text: t("timeline.firstDate.content"),
          images: [
            {
              imageUrl: "v1685207369/taco_ji7gmn.png",
              imageAlt: t("timeline.firstDate.imageAlt"),
              className: "md:max-w-[200px] max-w-[100px]",
            },
          ],
        },
      ],
    },
    {
      date: <TimelineDate date={new Date(2020, 6, 11)} />,
      title: t("timeline.officiallyPartners.title"),
      content: [
        {
          text: t("timeline.officiallyPartners.content"),
          images: [
            {
              imageUrl:
                "Bryllup/59AF94DE-051A-4F6E-AD14-63BBDDDA6375_garffo.jpg",
              imageAlt: t("timeline.firstDate.imageAlt"),
              className: "max-w-[200px]",
            },
          ],
        },
      ],
    },
    {
      date: <TimelineDate date={new Date(2021, 4, 10)} />,
      title: t("timeline.moveTogether.title"),
      content: [
        {
          text: t("timeline.moveTogether.content"),
          images: [
            {
              imageUrl:
                "Bryllup/30D7B25C-FCB1-4748-947F-BAF0282E3EF1_vonek3.jpg",
              imageAlt: t("timeline.moveTogether.lasseImageAlt"),
              className: "max-w-[200px]",
            },
            {
              imageUrl:
                "Bryllup/067E0DAC-5DAD-4D42-BC80-B7B2BEDDECE4_jojzh3.jpg",
              imageAlt: t("timeline.moveTogether.sonicaImageAlt"),
              className: "max-w-[356px]",
            },
          ],
        },
      ],
    },
    {
      date: <TimelineDate date={new Date(2023, 3, 19)} />,
      title: t("timeline.proposal.title"),
      content: [
        {
          text: t("timeline.proposal.content"),
          images: [
            {
              imageUrl:
                "Bryllup/986C7902-25E2-4DB6-B711-C170A3D450CC_zolx3n.jpg",
              imageAlt: t("timeline.proposal.imageAlt"),
              className: "max-w-[200px]",
            },
          ],
        },
      ],
    },
    {
      date: <TimelineDate date={new Date(2023, 7, 11)} />,
      title: t("timeline.wedding.title"),
      content: [
        {
          text: t("timeline.wedding.content"),
          images: [
            {
              imageUrl: "Bryllup/6M6A1862_edited_1_hab1c2.jpg",
              imageAlt: "",
              className: "max-w-[400px]",
            },
            {
              imageUrl: "Bryllup/6M6A1656_tieamc.jpg",
              imageAlt: "",
              className: "max-w-[400px]",
            },
          ],
        },
      ],
    },
    {
      date: <TimelineDate date={new Date(2024, 11, 1)} />,
      title: t("timeline.move.title"),
      content: [
        {
          text: t("timeline.move.content"),
        },
      ],
    },
    {
      date: <TimelineDate date={new Date(2025, 1, 25)} />,
      title: t("timeline.born.title"),
      content: [
        {
          text: t("timeline.born.content"),
        },
      ],
    },
    {
      date: <TimelineDate date={new Date(2025, 9, 11)} />,
      title: t("timeline.weddingParty.title"),
      content: [
        {
          text: t("timeline.weddingParty.content"),
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col items-center">
      <PageTitle
        title={t("title")}
        nextLink={{
          to: href("/wedding/pictures"),
          name: tCommon("pictures"),
        }}
        backLink={{
          to: href("/wedding/friendsandfamily"),
          name: tCommon("friendsandfamily"),
        }}
        subtitle={[t("subtitle")]}
      />

      <div className="flex w-full flex-col">
        {timeline.map(({ content, date, title }, i) => {
          return (
            <div className="flex w-full gap-2 sm:gap-24" key={i}>
              <div className="flex w-[65px] flex-col items-center">
                <Typography
                  as="div"
                  variant="body-small"
                  className="rounded-xs text-center font-medium whitespace-nowrap text-gray-500 sm:px-4"
                >
                  {date}
                </Typography>
                <div className="h-full w-[2px] bg-red-200" />
              </div>
              <div className="w-full px-2 pb-8">
                <Typography variant="h5" className="font-semibold">
                  {title}
                </Typography>
                {content.map((c, i) => {
                  return (
                    <div key={i}>
                      <Typography
                        as="div"
                        variant="body-small"
                        className="my-4"
                      >
                        {c.text}
                      </Typography>
                      <div className="flex flex-wrap gap-1">
                        {c.images?.map((image, i) => (
                          <CloudinaryImage key={i} {...image} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

type TimelineEvent = {
  date: ReactNode;
  title: string;
  content: { text: string; images?: CloudinaryImageProps[] }[];
};

const TimelineDate = ({ date }: { date: Date }) => {
  const { i18n } = useTranslation();
  return (
    <div className="flex flex-col">
      <span>
        {date.toLocaleDateString(i18n.language, {
          day: "numeric",
          month: "short",
        })}
      </span>
      <span>{date.toLocaleDateString(i18n.language, { year: "numeric" })}</span>
    </div>
  );
};
