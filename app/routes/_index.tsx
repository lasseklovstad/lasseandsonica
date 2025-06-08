import { href, redirect } from "react-router";

import { siteSecretCookie } from "~/cookies";
import { validateSecret, verifyUserIsLoggedIn } from "~/utils/siteSecret";

import type { Route } from "./+types/_index";

export const loader = async ({ request, context }: Route.LoaderArgs) => {
  const isLoggedIn = await verifyUserIsLoggedIn(request, context);

  if (!isLoggedIn) {
    const searchParams = new URL(request.url).searchParams;
    const secret = searchParams.get("Passord");
    if (secret && validateSecret(secret, context)) {
      return redirect(href("/wedding/home"), {
        headers: {
          "Set-Cookie": await siteSecretCookie.serialize(secret, {
            expires: new Date(Date.now() + 604_800_000 * 4),
          }),
        },
      });
    }
    return redirect(href("/login"));
  }
  return redirect(href("/wedding/home"));
};
