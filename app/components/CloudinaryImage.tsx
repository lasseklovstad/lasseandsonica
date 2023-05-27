import type { TransformerOption } from "@cld-apis/types";
import { buildImageUrl } from "cloudinary-build-url";

export type CloudinaryImageProps = {
  imageUrl: string;
  className?: string;
  imageAlt: string;
  transformations?: TransformerOption;
};

export const CloudinaryImage = ({
  imageUrl,
  className,
  imageAlt,
  transformations,
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
