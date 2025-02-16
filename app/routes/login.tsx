import type { ActionFunctionArgs, LoaderFunction } from "react-router";
import { Form, useActionData, redirect } from "react-router";
import { Button } from "~/components/Button";
import { Input } from "~/components/Input";
import { PageLayout } from "~/components/PageLayout";
import { Typography } from "~/components/Typography";
import { siteSecretCookie } from "~/cookies";
import { routes } from "~/types/routes";
import { validateSecret, verifyUserIsLoggedIn } from "~/utils/siteSecret";

export const action = async ({ request, context }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const secret = formData.get("secret") as string;

  if (validateSecret(secret, context)) {
    return redirect(`/${routes.wedding.root}/${routes.wedding.home}`, {
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
  return (
    <PageLayout
      showNavigation={false}
      showLogout={false}
      headerContent={
        <Typography variant="h3" as="h2" className="font-normal">
          Velkommen
        </Typography>
      }
    >
      <div className="flex flex-col items-center">
        <Form method="POST" className="my-4 flex gap-4 flex-col">
          <div>
            <Input
              label="Passord"
              name="secret"
              type="password"
              placeholder="Spør Lasse & Sonica"
            />

            {actionData?.error && (
              <Typography className="text-red-600">
                {actionData.error}
              </Typography>
            )}
          </div>
          <Button type="submit">Logg inn</Button>
        </Form>
      </div>
    </PageLayout>
  );
}
