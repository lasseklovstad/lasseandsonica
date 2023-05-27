import { createCookie } from "@remix-run/node";

export const siteSecretCookie = createCookie("site-secret", {
  expires: new Date(Date.now() + 604_800),
  maxAge: 604_800,
  httpOnly: true,
  secure: true,
});
