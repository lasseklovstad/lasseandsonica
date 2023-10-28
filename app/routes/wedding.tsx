import type { LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { PageLayout } from "~/components/PageLayout";
import { WeddingLocationAndCounter } from "~/components/WeddingLocationAndCounter";
import { routes } from "~/types/routes";
import { verifyUserIsLoggedIn } from "~/utils/siteSecret";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const isLoggedIn = await verifyUserIsLoggedIn(request);
  if (!isLoggedIn) {
    return redirect(`/${routes.login}`);
  }
  return json({
    accessLevel: isLoggedIn,
    mainCloudName: process.env.CLOUDINARY_NAME,
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
