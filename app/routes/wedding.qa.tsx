import { Trans, useTranslation } from "react-i18next";

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
                <p>
                  <Trans t={t} i18nKey={"speechOrPerformance.answer"} />
                </p>
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
                <a
                  href="https://onsk.no/lister/591-12n"
                  className="my-2 flex w-fit gap-2 rounded border-2 px-6 py-2 text-xl underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  <WishListLogo />
                  {t("gift.link")}
                </a>
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

const WishListLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 18 25"
      height="30"
    >
      <path
        fill="#FF9371"
        d="m16.737 2.938-3.204-1.56-2.841 5.833 3.203 1.56z"
      ></path>
      <path
        fill="#FF9371"
        d="m15.596 13.948.238 2.337-4.092-1.55L7.147 3.008 8.814 1.65l1.61.226z"
      ></path>
      <path
        fill="#FF9371"
        d="M9.791 11.175h-1.86c-3.104 0-5.62 2.428-5.62 5.423v1.184c0 2.994 2.516 5.422 5.62 5.422h1.86c3.104 0 5.62-2.428 5.62-5.422v-1.184c0-2.995-2.516-5.423-5.62-5.423"
      ></path>
      <path
        stroke="#222222"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1.222"
        d="M15.596 15.115a7.6 7.6 0 0 0-.563-2.732l-4.07-9.658a1.86 1.86 0 0 0-3.447 1.404l2.798 7.06M11.933 4.666l1.02-1.965a1.914 1.914 0 1 1 3.485 1.585l-2.523 4.688M1.923 15.7v1.047a6.83 6.83 0 1 0 13.66 0l.015-1.603"
      ></path>
      <path
        fill="#FF9371"
        d="m4.708 9.761-3.74.768 1.195 5.825 3.74-.767zM8.604 8.076l-3.74.767 1.488 7.252 3.74-.768z"
      ></path>
      <path
        stroke="#222222"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1.222"
        d="M2.718 10.056h0a2.154 2.154 0 0 0-1.676 2.542l.448 2.187a2.154 2.154 0 0 0 2.543 1.676h0a2.154 2.154 0 0 0 1.676-2.542l-.448-2.187a2.154 2.154 0 0 0-2.543-1.676ZM6.744 8.046h0a2.154 2.154 0 0 1 2.542 1.677l.756 3.683a2.153 2.153 0 0 1-1.677 2.543h0a2.154 2.154 0 0 1-2.542-1.677l-.756-3.683a2.154 2.154 0 0 1 1.677-2.543Z"
      ></path>
      <path
        fill="#FF9371"
        d="m7.512 12.448 1.47 2.75 1.384.691 3.072-1.166-3.034-3.555c-.474-.127-1.423-.37-1.423-.332s-.98 1.09-1.469 1.612"
      ></path>
      <path
        stroke="#222222"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1.222"
        d="M9.6 16.116s-2.571-3.225-1.67-4.562c.507-.755 1.556-1.04 2.33-.602.103.059.19.143.266.234l3.188 3.74"
      ></path>
    </svg>
  );
};
