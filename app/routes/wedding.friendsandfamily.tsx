import { Link } from "@remix-run/react";
import { PropsWithChildren } from "react";
import { CloudinaryImage } from "~/components/CloudinaryImage";
import { Typography } from "~/components/Typography";

export default function FriendsAndFamily() {
  return (
    <>
      <Typography variant="h2" className="text-center">
        Venner og familie
      </Typography>
      <Typography className="text-center my-4">
        Trykk på bildene for å oppdage mer.
      </Typography>
      <div className="flex gap-4 md:gap-16 mx-4 justify-center">
        <Link to="sonica" className="relative w-[300px]">
          <TextOverImage>Sonica</TextOverImage>
          <CloudinaryImage
            imageAlt="Sonica"
            imageUrl="Bryllup/sonica_squar_tmyspn.jpg"
            className="shadow-md rounded-[50%] overflow-auto"
          />
        </Link>
        <Link to="lasse" className="relative  w-[300px]">
          <TextOverImage>Lasse</TextOverImage>
          <CloudinaryImage
            imageAlt="Lasse"
            imageUrl="Bryllup/lasse_squar_nb1kto.jpg"
            className="shadow-md rounded-[50%] overflow-auto"
          />
        </Link>
      </div>
    </>
  );
}

const TextOverImage = ({ children }: PropsWithChildren) => {
  return (
    <Typography
      variant="h3"
      as="div"
      className="text-white absolute top-0 h-full flex items-center w-full justify-center"
    >
      {children}
    </Typography>
  );
};
