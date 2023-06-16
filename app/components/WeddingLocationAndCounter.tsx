import { useCountdown } from "~/hooks/useCountdown";
import { Typography } from "./Typography";

const startDate = new Date(2023, 7, 11, 12, 0);

export const WeddingLocationAndCounter = () => {
  const [days, hours, minutes, seconds] = useCountdown(startDate);
  return (
    <>
      <Typography variant="h4" as="div">
        {startDate
          .toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
          .toUpperCase()}{" "}
        • ASKER / OSLO
      </Typography>
      <Typography>
        {days} dager, {hours} timer, {minutes} minutter, {seconds} sekunder
      </Typography>
    </>
  );
};
