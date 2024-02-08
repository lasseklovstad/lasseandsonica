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
    <div className="w-[200px] p-2 flex flex-col items-center">
      <CloudinaryImage
        imageAlt={name}
        imageUrl={imageUrl}
        className="shadow-md rounded-[50%] overflow-auto"
      />
      <Typography className="font-semibold">{name}</Typography>
      <Typography
        as="div"
        variant="h3"
        className="text-center font-cursive font-thin max-w-[140px]"
      >
        {weddingRole}
      </Typography>
    </div>
  );
};
