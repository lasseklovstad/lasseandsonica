import { Link } from "@remix-run/react";
import { CloudinaryImage } from "~/components/CloudinaryImage";
import { Typography } from "~/components/Typography";

export default function FriendsAndFamily() {
  return (
    <div className="flex gap-2 flex-col md:flex-row mx-4">
      <Link to="sonica" className="relative hover:opacity-80">
        <Typography
          variant="h1"
          as="div"
          className="text-white absolute top-[50%] left-[30%]"
        >
          Sonica
        </Typography>
        <CloudinaryImage
          imageAlt="Sonica"
          imageUrl="Bryllup/08481929-523D-4779-ACB5-A6E5993257DD_gd71i8.jpg"
          className="shadow-md"
        />
      </Link>
      <Link to="lasse" className="relative hover:opacity-80">
        <Typography
          variant="h1"
          as="div"
          className="text-white absolute top-[50%] left-[32%]"
        >
          Lasse
        </Typography>
        <CloudinaryImage
          imageAlt="Lasse"
          imageUrl="Bryllup/9B40BCB2-B3D0-4035-B729-703A84877C50_kjnzcm.jpg"
          className="shadow-md"
        />
      </Link>
    </div>
  );
}
