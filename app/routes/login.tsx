import { getFormProps, getInputProps, useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod/v4";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import type { LoaderFunction } from "react-router";
import { Form, href, redirect, useSearchParams } from "react-router";
import { z } from "zod/v4";

import { Button } from "~/components/Button";
import { InputField } from "~/components/Input";
import { PageLayout } from "~/components/PageLayout";
import { Typography } from "~/components/Typography";
import { siteSecretCookie } from "~/cookies";
import { getInstance } from "~/utils/i18n.server";
import { validateSecret, verifyUserIsLoggedIn } from "~/utils/siteSecret";

import type { Route } from "./+types/login";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Logg inn - Lasse & Sonica" }];
};

export const action = async ({ request, context }: Route.ActionArgs) => {
  const i18next = getInstance(context);
  const formData = await request.formData();
  const secret = formData.get("secret") as string;

  const submission = parseWithZod(formData, {
    schema: createLoginSchema().check((ctx) => {
      const isValidSecret = validateSecret(ctx.value.secret, context);
      if (!isValidSecret) {
        ctx.issues.push({
          code: "custom",
          input: ctx.value,
          message: i18next.t("login:errors.invalidPassword"),
          path: ["secret"],
        });
      }
    }),
  });

  if (submission.status === "success") {
    return redirect(href("/wedding/home"), {
      headers: {
        "Set-Cookie": await siteSecretCookie.serialize(secret, {
          expires: new Date(Date.now() + 604_800_000 * 4),
        }),
      },
    });
  }

  return { result: submission.reply() };
};

const createLoginSchema = () =>
  z.object({
    secret: z.string(),
  });

export const loader: LoaderFunction = async ({ request, context }) => {
  const isLoggedIn = await verifyUserIsLoggedIn(request, context);
  if (isLoggedIn) {
    throw redirect("/");
  }
  return {};
};

export default function Login({ actionData }: Route.ComponentProps) {
  const { t } = useTranslation("login");
  const formRef = useRef<HTMLFormElement>(null);
  const [searchParams] = useSearchParams();
  const defaultSecret = searchParams.get("secret");
  const [form, { secret }] = useForm({
    // Sync the result of last submission
    lastResult: actionData?.result,
    defaultValue: { secret: defaultSecret },
    // Reuse the validation logic on the client
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: createLoginSchema() });
    },
  });

  useEffect(() => {
    if (defaultSecret) {
      formRef.current?.requestSubmit();
    }
  }, [defaultSecret]);

  return (
    <PageLayout
      showNavigation={false}
      showLogout={false}
      headerContent={
        <Typography variant="h3" as="h2" className="font-normal">
          {t("title")}
        </Typography>
      }
    >
      <div className="flex flex-col items-center">
        <Form
          {...getFormProps(form)}
          method="POST"
          className="my-4 flex flex-col gap-4"
          ref={formRef}
        >
          <div>
            <InputField
              labelProps={{ children: t("passwordLabel") }}
              inputProps={{
                ...getInputProps(secret, { type: "password" }),
                placeholder: t("passwordPlaceholder"),
              }}
              errors={secret.errors}
            />
          </div>
          <Button type="submit">{t("login")}</Button>
        </Form>
      </div>
    </PageLayout>
  );
}
