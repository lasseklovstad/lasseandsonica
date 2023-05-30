import { RoundedImage } from "~/components/RoundedImage";

export default function Sonica() {
  return (
    <div>
      <div className="flex gap-8 justify-center flex-wrap">
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
      <div className="flex gap-8 justify-center flex-wrap">
        <RoundedImage
          name="Julie"
          imageUrl="Bryllup/25BDF8FF-360B-4ED8-8579-F9C5CB621857_ejljoc.jpg"
          role="Brudens forlover"
        />
        <RoundedImage
          name="Karianne"
          imageUrl="Bryllup/761642E1-6FCB-4BC8-BDE7-C1211641D57C_ktte94.jpg"
          role="Brudens forlover"
        />
        <RoundedImage
          name="Katrine"
          imageUrl="Bryllup/7A1430E2-D810-4F84-826D-E75793B0CFB3_p9efnk.jpg"
          role="Brudens forlover"
        />
        <RoundedImage
          name="Silje"
          imageUrl="Bryllup/9E766F20-D978-4809-9A9C-32490878A604_h8lf1s.jpg"
          role="Brudens forlover"
        />
      </div>
    </div>
  );
}
