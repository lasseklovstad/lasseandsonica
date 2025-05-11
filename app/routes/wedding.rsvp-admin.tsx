import type { ComponentPropsWithRef } from "react";
import { href, redirect } from "react-router";

import { PageTitle } from "~/components/PageTitle";
import { getDatabase } from "~/database/database";
import { rsvps } from "~/database/schema";
import { verifyUserIsLoggedIn } from "~/utils/siteSecret";

import type { Route } from "./+types/wedding.rsvp-admin";

export const meta: Route.MetaFunction = () => {
  return [{ title: "RSVP ADMIN - Lasse & Sonica" }];
};

export const loader = async ({ request, context }: Route.ActionArgs) => {
  const isLoggedIn = await verifyUserIsLoggedIn(request, context);
  if (isLoggedIn !== "admin") {
    redirect(href("/wedding/home"));
  }
  const db = getDatabase(context);
  return { rsvpList: await db.select().from(rsvps) };
};

export default function RSVPAdmin({
  loaderData: { rsvpList },
}: Route.ComponentProps) {
  return (
    <div>
      <div className="hidden md:block">
        <PageTitle
          title="RSVP Admin?"
          subtitle={["Oversikt over hvem som har svart"]}
        />
      </div>
      {rsvpList.length === 0 ? (
        <div>Ingen har svart enda!</div>
      ) : (
        <table className="w-full">
          <thead>
            <tr>
              <Th>Fullt navn</Th>
              <Th>Fullt navn gjest</Th>
              <Th>E-post</Th>
              <Th>Kommer du?</Th>
              <Th>Matpreferenaser</Th>
              <Th>Kommentarer</Th>
            </tr>
          </thead>
          <tbody>
            {rsvpList.map((rsvp) => (
              <tr key={rsvp.id}>
                <Td>{rsvp.fullName}</Td>
                <Td>{rsvp.fullNameGuest}</Td>
                <Td>{rsvp.email}</Td>
                <Td>{rsvp.attending === "yes" ? "Ja" : "Nei"}</Td>
                <Td>{rsvp.foodPreferences}</Td>
                <Td>{rsvp.comments}</Td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const Th = (props: ComponentPropsWithRef<"th">) => (
  <th {...props} className="border-b-2 bg-red-50 p-2 text-left" />
);
const Td = (props: ComponentPropsWithRef<"td">) => (
  <td {...props} className="border-b p-2 text-left" />
);
