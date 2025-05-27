import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { data, Form, href, useNavigation } from "react-router";
import { Resend } from "resend";
import { z } from "zod";

import RSVPEmail from "emails/rsvp-email";
import { Button } from "~/components/Button";
import { InputField } from "~/components/Input";
import { PageTitle } from "~/components/PageTitle";
import { Typography } from "~/components/Typography";
import { getDatabase } from "~/database/database";
import { rsvps } from "~/database/schema";
import { useWeddingLoaderData } from "~/hooks/useWeddingLoaderData";
import { CloudflareContext } from "~/middleware/bindings";
import { verifyUserIsLoggedIn } from "~/utils/siteSecret";

import type { Route } from "./+types/wedding.rsvp";

const nameSchema = z
  .string({ required_error: "Påkrevd" })
  .trim()
  .min(3, { message: "Navnet må være lenger enn 3 bokstaver" });
const schema = z.object({
  fullName: nameSchema,
  email: z
    .string({ required_error: "Påkrevd" })
    .trim()
    .email({ message: "E-post er ikke gyldig." }),
  fullNameGuest: nameSchema.optional(),
  attending: z.enum(["yes", "no"], { required_error: "Påkrevd" }),
  foodPreferences: z.string().trim().optional(),
  comments: z.string().trim().optional(),
});

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
  const submission = parseWithZod(formData, { schema });

  if (submission.status !== "success") {
    return data({ status: submission.status, result: submission.reply() });
  }

  const {
    attending,
    email,
    fullName,
    comments,
    foodPreferences,
    fullNameGuest,
  } = submission.value;

  const [rsvp] = await db
    .insert(rsvps)
    .values({
      attending,
      email,
      fullName,
      comments: comments ?? "",
      foodPreferences: foodPreferences ?? "",
      fullNameGuest: fullNameGuest ?? "",
    })
    .returning();

  const resendKey = context.get(CloudflareContext).env.RESEND_API_KEY;
  if (resendKey) {
    const resend = new Resend(resendKey);

    await resend.emails.send({
      from: "Sonica & Lasse <hello@lasseandsonica.com>",
      to: email,
      subject: "Bekreftelse RSVP - Bryllup",
      react: <RSVPEmail rsvp={rsvp} />,
    });
    console.warn("Skip sending mail");
  }

  return data({ status: submission.status, result: submission.reply() });
};

export default function RSVP({ actionData }: Route.ComponentProps) {
  const { accessLevel } = useWeddingLoaderData();
  const navigation = useNavigation();
  const [
    form,
    { attending, comments, email, foodPreferences, fullName, fullNameGuest },
  ] = useForm({
    // Sync the result of last submission
    lastResult: actionData?.result,

    // Reuse the validation logic on the client
    onValidate({ formData }) {
      return parseWithZod(formData, { schema });
    },
    shouldRevalidate: "onBlur",
    shouldValidate: "onSubmit",
  });
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
      <main className="px-2">
        {hasSubmitted ? (
          <Typography variant="body" className="text-center">
            Takk for ditt svar, du får en bekreftelse på epost.
          </Typography>
        ) : (
          <Form
            {...getFormProps(form)}
            method="POST"
            className="mb-20 flex w-full justify-center"
          >
            <div className="flex w-full max-w-[500px] flex-col gap-4">
              <InputField
                labelProps={{ children: "Fullt navn" }}
                inputProps={{
                  ...getInputProps(fullName, { type: "text" }),
                  placeholder: "Ola Nordman",
                }}
                errors={fullName.errors}
              />

              <InputField
                labelProps={{ children: "E-post" }}
                inputProps={{
                  ...getInputProps(email, { type: "email" }),
                  placeholder: "navn@eksempel.no",
                }}
                errors={email.errors}
              />
              {accessLevel === "fullAccess" ? (
                <InputField
                  labelProps={{ children: "Fullt navn partner" }}
                  inputProps={{
                    ...getInputProps(fullNameGuest, { type: "text" }),
                    placeholder: "Kari Nordman",
                  }}
                  errors={fullNameGuest.errors}
                />
              ) : null}
              <fieldset className="flex flex-col gap-2">
                <legend className="mb-2 font-semibold">Kan du komme?</legend>
                <div className="flex gap-2">
                  <label className="flex items-center gap-2 hover:cursor-pointer">
                    <input
                      className="size-6"
                      {...getInputProps(attending, {
                        type: "radio",
                        value: "yes",
                      })}
                    />
                    Ja
                  </label>
                  <label className="flex items-center gap-2 hover:cursor-pointer">
                    <input
                      className="size-6"
                      {...getInputProps(attending, {
                        type: "radio",
                        value: "no",
                      })}
                    />
                    Nei
                  </label>
                </div>
                <div
                  id={attending.errorId}
                  className={"text-base text-red-600"}
                >
                  {attending.errors ? attending.errors[0] : null}
                </div>
              </fieldset>
              <InputField
                labelProps={{ children: "Matpreferanser" }}
                inputProps={{
                  ...getInputProps(foodPreferences, { type: "text" }),
                  placeholder: "Nøtter",
                }}
                errors={foodPreferences.errors}
              />
              <InputField
                labelProps={{ children: "Kommentarer" }}
                inputProps={{
                  ...getInputProps(comments, { type: "text" }),
                  placeholder: "Jeg gleder meg!!!",
                }}
                errors={comments.errors}
              />
              <Button
                type="submit"
                pending={
                  navigation.state !== "idle" &&
                  navigation.formMethod === "POST"
                }
              >
                Send inn
              </Button>
            </div>
          </Form>
        )}
      </main>
    </div>
  );
}
