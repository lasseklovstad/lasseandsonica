import { RoundedImage } from "~/components/RoundedImage";

export default function Lasse() {
  return (
    <div>
      <div className="flex gap-8 justify-center m-4">
        <RoundedImage
          name="Kjetil"
          imageUrl="Bryllup/kjetil_kvadrat_peujap.jpg"
          role="Brudengomens far"
        />
        <RoundedImage
          name="Hilde"
          imageUrl="Bryllup/mamma_kvadrat_h7dfmb.jpg"
          role="Brudengomens mor"
        />
      </div>
      <div className="flex gap-8 justify-center m-4">
        <RoundedImage
          name="Henriette"
          imageUrl="Bryllup/henri-kvadrat2_kndagl.jpg"
          role="Brudengomens storesøster"
        />
        <RoundedImage
          name="Jon"
          imageUrl="Bryllup/jon-kvadrat_d4qhw3.jpg"
          role="Brudengomens svoger"
        />
        <RoundedImage
          name="Alise"
          imageUrl="Bryllup/alise-kvadrat1_kcubje.jpg"
          role="Brudengomens lillesøster"
        />
        <RoundedImage
          name="Eivind"
          imageUrl="Bryllup/1676901430316_l65wfu.jpg"
          role="Brudengomens lillebror"
        />
      </div>
      <div className="flex gap-8 justify-center m-4">
        <RoundedImage
          name="Ivar"
          imageUrl="Bryllup/ivar-kopi_vu8xc9.jpg"
          role="Brudengomens forlover"
        />
        <RoundedImage
          name="Arne Martin"
          imageUrl="Bryllup/arn-kvadrat_pb4dl4.jpg"
          role="Brudengomens forlover"
        />
        <RoundedImage
          name="Øyvind"
          imageUrl="Bryllup/887263_10151510675260808_147176348_o_2_psdum8.jpg"
          role="Brudengomens forlover"
        />
      </div>
    </div>
  );
}
