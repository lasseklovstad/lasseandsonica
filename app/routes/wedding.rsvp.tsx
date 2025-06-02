import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod/v4";
import { Trans, useTranslation } from "react-i18next";
import { data, Form, href, useNavigation } from "react-router";
import { Resend } from "resend";
import { z } from "zod/v4";

import RSVPEmail from "emails/rsvp-email";
import { Button } from "~/components/Button";
import { InputField } from "~/components/Input";
import { PageTitle } from "~/components/PageTitle";
import { Typography } from "~/components/Typography";
import { getDatabase } from "~/database/database";
import { rsvps } from "~/database/schema";
import { useWeddingLoaderData } from "~/hooks/useWeddingLoaderData";
import { CloudflareContext } from "~/middleware/bindings";
import { getInstance } from "~/utils/i18n.server";
import { verifyUserIsLoggedIn } from "~/utils/siteSecret";

import type { Route } from "./+types/wedding.rsvp";

const createRsvpSchema = ({
  requiredMessage,
  invalidEmailMessage,
  minNameMessage,
}: {
  requiredMessage: string;
  minNameMessage: string;
  invalidEmailMessage: string;
}) => {
  const nameSchema = z
    .string({ error: requiredMessage })
    .trim()
    .min(3, { message: minNameMessage });
  const schema = z.object({
    fullName: nameSchema,
    email: z.email({
      error: (issue) => {
        return issue.input ? invalidEmailMessage : requiredMessage;
      },
    }),
    fullNameGuest: nameSchema.optional(),
    attending: z.enum(["yes", "no"], { error: requiredMessage }),
    foodPreferences: z.string().trim().optional(),
    comments: z.string().trim().optional(),
  });
  return schema;
};

export const meta: Route.MetaFunction = () => {
  return [{ title: "RSVP - Lasse & Sonica" }];
};

export const action = async ({ request, context }: Route.ActionArgs) => {
  const i18next = getInstance(context);
  const formData = await request.formData();
  const isLoggedIn = await verifyUserIsLoggedIn(request, context);
  if (!isLoggedIn) {
    throw new Response("Ingen tilgang", { status: 403 });
  }
  const db = getDatabase(context);
  const submission = parseWithZod(formData, {
    schema: createRsvpSchema({
      invalidEmailMessage: i18next.t("rsvp:errors.invalidEmailMessage"),
      minNameMessage: i18next.t("rsvp:errors.minNameMessage"),
      requiredMessage: i18next.t("rsvp:errors.requiredMessage"),
    }),
  });

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
      subject: i18next.t("email:subject"),
      react: <RSVPEmail rsvp={rsvp} i18next={i18next} />,
    });
  } else {
    console.warn("Skip sending mail");
  }

  return data({ status: submission.status, result: submission.reply() });
};

export default function RSVP({ actionData }: Route.ComponentProps) {
  const { t } = useTranslation("rsvp");
  const { t: t_common } = useTranslation("common");
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
      return parseWithZod(formData, {
        schema: createRsvpSchema({
          invalidEmailMessage: t("errors.invalidEmailMessage"),
          minNameMessage: t("errors.minNameMessage"),
          requiredMessage: t("errors.requiredMessage"),
        }),
      });
    },
    shouldRevalidate: "onBlur",
    shouldValidate: "onSubmit",
  });
  const hasSubmitted = actionData?.status === "success";

  const subtitles = [
    <Trans key={1} t={t} i18nKey={"subtitle1"} />,
    <Trans key={1} t={t} i18nKey={"subtitle2"} />,
  ];

  return (
    <div>
      <div className="hidden md:block">
        <PageTitle title={t("title")} subtitle={subtitles} />
      </div>
      <div className="md:hidden">
        <PageTitle
          nextLink={{
            to: href("/wedding/qa"),
            name: t_common("qa"),
          }}
          backLink={{
            to: href("/wedding/home"),
            name: t_common("home"),
          }}
          title={t("title")}
          subtitle={[
            <>
              <Trans t={t} i18nKey={"subtitle1"} />{" "}
              <Trans t={t} i18nKey={"subtitle2"} />
            </>,
          ]}
        />
      </div>
      <main className="px-2">
        {hasSubmitted ? (
          <Typography variant="h2" className="my-8 text-center">
            {t("successText")}
          </Typography>
        ) : (
          <Form
            {...getFormProps(form)}
            method="POST"
            className="mb-20 flex w-full justify-center"
          >
            <div className="flex w-full max-w-[500px] flex-col gap-4">
              <InputField
                labelProps={{ children: t("fullName") }}
                inputProps={{
                  ...getInputProps(fullName, { type: "text" }),
                }}
                errors={fullName.errors}
              />

              <InputField
                labelProps={{ children: t("email") }}
                inputProps={{
                  ...getInputProps(email, { type: "email" }),
                }}
                errors={email.errors}
              />
              {accessLevel === "fullAccess" ? (
                <InputField
                  labelProps={{ children: t("fullNameGuest") }}
                  inputProps={{
                    ...getInputProps(fullNameGuest, { type: "text" }),
                  }}
                  errors={fullNameGuest.errors}
                />
              ) : null}
              <fieldset className="flex flex-col gap-2">
                <legend className="mb-2 font-semibold">{t("attending")}</legend>
                <div className="flex gap-2">
                  <label className="flex items-center gap-2 hover:cursor-pointer">
                    <input
                      className="size-6"
                      {...getInputProps(attending, {
                        type: "radio",
                        value: "yes",
                      })}
                    />
                    {t("yes")}
                  </label>
                  <label className="flex items-center gap-2 hover:cursor-pointer">
                    <input
                      className="size-6"
                      {...getInputProps(attending, {
                        type: "radio",
                        value: "no",
                      })}
                    />
                    {t("no")}
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
                labelProps={{ children: t("foodPreferences") }}
                inputProps={{
                  ...getInputProps(foodPreferences, { type: "text" }),
                }}
                errors={foodPreferences.errors}
              />
              <InputField
                labelProps={{ children: t("comments") }}
                inputProps={{
                  ...getInputProps(comments, { type: "text" }),
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
                {t("submit")}
              </Button>
            </div>
          </Form>
        )}
      </main>
    </div>
  );
}
