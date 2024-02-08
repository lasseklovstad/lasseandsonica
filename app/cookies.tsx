import { createCookie } from "@remix-run/cloudflare";

export const siteSecretCookie = createCookie("site-secret", {
  httpOnly: true,
  secure: true,
});
