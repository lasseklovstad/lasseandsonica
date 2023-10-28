import type { LoaderFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { routes } from "~/types/routes";
import { verifyUserIsLoggedIn } from "~/utils/siteSecret";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const isLoggedIn = await verifyUserIsLoggedIn(request);
  if (!isLoggedIn) {
    return redirect(`/${routes.login}`);
  }
  return redirect(`/${routes.wedding.root}/${routes.wedding.home}`);
};
