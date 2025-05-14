import { Form, href } from "react-router";
import { Resend } from "resend";

import { Button } from "~/components/Button";
import { Input } from "~/components/Input";
import { PageTitle } from "~/components/PageTitle";
import { getDatabase } from "~/database/database";
import { rsvps } from "~/database/schema";
import { useWeddingLoaderData } from "~/hooks/useWeddingLoaderData";
import { verifyUserIsLoggedIn } from "~/utils/siteSecret";

import type { Route } from "./+types/wedding.rsvp";

export const meta: Route.MetaFunction = () => {
  return [{ title: "RSVP - Lasse & Sonica" }];
};

export const action = async ({ request, context }: Route.ActionArgs) => {
  const formData = await request.formData();
  const isLoggedIn = await verifyUserIsLoggedIn(request, context);
  if (!isLoggedIn) {
    throw new Response("Ingen tilgang", { status: 403 });
  }
  const db = getDatabase(context);
  // TODO: Validate
  const fullName = String(formData.get("fullName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const fullNameGuest = String(formData.get("fullNameGuest") ?? "").trim();
  const attending = String(formData.get("attending") ?? "").trim();
  const foodPreferences = String(formData.get("foodPreferences") ?? "").trim();
  const comments = String(formData.get("comments") ?? "").trim();

  await db.insert(rsvps).values({
    fullName,
    attending: attending === "yes" ? "yes" : "no",
    comments,
    email,
    foodPreferences,
    fullNameGuest,
  });

  const resend = new Resend(context.cloudflare.env.RESEND_API_KEY);

  await resend.emails.send({
    from: "Sonica & Lasse <hello@lasseandsonica.com>",
    to: email,
    subject: "Bekreftelse RSVP - Bryllup",
    html:
      attending === "yes"
        ? "<p>Du svarte at du kunne komme til bryllupet</p>"
        : "<p>Du svarte at du ikke kunne komme til bryllupet</p>",
  });

  return { status: "success" };
};

export default function RSVP({ actionData }: Route.ComponentProps) {
  const { accessLevel } = useWeddingLoaderData();
  const hasSubmitted = actionData?.status === "success";

  const subtitles = [
    "Vi håper du har mulighet til å feire denne dagen med oss!",
    "Vennligst svar ved å sende inn skjema under innen 1. september.",
  ];

  return (
    <div>
      <div className="hidden md:block">
        <PageTitle title="Kommer du?" subtitle={subtitles} />
      </div>
      <div className="md:hidden">
        <PageTitle
          nextLink={{
            to: href("/wedding/pictures"),
            name: "Bilder",
          }}
          backLink={{
            to: href("/wedding/friendsandfamily"),
            name: "Venner og familie",
          }}
          title="Kommer du?"
          subtitle={subtitles}
        />
      </div>
      {hasSubmitted ? (
        <div>Tusen takk, du får en bekreftelse på epost</div>
      ) : (
        <Form method="POST" className="mb-20 flex w-full justify-center">
          <div className="flex w-full max-w-[500px] flex-col gap-4">
            <Input
              placeholder="Ola Nordman"
              label="Fullt navn"
              name="fullName"
              type="text"
            />

            <Input
              placeholder="navn@eksempel.no"
              label="E-post"
              name="email"
              type="email"
            />
            {accessLevel === "fullAccess" ? (
              <Input
                placeholder="Kari Nordman"
                label="Fullt navn partner"
                name="fullNameGuest"
                type="text"
              />
            ) : null}
            <fieldset className="flex gap-2">
              <legend className="mb-2 font-semibold">Kan du komme?</legend>
              <label className="flex items-center gap-2 hover:cursor-pointer">
                <input
                  type="radio"
                  name="attending"
                  value="yes"
                  className="size-6"
                />
                Ja
              </label>
              <label className="flex items-center gap-2 hover:cursor-pointer">
                <input
                  type="radio"
                  name="attending"
                  value="no"
                  className="size-6"
                />
                Nei
              </label>
            </fieldset>
            <Input
              placeholder="Nøtter"
              label="Matpreferanser"
              name="foodPreferences"
              type="text"
            />
            <Input
              placeholder="Jeg gleder meg!!!"
              label="Kommentarer"
              name="comments"
              type="text"
            />

            <Button type="submit">Send inn</Button>
          </div>
        </Form>
      )}
    </div>
  );
}
