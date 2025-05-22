import { useTranslation } from "react-i18next";
import type { LoaderFunction } from "react-router";
import { Form, href, redirect, useActionData } from "react-router";

import { Button } from "~/components/Button";
import { InputField } from "~/components/Input";
import { PageLayout } from "~/components/PageLayout";
import { Typography } from "~/components/Typography";
import { siteSecretCookie } from "~/cookies";
import { validateSecret, verifyUserIsLoggedIn } from "~/utils/siteSecret";

import type { Route } from "./+types/login";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Logg inn - Lasse & Sonica" }];
};

export const action = async ({ request, context }: Route.ActionArgs) => {
  const formData = await request.formData();
  const secret = formData.get("secret") as string;

  if (validateSecret(secret, context)) {
    return redirect(href("/wedding/home"), {
      headers: {
        "Set-Cookie": await siteSecretCookie.serialize(secret, {
          expires: new Date(Date.now() + 604_800_000 * 4),
        }),
      },
    });
  }

  return { error: "Feil passord" };
};

export const loader: LoaderFunction = async ({ request, context }) => {
  const isLoggedIn = await verifyUserIsLoggedIn(request, context);
  if (isLoggedIn) {
    throw redirect("/");
  }
  return {};
};

export default function Login() {
  const actionData = useActionData<typeof action>();
  const { t } = useTranslation("login");
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
        <Form method="POST" className="my-4 flex flex-col gap-4">
          <div>
            <InputField
              labelProps={{ children: t("passwordLabel") }}
              inputProps={{
                name: "secret",
                type: "password",
                placeholder: t("passwordPlaceholder"),
              }}
              errors={actionData?.error ? [actionData.error] : undefined}
            />
          </div>
          <Button type="submit">{t("login")}</Button>
        </Form>
      </div>
    </PageLayout>
  );
}
