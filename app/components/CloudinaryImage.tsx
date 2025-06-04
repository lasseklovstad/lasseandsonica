import type { TransformerOption } from "@cld-apis/types";
import { buildImageUrl } from "cloudinary-build-url";
import type { ComponentPropsWithRef } from "react";
import { Link } from "react-router";

import { useWeddingLoaderData } from "~/hooks/useWeddingLoaderData";

import { Button } from "./Button";
import { Typography } from "./Typography";

export type CloudinaryImageProps = {
  imageUrl: string;
  className?: string;
  imageAlt: string;
  transformations?: TransformerOption;
  showDescription?: boolean;
  showBackButton?: boolean;
  cloudName?: string;
  imgProps?: ComponentPropsWithRef<"img">;
};

export const CloudinaryImage = ({
  imageUrl,
  className,
  imageAlt,
  transformations,
  showDescription,
  showBackButton,
  cloudName,
  imgProps,
}: CloudinaryImageProps) => {
  const { mainCloudName } = useWeddingLoaderData();
  return (
    <div className={className}>
      <img
        title={imageAlt}
        alt={imageAlt}
        src={getCloudinaryImageUrl({
          relativeUrl: imageUrl,
          size: 1100,
          transformations,
          cloudName: cloudName || mainCloudName,
        })}
        srcSet={getSrcSet({
          relativeUrl: imageUrl,
          sizes: [280, 560, 840, 1100, 1650, 2500, 2100, 3100],
          transformations,
          cloudName: cloudName || mainCloudName,
        })}
        sizes="(max-width:768px) 95vw, (min-width:767px) and (max-width:1024px) 67vw, 800px"
        {...imgProps}
      />
      {showDescription && (
        <Typography variant="body-small" className="my-4 text-center">
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
  cloudName,
}: {
  relativeUrl: string;
  sizes: number[];
  transformations?: TransformerOption;
  cloudName: string;
}) {
  return sizes
    .map((size) =>
      getCloudinaryImageUrl({ size, relativeUrl, transformations, cloudName }),
    )
    .join(", ");
}

function getCloudinaryImageUrl({
  relativeUrl,
  size,
  transformations,
  cloudName,
}: {
  relativeUrl: string;
  size: number;
  transformations?: TransformerOption;
  cloudName: string;
}) {
  return `${buildImageUrl(relativeUrl, {
    cloud: { cloudName },
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
