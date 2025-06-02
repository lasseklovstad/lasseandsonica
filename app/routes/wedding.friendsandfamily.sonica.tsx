import { useTranslation } from "react-i18next";

import { RoundedImage } from "~/components/RoundedImage";

export default function Sonica() {
  const { t } = useTranslation("friendsAndFamily");
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-8">
        <RoundedImage
          name="Raj"
          imageUrl="Bryllup/raj_kvadrat_vzzqsm.jpg"
          weddingRole={t("brideFather")}
        />
        <RoundedImage
          name="Suman"
          imageUrl="Bryllup/suman_kvadrat_2_wlpmvp.jpg"
          weddingRole={t("brideMother")}
        />
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <RoundedImage
          name="Carina"
          imageUrl="Bryllup/Carina_firkant_bmnbvp.jpg"
          weddingRole={t("brideSister")}
        />
        <RoundedImage
          name="Olivia"
          imageUrl="Bryllup/ollie-kvadrat_nb1qxq.jpg"
          weddingRole={t("brideNiece")}
        />
        <RoundedImage
          name="Håkon"
          imageUrl="Bryllup/haakon_ratgah.jpg"
          weddingRole={t("brideBrotherInLaw")}
        />
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <RoundedImage
          name="Julie"
          imageUrl="Bryllup/25BDF8FF-360B-4ED8-8579-F9C5CB621857_ejljoc.jpg"
          weddingRole={t("bridesMaid")}
        />
        <RoundedImage
          name="Karianne"
          imageUrl="Bryllup/761642E1-6FCB-4BC8-BDE7-C1211641D57C_ktte94.jpg"
          weddingRole={t("bridesMaid")}
        />
        <RoundedImage
          name="Katrine"
          imageUrl="Bryllup/7A1430E2-D810-4F84-826D-E75793B0CFB3_p9efnk.jpg"
          weddingRole={t("bridesMaid")}
        />
        <RoundedImage
          name="Silje"
          imageUrl="Bryllup/9E766F20-D978-4809-9A9C-32490878A604_h8lf1s.jpg"
          weddingRole={t("bridesMaid")}
        />
      </div>
    </div>
  );
}
