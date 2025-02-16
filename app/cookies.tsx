import { createCookie } from "react-router";

export const siteSecretCookie = createCookie("site-secret", {
  httpOnly: true,
  secure: true,
});
