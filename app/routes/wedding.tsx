import type { LoaderFunctionArgs } from "react-router";
import { Outlet, redirect } from "react-router";

import { PageLayout } from "~/components/PageLayout";
import { WeddingLocationAndCounter } from "~/components/WeddingLocationAndCounter";
import { routes } from "~/types/routes";
import { verifyUserIsLoggedIn } from "~/utils/siteSecret";

export const loader = async ({ request, context }: LoaderFunctionArgs) => {
  const isLoggedIn = await verifyUserIsLoggedIn(request, context);
  if (!isLoggedIn) {
    return redirect(`/${routes.login}`);
  }
  return {
    accessLevel: isLoggedIn,
    mainCloudName: context.cloudflare.env.CLOUDINARY_NAME,
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
