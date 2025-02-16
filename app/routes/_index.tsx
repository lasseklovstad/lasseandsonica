import type { LoaderFunctionArgs } from "react-router";
import { redirect } from "react-router";
import { routes } from "~/types/routes";
import { verifyUserIsLoggedIn } from "~/utils/siteSecret";

export const loader = async ({ request, context }: LoaderFunctionArgs) => {
  const isLoggedIn = await verifyUserIsLoggedIn(request, context);
  if (!isLoggedIn) {
    return redirect(`/${routes.login}`);
  }
  return redirect(`/${routes.wedding.root}/${routes.wedding.home}`);
};
