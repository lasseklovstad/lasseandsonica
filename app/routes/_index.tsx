import type { LoaderFunctionArgs } from "react-router";
import { href, redirect } from "react-router";

import { verifyUserIsLoggedIn } from "~/utils/siteSecret";

export const loader = async ({ request, context }: LoaderFunctionArgs) => {
  const isLoggedIn = await verifyUserIsLoggedIn(request, context);
  if (!isLoggedIn) {
    return redirect(href("/login"));
  }
  return redirect(href("/wedding/home"));
};
