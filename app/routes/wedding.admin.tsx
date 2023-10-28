import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useFetcher, useLoaderData, useRouteError } from "@remix-run/react";
import { Button } from "~/components/Button";
import { Input } from "~/components/Input";
import { PageTitle } from "~/components/PageTitle";
import { Radio } from "~/components/Radio";
import { Typography } from "~/components/Typography";
import { routes } from "~/types/routes";
import type { AdminForm } from "~/utils/cloudinaryUtils";
import { getAdminForm, getUsage, postAdminForm } from "~/utils/cloudinaryUtils";
import { verifyUserIsLoggedIn } from "~/utils/siteSecret";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const isLoggedIn = await verifyUserIsLoggedIn(request);
  if (isLoggedIn !== "fullAccess") {
    return redirect(`/${routes.login}`);
  }
  const usage = await getUsage();
  return json({ usage, adminForm: getAdminForm() });
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const isLoggedIn = await verifyUserIsLoggedIn(request);
  if (isLoggedIn !== "fullAccess") {
    return new Response("", { status: 401 });
  }
  const formData = await request.formData();
  const cloudinarySecret = String(
    formData.get("cloudinarySecret")
  ) as AdminForm["cloudinarySecret"];

  postAdminForm({
    cloudinarySecret,
    maxResultsImage: parseInt(String(formData.get("maxResultsImage"))),
    maxResultsVideo: parseInt(String(formData.get("maxResultsVideo"))),
  });

  return json({ ok: true });
};

export default function Admin() {
  const { usage, adminForm } = useLoaderData<typeof loader>();
  const resetDate = new Date(usage.rate_limit_reset_at);
  const fetcher = useFetcher();
  return (
    <div className="flex flex-col items-center">
      <PageTitle
        title="Administrator"
        nextLink={{
          to: `../${routes.wedding.qa}`,
          name: `Q+A`,
        }}
        backLink={{
          to: `../${routes.wedding.pictures}`,
          name: `Bilder`,
        }}
        subtitle={["Her skal egentlig bare Lasse være"]}
      />
      <div>
        <Typography>
          <span className="font-semibold">Credits:</span> {usage.credits.usage}{" "}
          / {usage.credits.limit} ({usage.credits.used_percent}%)
        </Typography>
        <Typography>
          <span className="font-semibold">Rate limit:</span>{" "}
          {usage.rate_limit_remaining} / {usage.rate_limit_allowed} - Resets at{" "}
          {resetDate.toLocaleDateString()} {resetDate.toLocaleTimeString()}
        </Typography>
        <fetcher.Form
          className="flex flex-col gap-2 items-start mt-4"
          method="POST"
        >
          <fieldset>
            <Typography as="legend" className="mb-1">
              Velg hvilken Cloudinary du skal bruke?
            </Typography>
            {[
              { label: "Default", value: "lasse.klovstad" },
              { label: "Backup Lasse", value: "lklov_50" },
            ].map(({ label, value }) => (
              <Radio
                key={value}
                label={label}
                name="cloudinarySecret"
                value={value}
                defaultChecked={value === adminForm.cloudinarySecret}
              />
            ))}
          </fieldset>
          <Input
            label="Maks antall visning av bilder"
            name="maxResultsImage"
            type="text"
            defaultValue={adminForm.maxResultsImage.toString()}
          />
          <Input
            label="Maks antall visning av video"
            name="maxResultsVideo"
            type="text"
            defaultValue={adminForm.maxResultsVideo.toString()}
          />
          <Button
            type="submit"
            className="my-4"
            pending={fetcher.state !== "idle"}
          >
            Lagre
          </Button>
        </fetcher.Form>
      </div>
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  if (error instanceof Error) {
    return (
      <div className="bg-red-400 p-4 rounded-md">
        <Typography variant="h4">Feil</Typography>
        <Typography variant="body">{error.message}</Typography>
      </div>
    );
  }
  <div className="bg-red-400 p-4 rounded-md">
    <Typography variant="h4">Feil</Typography>
    <Typography variant="body">Ukjent</Typography>
  </div>;
}
