import type { LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { PageLayout } from "~/components/PageLayout";
import { routes } from "~/types/routes";
import { verifyUserIsLoggedIn } from "~/utils/siteSecret";

export const loader = async ({ request }: LoaderArgs) => {
  const isLoggedIn = await verifyUserIsLoggedIn(request);
  if (!isLoggedIn) {
    return redirect(`/${routes.login}`);
  }
  return {};
};

export default function Root() {
  return (
    <PageLayout showNavigation showLogout>
      <Outlet />
    </PageLayout>
  );
}
