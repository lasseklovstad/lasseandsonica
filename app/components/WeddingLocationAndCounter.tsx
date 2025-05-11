import { useCountdown } from "~/hooks/useCountdown";

import { Typography } from "./Typography";

const startDate = new Date(2025, 9, 11, 16, 0);

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
        • OSLO
      </Typography>
      <Typography suppressHydrationWarning>
        {days} dager, {hours} timer, {minutes} minutter, {seconds} sekunder
      </Typography>
    </>
  );
};
