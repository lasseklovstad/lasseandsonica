import { createCookie } from "@remix-run/node";

export const siteSecretCookie = createCookie("site-secret");
