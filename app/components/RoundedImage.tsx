import { CloudinaryImage } from "./CloudinaryImage";
import { Typography } from "./Typography";

export const RoundedImage = ({
  name,
  imageUrl,
  weddingRole,
}: {
  name: string;
  imageUrl: string;
  weddingRole: string;
}) => {
  return (
    <div className="flex w-[200px] flex-col items-center p-2">
      <CloudinaryImage
        imageAlt={name}
        imageUrl={imageUrl}
        className="overflow-auto rounded-[50%] shadow-md"
      />
      <Typography className="font-semibold">{name}</Typography>
      <Typography
        as="div"
        variant="h3"
        className="max-w-[140px] text-center font-cursive font-thin"
      >
        {weddingRole}
      </Typography>
    </div>
  );
};
