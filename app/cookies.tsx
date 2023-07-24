import { createCookie } from "@remix-run/node";

export const siteSecretCookie = createCookie("site-secret", {
  maxAge: 604_800,
  httpOnly: true,
  secure: true,
});
