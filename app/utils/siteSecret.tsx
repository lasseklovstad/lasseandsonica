import { siteSecretCookie } from "~/cookies";

export const validateSecret = (secret: string) => {
  return secret === (process.env.LOGIN_SECRET ?? "lasse og sonica");
};

export const verifyUserIsLoggedIn = async (request: Request) => {
  const cookieHeader = request.headers.get("Cookie");
  const siteSecret = await siteSecretCookie.parse(cookieHeader);
  return validateSecret(siteSecret);
};
