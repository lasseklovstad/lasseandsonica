import type { TransformerOption } from "@cld-apis/types";
import { buildImageUrl } from "cloudinary-build-url";

type Props = {
  imageUrl: string;
  className?: string;
  aspectRatio: { w: number; h: number };
  imageAlt: string;
  transformations?: TransformerOption;
};

export const CloudinaryImage = ({
  imageUrl,
  className,
  aspectRatio,
  imageAlt,
  transformations,
}: Props) => {
  const gcd = getGCD(aspectRatio.h, aspectRatio.w);
  return (
    <div className={className}>
      <div
        className={`aspect-h-${aspectRatio.h / gcd} aspect-w-${
          aspectRatio.w / gcd
        }`}
      >
        <img
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

function getGCD(a: number, b: number): number {
  if (!b) {
    return a;
  }
  return getGCD(b, a % b);
}
