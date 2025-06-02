import { useTranslation } from "react-i18next";
import { href } from "react-router";

import { ImageLibrary } from "~/components/ImageLibrary";
import { PageTitle } from "~/components/PageTitle";

import type { Route } from "./+types/wedding.pictures";

const pictures = [
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
  const { t: tCommon } = useTranslation("common");
  return (
    <div>
      <PageTitle
        title="Bilder av oss"
        nextLink={{
          to: href("/wedding/home"),
          name: tCommon("home"),
        }}
        backLink={{
          to: href("/wedding/ourstory"),
          name: tCommon("ourstory"),
        }}
        subtitle={["Her ser du bilder av oss gjennom tidene."]}
      />
      <ImageLibrary pictures={pictures} />
    </div>
  );
}
