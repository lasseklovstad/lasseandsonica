import { CloudinaryImage } from "~/components/CloudinaryImage";
import { Typography } from "~/components/Typography";

export default function OurStory() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <Typography variant="h2" className="mb-4">
        Vår historie
      </Typography>
      <CloudinaryImage
        aspectRatio={{ h: 3080, w: 2316 }}
        imageAlt="Lasse og Sonica i Åndalsnes på rondane"
        imageUrl="Bryllup/EDE940EB-52E5-4B0B-BB86-494BE1BBAC33_smlzvg.jpg"
        className="md:w-[350px]"
      />
      <CloudinaryImage
        aspectRatio={{ h: 2208, w: 1218 }}
        imageAlt="Lasse og Sonica på tur i Paris"
        imageUrl="Bryllup/E1565B89-22A9-4CE4-989F-1E6CD6A2090C_mcyazr.jpg"
        className="md:w-[350px]"
      />
    </div>
  );
}
