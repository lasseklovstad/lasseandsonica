import { useTranslation } from "react-i18next";

import { ImageLibrary } from "~/components/ImageLibrary";
import { PageTitle } from "~/components/PageTitle";
import { getBackLink, getNextLink, useLinks } from "~/hooks/useLinks";

import type { Route } from "./+types/wedding.pictures";

const pictures = [
  {
    imageUrl: "Bryllup/628492FE-4015-4D35-9DF1-2D651C5F3BD5_jx3fpf.jpg",
    imageAlt: "Piknikk i parken etter Lasse hadde fridd",
  },
  {
    imageUrl: "Bryllup/20250517_113707848_iOS_fqp13c.heic",
    imageAlt: "17.mai 2025 med hele familien",
  },
  {
    imageUrl: "remixImages/vjrwmhmbald7nyqabirs.jpg",
    imageAlt: "På vei ut av tempelet etter bryllupssermonien",
  },
  {
    imageUrl: "remixImages/f0m2tf0kbica7c8sc6ib.jpg",
    imageAlt: "På vei til Oslo etter tempelet",
  },
  {
    imageUrl: "Bryllup/20250117_213635328_iOS_ytl8wk.heic",
    imageAlt: "Fagdag med jobb",
  },
  {
    imageUrl: "Bryllup/20240509_110843552_iOS_tbygzv.heic",
    imageAlt: "Orienteringstur",
  },
  {
    imageUrl: "Bryllup/20240629_170355415_iOS_fr9njc.heic",
    imageAlt: "Fest i Sandefjord",
  },
  {
    imageUrl: "Bryllup/c47c662b-2665-456c-87bf-f1cf736c7029_zrepow.jpg",
    imageAlt: "",
  },
  {
    imageUrl: "Bryllup/6f6370c8-3bc8-47ce-a37e-32a75b63a8cc_ju8bc9.jpg",
    imageAlt: "",
  },
  {
    imageUrl: "Bryllup/87FD1159-9544-4062-8895-1B2F2F8D1641_ojhz7u.jpg",
    imageAlt: "Sonica og Lasse på vei til brylupp",
  },
  {
    imageUrl: "Bryllup/1E228DA5-7255-48DE-AEBA-1A38274C04B2_jvtqrn.jpg",
    imageAlt: "Sonica og Lasse i London",
  },
  {
    imageUrl: "Bryllup/4EEE8876-6532-4E27-9176-89F5043CB79E_pxjozc.jpg",
    imageAlt: "Sonica og Lasse i bryllup",
  },
  {
    imageUrl: "Bryllup/991EAE0E-34D6-459F-8315-CED736F78B07_wlkzws_kxoxbf.jpg",
    imageAlt: "Sonica og Lasse med Olivia",
  },
  {
    imageUrl: "Bryllup/6024367F-CF06-44BC-A60A-37FCE41F4114_junxcn.jpg",
    imageAlt: "Sonica og Lasse i Paris",
  },

  {
    imageUrl: "Bryllup/617B8EC1-7A36-401D-91F2-9E2F1DDB3AB3_icnszf.jpg",
    imageAlt: "Sonica og Lasse på tur i Norge et sted",
  },
  {
    imageUrl: "Bryllup/EDE940EB-52E5-4B0B-BB86-494BE1BBAC33_smlzvg.jpg",
    imageAlt: "Sonica og Lasse i Åndalsnes",
  },
  {
    imageUrl: "Bryllup/DBA9E8B2-A1EC-4742-B439-7C34F7D1D95E_v7spbg_dlls5k.jpg",
    imageAlt: "Sonica og Lasse er kule",
  },
  {
    imageUrl: "Bryllup/5C340B65-FCCC-415F-8EEC-D2EFAB325DD7_x7aykj_ksqr5v.jpg",
    imageAlt: "Sonica og Lasse på hotellrom i Paris",
  },
  {
    imageUrl: "Bryllup/20210517_145932411_iOS_qo2yjd.heic",
    imageAlt: "Lasse og Sonica på 17.mai",
  },
  {
    imageUrl: "Bryllup/20220417_104704285_iOS_ejdmbg.heic",
    imageAlt: "Sonica og Lasse på orienteringstur i Sandefjord",
  },
];

export const meta: Route.MetaFunction = () => {
  return [{ title: "Bilder av oss - Lasse & Sonica" }];
};

export default function Pictures() {
  const links = useLinks();
  const { t } = useTranslation("pictures");
  return (
    <div>
      <PageTitle
        title={t("title")}
        backLink={getBackLink("pictures", links)}
        nextLink={getNextLink("pictures", links)}
        subtitle={[t("subtitle")]}
      />
      <ImageLibrary pictures={pictures} />
    </div>
  );
}
