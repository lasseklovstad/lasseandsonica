import { href, Outlet, redirect } from "react-router";

import { PageLayout } from "~/components/PageLayout";
import { WeddingLocationAndCounter } from "~/components/WeddingLocationAndCounter";
import { CloudflareContext } from "~/middleware/bindings";
import { verifyUserIsLoggedIn } from "~/utils/siteSecret";

import type { Route } from "./+types/wedding";

export const loader = async ({ request, context }: Route.LoaderArgs) => {
  const cloudflare = context.get(CloudflareContext);
  const isLoggedIn = await verifyUserIsLoggedIn(request, context);
  if (!isLoggedIn) {
    return redirect(href("/login"));
  }
  return {
    accessLevel: isLoggedIn,
    mainCloudName: cloudflare.env.CLOUDINARY_NAME,
  };
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
