import { Link, useSearchParams } from "react-router";

import { CloudinaryImage } from "./CloudinaryImage";
import { IconButton } from "./IconButton";
import { LeftArrow } from "./icons/LeftArrow";
import { RightArrow } from "./icons/RightArrow";

type Props = {
  pictures: { imageUrl: string; imageAlt: string }[];
  cloudName?: string;
};

export const ImageLibrary = ({ pictures, cloudName }: Props) => {
  const [params] = useSearchParams();
  const pictureIndex = params.get("pictureIndex");
  const pictureIndexAsNumber = pictureIndex && parseInt(pictureIndex);
  const selectedPicture = pictures.find((p, i) => i == pictureIndexAsNumber);
  return (
    <>
      {typeof pictureIndexAsNumber === "number" && selectedPicture ? (
        <div className="flex w-full justify-center">
          <div className="relative max-w-[500px]">
            <IconButton
              as={Link}
              preventScrollReset
              to={{ search: `?pictureIndex=${pictureIndexAsNumber - 1}` }}
              aria-label="Forrige bilde"
              className="absolute top-0 left-0 bg-gray-200"
            >
              <LeftArrow />
            </IconButton>
            <CloudinaryImage
              imageUrl={selectedPicture.imageUrl}
              imageAlt={selectedPicture.imageAlt}
              showDescription
              showBackButton
              cloudName={cloudName}
            />
            <IconButton
              as={Link}
              to={{ search: `?pictureIndex=${pictureIndexAsNumber + 1}` }}
              preventScrollReset
              aria-label="Neste bilde"
              className="absolute top-0 right-0 bg-gray-200"
            >
              <RightArrow />
            </IconButton>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 items-center gap-2 md:grid-cols-6">
          {pictures.map((p, i) => (
            <Link
              key={p.imageUrl}
              to={{ search: `?pictureIndex=${i}` }}
              aria-label="Se bilde i større størrelse"
            >
              <CloudinaryImage
                imageUrl={p.imageUrl}
                imageAlt={p.imageAlt}
                cloudName={cloudName}
                imgProps={{
                  className:
                    "object-cover object-[50%_30%] overflow-hidden aspect-[5/6]",
                }}
              />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
