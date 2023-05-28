import { RoundedImage } from "~/components/RoundedImage";

export default function Sonica() {
  return (
    <div className="flex gap-8 justify-center m-4">
      <RoundedImage
        name="Raj"
        imageUrl="Bryllup/raj_kvadrat_vzzqsm.jpg"
        role="Brudens far"
      />
      <RoundedImage
        name="Suman"
        imageUrl="Bryllup/suman_kvadrat_2_wlpmvp.jpg"
        role="Brudens mor"
      />
      <RoundedImage
        name="Carina"
        imageUrl="Bryllup/carina-kvadrat_hlanaq.png"
        role="Brudens søster"
      />
      <RoundedImage
        name="Olivia"
        imageUrl="Bryllup/ollie-kvadrat_nb1qxq.jpg"
        role="Brudens niese"
      />
    </div>
  );
}
