import { CloudinaryImage } from "./CloudinaryImage";
import { Typography } from "./Typography";

export const RoundedImage = ({
  name,
  imageUrl,
  role,
}: {
  name: string;
  imageUrl: string;
  role: string;
}) => {
  return (
    <div className="w-[200px] text-center">
      <CloudinaryImage
        imageAlt={name}
        imageUrl={imageUrl}
        className="shadow-md rounded-[50%] overflow-auto"
      />
      <Typography className="font-semibold">{name}</Typography>
      <Typography
        as="div"
        variant="h3"
        className="text-center font-cursive font-thin"
      >
        {role}
      </Typography>
    </div>
  );
};
