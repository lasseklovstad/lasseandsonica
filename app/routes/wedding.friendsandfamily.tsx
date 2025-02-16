import { Outlet } from "react-router";

import { PageTitle } from "~/components/PageTitle";
import { RoundedImageLink } from "~/components/RoundedImageLink";
import { routes } from "~/types/routes";

import type { Route } from "./+types/wedding.friendsandfamily";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Venner og familie - Lasse & Sonica" }];
};

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
      <div className="mx-4 flex items-center justify-center gap-4 md:gap-16">
        <RoundedImageLink
          title="Sonica"
          imageUrl="Bryllup/sonica_squar_tmyspn.jpg"
          to="sonica"
          weedingRole="Brud"
        />
        <RoundedImageLink
          title="Lasse"
          imageUrl="Bryllup/lasse_squar_nb1kto.jpg"
          to="lasse"
          weedingRole="Brudgom"
        />
      </div>
      <Outlet />
    </div>
  );
}
