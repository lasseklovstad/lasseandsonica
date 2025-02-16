import type { AppLoadContext } from "react-router";

import { siteSecretCookie } from "~/cookies";

export type AccessLevel = "fullAccess" | "limitedAccess";

export const validateSecret = (secret: string, context: AppLoadContext) => {
  const fullAccess = secret === context.cloudflare.env.LOGIN_SECRET_FULL;
  if (fullAccess) {
    return "fullAccess";
  }
  const limitedAccess = secret === context.cloudflare.env.LOGIN_SECRET_LIMITED;
  if (limitedAccess) {
    return "limitedAccess";
  }

  return false;
};

export const verifyUserIsLoggedIn = async (
  request: Request,
  context: AppLoadContext,
) => {
  const cookieHeader = request.headers.get("Cookie");
  const siteSecret = await siteSecretCookie.parse(cookieHeader);
  return validateSecret(siteSecret, context);
};
