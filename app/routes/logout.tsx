import { redirect } from "@remix-run/node";
import { siteSecretCookie } from "~/cookies";

export const loader = async () => {
  return redirect("/", {
    headers: {
      "Set-Cookie": await siteSecretCookie.serialize("", {
        expires: new Date(0),
      }),
    },
  });
};
