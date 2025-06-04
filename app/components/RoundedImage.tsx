import { cn } from "~/utils/utils";

import { CloudinaryImage } from "./CloudinaryImage";
import { Typography } from "./Typography";

export const RoundedImage = ({
  name,
  imageUrl,
  weddingRole,
  size = "medium",
}: {
  name: string;
  imageUrl: string;
  weddingRole: string;
  size?: "small" | "medium";
}) => {
  return (
    <div className="flex flex-col items-center p-2">
      <CloudinaryImage
        imageAlt={name}
        imageUrl={imageUrl}
        className={cn(
          "overflow-auto rounded-[50%] shadow-md",
          size === "small" && "w-[120px]",
          size === "medium" && "w-[200px]",
        )}
      />
      <Typography className="font-semibold">{name}</Typography>
      <Typography
        as="div"
        variant="h3"
        className="font-cursive text-center font-thin"
      >
        {weddingRole}
      </Typography>
    </div>
  );
};
