import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { PageLayout } from "~/components/PageLayout";
import { Typography } from "~/components/Typography";
import { siteSecretCookie } from "~/cookies";
import { routes } from "~/types/routes";
import { validateSecret, verifyUserIsLoggedIn } from "~/utils/siteSecret";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const secret = formData.get("secret") as string;

  if (validateSecret(secret)) {
    return redirect(`/${routes.wedding.root}/${routes.wedding.home}`, {
      headers: {
        "Set-Cookie": await siteSecretCookie.serialize(secret),
      },
    });
  }

  return json({ error: "Feil passord" });
};

export const loader: LoaderFunction = async ({ request }) => {
  const isLoggedIn = await verifyUserIsLoggedIn(request);
  if (isLoggedIn) {
    return redirect("/");
  }
  return json(null);
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
            <label htmlFor="input-secret" className="block mb-1">
              <Typography as="span" variant="body">
                Passord
              </Typography>
            </label>
            <input
              type="password"
              name="secret"
              id="input-secret"
              placeholder="Spør Lasse & Sonica"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />

            {actionData?.error && (
              <Typography className="text-red-600">
                {actionData.error}
              </Typography>
            )}
          </div>
          <button
            type="submit"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 rounded-md px-4 py-2 focus:outline-none"
          >
            <Typography as="span" variant="body" className="font-semibold">
              Logg inn
            </Typography>
          </button>
        </Form>
      </div>
    </PageLayout>
  );
}
