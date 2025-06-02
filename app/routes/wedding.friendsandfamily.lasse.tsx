import { useTranslation } from "react-i18next";

import { RoundedImage } from "~/components/RoundedImage";

export default function Lasse() {
  const { t } = useTranslation("friendsAndFamily");
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-8">
        <RoundedImage
          name="Kjetil"
          imageUrl="Bryllup/kjetil_kvadrat_peujap.jpg"
          weddingRole={t("groomFather")}
        />
        <RoundedImage
          name="Hilde"
          imageUrl="Bryllup/mamma_kvadrat_h7dfmb.jpg"
          weddingRole={t("groomMother")}
        />
        <RoundedImage
          name="Mormor og Thor"
          imageUrl="Bryllup/20690265_10154938406650945_2531678469605660930_o_2_ur46sa.jpg"
          weddingRole={t("groomGrandparents")}
        />
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        <RoundedImage
          name="Henriette"
          imageUrl="Bryllup/henri-kvadrat2_kndagl.jpg"
          weddingRole={t("groomBigSister")}
        />
        <RoundedImage
          name="Jon"
          imageUrl="Bryllup/jon-kvadrat_d4qhw3.jpg"
          weddingRole={t("groomBrotherInLaw")}
        />
        <RoundedImage
          name="Alise"
          imageUrl="Bryllup/alise-kvadrat1_kcubje.jpg"
          weddingRole={t("groomLittleSister")}
        />
        <RoundedImage
          name="Eivind"
          imageUrl="Bryllup/1676901430316_l65wfu.jpg"
          weddingRole={t("groomLittleBrother")}
        />
      </div>
      <div className="m-4 flex flex-wrap justify-center gap-8">
        <RoundedImage
          name="Ivar"
          imageUrl="Bryllup/ivar-kopi_vu8xc9.jpg"
          weddingRole={t("groomsMen")}
        />
        <RoundedImage
          name="Arne Martin"
          imageUrl="Bryllup/arn-kvadrat_pb4dl4.jpg"
          weddingRole={t("groomsMen")}
        />
        <RoundedImage
          name="Øyvind"
          imageUrl="Bryllup/887263_10151510675260808_147176348_o_2_psdum8.jpg"
          weddingRole={t("groomsMen")}
        />
      </div>
    </div>
  );
}
