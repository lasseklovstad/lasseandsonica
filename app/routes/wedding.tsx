import type { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { json, redirect } from "@remix-run/cloudflare";
import { Outlet } from "@remix-run/react";
import { PageLayout } from "~/components/PageLayout";
import { WeddingLocationAndCounter } from "~/components/WeddingLocationAndCounter";
import { routes } from "~/types/routes";
import { verifyUserIsLoggedIn } from "~/utils/siteSecret";

export const loader = async ({ request, context }: LoaderFunctionArgs) => {
  const isLoggedIn = await verifyUserIsLoggedIn(request, context);
  if (!isLoggedIn) {
    return redirect(`/${routes.login}`);
  }
  return json({
    accessLevel: isLoggedIn,
    mainCloudName: context.env.CLOUDINARY_NAME,
  } as const);
};

export default function Root() {
  return (
    <PageLayout
      showNavigation
      showLogout
      headerContent={<WeddingLocationAndCounter />}
    >
      <Outlet />
    </PageLayout>
  );
}
