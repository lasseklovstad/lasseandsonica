import { useTranslation } from "react-i18next";

import { PageTitle } from "~/components/PageTitle";
import { RoundedImage } from "~/components/RoundedImage";
import { Typography } from "~/components/Typography";
import { getBackLink, getNextLink, useLinks } from "~/hooks/useLinks";

import type { Route } from "./+types/wedding.qa";

export const meta: Route.MetaFunction = () => {
  return [{ title: "QA - Lasse & Sonica" }];
};

export default function QA() {
  const { t } = useTranslation("qa");
  const links = useLinks();
  return (
    <div className="flex flex-col items-center">
      <PageTitle
        title={t("title")}
        backLink={getBackLink("qa", links)}
        nextLink={getNextLink("qa", links)}
        subtitle={[t("subtitle")]}
      />
      <div className="mb-12 flex max-w-[500px] flex-col gap-6 px-2">
        {[
          {
            question: t("location.question"),
            answer: (
              <div>
                <span>{t("location.answerWhere")}</span>

                <ul className="mt-2 ml-4 list-disc">
                  <li>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Månefisken+AS"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t("location.answerAddress")}
                    </a>
                  </li>
                  <li>{t("location.answerExtra")}</li>
                  <li>{t("location.answerParking")}</li>
                </ul>
              </div>
            ),
          },
          {
            question: t("dresscode.question"),
            answer: t("dresscode.answer"),
          },
          {
            question: t("speechOrPerformance.question"),
            answer: (
              <div>
                <p>{t("speechOrPerformance.answer")}</p>
                <p className="mt-2">
                  {t("speechOrPerformance.answereContact")}:
                  jimr.knutsen@live.no
                </p>
                <div className="flex flex-wrap gap-2">
                  <RoundedImage
                    name="Magnus"
                    imageUrl="Bryllup/452254328_10169340490300651_7044865163759408487_n_wegxcn.jpg"
                    weddingRole={t("toastmaster")}
                    size="small"
                  />
                  <RoundedImage
                    name="Jim-Roger"
                    imageUrl="Bryllup/468958836_10162755569200921_6075689099793330660_n_ofsqss.jpg"
                    weddingRole={t("toastmaster")}
                    size="small"
                  />
                </div>
              </div>
            ),
          },
          {
            question: t("gift.question"),
            answer: (
              <>
                <ul className="my-2 ml-4 list-disc">
                  <li>{t("gift.list1")}</li>
                  <li>{t("gift.list2")}</li>
                </ul>
                <span className="italic">{t("gift.closing")}</span>
              </>
            ),
          },
        ].map(({ question, answer }, i) => (
          <div key={i}>
            <Typography variant="h4" className="mb-2">
              {question}
            </Typography>
            {answer}
          </div>
        ))}
      </div>
    </div>
  );
}
