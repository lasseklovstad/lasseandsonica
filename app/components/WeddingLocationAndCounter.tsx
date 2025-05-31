import { useTranslation } from "react-i18next";

import { useCountdown } from "~/hooks/useCountdown";

import { Typography } from "./Typography";

const startDate = new Date(2025, 9, 11, 16, 0);

export const WeddingLocationAndCounter = () => {
  const { i18n, t } = useTranslation("common");
  const [days, hours, minutes, seconds] = useCountdown(startDate);
  return (
    <>
      <Typography variant="h4" as="div">
        {startDate
          .toLocaleDateString(i18n.language, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
          .toUpperCase()}{" "}
        • OSLO
      </Typography>
      <Typography suppressHydrationWarning>
        {days} {t("days")}, {hours} {t("hours")}, {minutes} {t("minutes")},{" "}
        {seconds} {t("seconds")}
      </Typography>
    </>
  );
};
