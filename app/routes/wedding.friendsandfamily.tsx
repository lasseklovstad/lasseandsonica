import { Outlet } from "@remix-run/react";
import { PageTitle } from "~/components/PageTitle";
import { RoundedImageLink } from "~/components/RoundedImageLink";
import { routes } from "~/types/routes";

export default function FriendsAndFamily() {
  return (
    <div>
      <PageTitle
        title="Venner og familie"
        nextLink={{
          to: `../${routes.wedding.rsvp}`,
          name: `RSVP`,
        }}
        backLink={{
          to: `../${routes.wedding.program}`,
          name: `Program`,
        }}
        subtitle={["Trykk på bildene for å oppdage mer."]}
      />
      <div className="flex gap-4 md:gap-16 mx-4 justify-center items-center">
        <RoundedImageLink
          title="Sonica"
          imageUrl="Bryllup/sonica_squar_tmyspn.jpg"
          to="sonica"
          role="Brud"
        />
        <RoundedImageLink
          title="Lasse"
          imageUrl="Bryllup/lasse_squar_nb1kto.jpg"
          to="lasse"
          role="Brudgom"
        />
      </div>
      <Outlet />
    </div>
  );
}
