import { useCountdown } from "~/hooks/useCountdown";
import { Typography } from "./Typography";
import { SideBar } from "./SideBar";

const startDate = new Date(2023, 7, 11, 12, 30);

export const Header = ({ showSideBar }: { showSideBar: boolean }) => {
  const [days, hours, minutes, seconds] = useCountdown(startDate);
  return (
    <header
      className={`flex flex-col items-center w-full bg-red-50 ${
        showSideBar ? "md:pt-4" : "pt-4"
      }`}
    >
      {showSideBar && <SideBar />}
      <div className="flex flex-col items-center w-full gap-2 mb-4">
        <Typography
          variant="h1"
          className="font-cursive font-normal text-6xl md:text-8xl"
        >
          Sonica & Lasse
        </Typography>
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
      </div>
    </header>
  );
};
