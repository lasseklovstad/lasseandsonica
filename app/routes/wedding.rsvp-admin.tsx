import { useState, type ComponentPropsWithRef } from "react";
import { useTranslation } from "react-i18next";
import { href, redirect } from "react-router";

import { InputField } from "~/components/Input";
import { PageTitle } from "~/components/PageTitle";
import { getDatabase } from "~/database/database";
import { rsvps } from "~/database/schema";
import { getBackLink, getNextLink, useLinks } from "~/hooks/useLinks";
import { verifyUserIsLoggedIn } from "~/utils/siteSecret";

import type { Route } from "./+types/wedding.rsvp-admin";

export const meta: Route.MetaFunction = () => {
  return [{ title: "RSVP ADMIN - Lasse & Sonica" }];
};

export const loader = async ({ request, context }: Route.ActionArgs) => {
  const isLoggedIn = await verifyUserIsLoggedIn(request, context);
  if (isLoggedIn !== "admin") {
    return redirect(href("/wedding/home"));
  }
  const db = getDatabase(context);
  return { rsvpList: await db.select().from(rsvps) };
};

export default function RSVPAdmin({
  loaderData: { rsvpList },
}: Route.ComponentProps) {
  const { t, i18n } = useTranslation("rsvp");
  const [search, setSearch] = useState("");
  const links = useLinks();
  return (
    <div>
      <PageTitle
        title="RSVP Admin?"
        subtitle={["Oversikt over hvem som har svart"]}
        backLink={getBackLink("rsvp-admin", links)}
        nextLink={getNextLink("rsvp-admin", links)}
      />
      <main className="flex flex-col gap-2">
        <InputField
          className="w-fit"
          labelProps={{ children: "Søk" }}
          inputProps={{
            value: search,
            onChange: (e) => setSearch(e.target.value),
            placeholder: "Begynn å skriv...",
          }}
        />
        {rsvpList.length === 0 ? (
          <div>Ingen har svart enda!</div>
        ) : (
          <div className="w-full overflow-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <Th>{t("fullName")}</Th>
                  <Th>{t("fullNameGuest")}</Th>
                  <Th>{t("email")}</Th>
                  <Th>{t("attending")}</Th>
                  <Th>{t("foodPreferences")}</Th>
                  <Th>{t("comments")}</Th>
                  <Th>Dato</Th>
                </tr>
              </thead>
              <tbody>
                {rsvpList
                  .filter((rsvp) => {
                    if (!search) {
                      return true;
                    } else {
                      return (
                        rsvp.email.includes(search) ||
                        rsvp.foodPreferences.includes(search) ||
                        rsvp.comments.includes(search) ||
                        rsvp.fullNameGuest.includes(search) ||
                        rsvp.fullName.includes(search)
                      );
                    }
                  })
                  .map((rsvp) => (
                    <tr key={rsvp.id}>
                      <Td>{rsvp.fullName}</Td>
                      <Td>{rsvp.fullNameGuest}</Td>
                      <Td>{rsvp.email}</Td>
                      <Td>{rsvp.attending === "yes" ? "Ja" : "Nei"}</Td>
                      <Td>{rsvp.foodPreferences}</Td>
                      <Td>{rsvp.comments}</Td>
                      <Td>
                        {rsvp.createdAt.toLocaleDateString(i18n.language)}
                      </Td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}

const Th = (props: ComponentPropsWithRef<"th">) => (
  <th
    {...props}
    className="border-b-2 bg-red-50 p-2 text-left text-sm whitespace-nowrap"
  />
);
const Td = (props: ComponentPropsWithRef<"td">) => (
  <td {...props} className="border-b p-2 text-left" />
);
