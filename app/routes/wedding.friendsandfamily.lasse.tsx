import { RoundedImage } from "~/components/RoundedImage";

export default function Lasse() {
  return (
    <div>
      <div className="flex gap-8 justify-center flex-wrap">
        <RoundedImage
          name="Kjetil"
          imageUrl="Bryllup/kjetil_kvadrat_peujap.jpg"
          role="Brudgommens far"
        />
        <RoundedImage
          name="Hilde"
          imageUrl="Bryllup/mamma_kvadrat_h7dfmb.jpg"
          role="Brudgommens mor"
        />
        <RoundedImage
          name="Mormor og Thor"
          imageUrl="Bryllup/20690265_10154938406650945_2531678469605660930_o_2_ur46sa.jpg"
          role="Brudgommens besteforeldre"
        />
      </div>
      <div className="flex gap-8 justify-center flex-wrap">
        <RoundedImage
          name="Henriette"
          imageUrl="Bryllup/henri-kvadrat2_kndagl.jpg"
          role="Brudgommens storesøster"
        />
        <RoundedImage
          name="Jon"
          imageUrl="Bryllup/jon-kvadrat_d4qhw3.jpg"
          role="Brudgommens svoger"
        />
        <RoundedImage
          name="Alise"
          imageUrl="Bryllup/alise-kvadrat1_kcubje.jpg"
          role="Brudgommens lillesøster"
        />
        <RoundedImage
          name="Eivind"
          imageUrl="Bryllup/1676901430316_l65wfu.jpg"
          role="Brudgommens lillebror"
        />
      </div>
      <div className="flex gap-8 justify-center m-4 flex-wrap">
        <RoundedImage
          name="Ivar"
          imageUrl="Bryllup/ivar-kopi_vu8xc9.jpg"
          role="Brudgommens forlover"
        />
        <RoundedImage
          name="Arne Martin"
          imageUrl="Bryllup/arn-kvadrat_pb4dl4.jpg"
          role="Brudgommens forlover"
        />
        <RoundedImage
          name="Øyvind"
          imageUrl="Bryllup/887263_10151510675260808_147176348_o_2_psdum8.jpg"
          role="Brudgommens forlover"
        />
      </div>
    </div>
  );
}
