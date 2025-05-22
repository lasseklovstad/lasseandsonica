import type { unstable_RouterContextProvider } from "react-router";

import { siteSecretCookie } from "~/cookies";
import { CloudflareContext } from "~/middleware/bindings";

export type AccessLevel = "fullAccess" | "limitedAccess" | "admin";

export const validateSecret = (
  secret: string,
  context: unstable_RouterContextProvider,
) => {
  const cloudflare = context.get(CloudflareContext);
  const adminAccess = secret === cloudflare.env.LOGIN_SECRET_ADMIN;
  if (adminAccess) {
    return "admin";
  }
  const fullAccess = secret === cloudflare.env.LOGIN_SECRET_FULL;
  if (fullAccess) {
    return "fullAccess";
  }
  const limitedAccess = secret === cloudflare.env.LOGIN_SECRET_LIMITED;
  if (limitedAccess) {
    return "limitedAccess";
  }

  return false;
};

export const verifyUserIsLoggedIn = async (
  request: Request,
  context: unstable_RouterContextProvider,
) => {
  const cookieHeader = request.headers.get("Cookie");
  const siteSecret = await siteSecretCookie.parse(cookieHeader);
  return validateSecret(siteSecret, context);
};
