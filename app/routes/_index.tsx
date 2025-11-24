import { href, redirect } from "react-router";

import { siteSecretCookie } from "~/cookies";
import { validateSecret, verifyUserIsLoggedIn } from "~/utils/siteSecret";

import type { Route } from "./+types/_index";

export const loader = async ({ request, context }: Route.LoaderArgs) => {
  const isLoggedIn = await verifyUserIsLoggedIn(request, context);

  const searchParams = new URL(request.url).searchParams;
  const to = searchParams.get("to") ?? href("/wedding/home");
  if (!isLoggedIn) {
    const secret = searchParams.get("Passord");
    if (secret && validateSecret(secret, context)) {
      return redirect(to, {
        headers: {
          "Set-Cookie": await siteSecretCookie.serialize(secret, {
            expires: new Date(Date.now() + 604_800_000 * 4),
          }),
        },
      });
    }
    return redirect(href("/login"));
  }
  return redirect(to);
};
