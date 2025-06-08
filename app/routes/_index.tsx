import { href, redirect } from "react-router";

import { verifyUserIsLoggedIn } from "~/utils/siteSecret";

import type { Route } from "./+types/_index";

export const loader = async ({ request, context }: Route.LoaderArgs) => {
  const isLoggedIn = await verifyUserIsLoggedIn(request, context);
  const searchParams = new URL(request.url).searchParams.toString();
  if (!isLoggedIn) {
    return redirect(href("/login") + searchParams ? `?${searchParams}` : "");
  }
  return redirect(href("/wedding/home"));
};
