import { Typography } from "~/components/Typography";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Typography variant="h2">Heisann!</Typography>
      <Typography className="text-center">
        Du er litt tidlig ute. Her kommer snart informasjon om bryllupet til
        Lasse & Sonica.
      </Typography>
    </div>
  );
}
