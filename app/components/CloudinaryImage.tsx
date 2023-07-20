import type { TransformerOption } from "@cld-apis/types";
import { buildImageUrl } from "cloudinary-build-url";
import { Typography } from "./Typography";
import { Link } from "@remix-run/react";
import { Button } from "./Button";

export type CloudinaryImageProps = {
  imageUrl: string;
  className?: string;
  imageAlt: string;
  transformations?: TransformerOption;
  showDescription?: boolean;
  showBackButton?: boolean;
};

export const CloudinaryImage = ({
  imageUrl,
  className,
  imageAlt,
  transformations,
  showDescription,
  showBackButton,
}: CloudinaryImageProps) => {
  return (
    <div className={className}>
      <img
        title={imageAlt}
        alt={imageAlt}
        src={getCloudinaryImageUrl({
          relativeUrl: imageUrl,
          size: 1100,
          transformations,
        })}
        srcSet={getSrcSet({
          relativeUrl: imageUrl,
          sizes: [280, 560, 840, 1100, 1650, 2500, 2100, 3100],
          transformations,
        })}
        sizes="(max-width:768px) 95vw, (min-width:767px) and (max-width:1024px) 67vw, 800px"
      />
      {showDescription && (
        <Typography variant="body-small" className="text-center my-4">
          {imageAlt}
        </Typography>
      )}
      {showBackButton && (
        <div className="flex justify-center">
          <Button as={Link} to={{ search: "" }}>
            Tilbake til galleri
          </Button>
        </div>
      )}
    </div>
  );
};

function getSrcSet({
  relativeUrl,
  sizes,
  transformations,
}: {
  relativeUrl: string;
  sizes: number[];
  transformations?: TransformerOption;
}) {
  return sizes
    .map((size) =>
      getCloudinaryImageUrl({ size, relativeUrl, transformations })
    )
    .join(", ");
}

function getCloudinaryImageUrl({
  relativeUrl,
  size,
  transformations,
}: {
  relativeUrl: string;
  size: number;
  transformations?: TransformerOption;
}) {
  return `${buildImageUrl(relativeUrl, {
    cloud: { cloudName: "dsiqlprku" },
    transformations: {
      quality: "auto",
      ...transformations,
      resize: {
        width: size,
        ...transformations?.resize,
      },
    },
  })} ${size}w`;
}
