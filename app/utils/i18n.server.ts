import { createCookie } from "react-router";
import { unstable_createI18nextMiddleware } from "remix-i18next/middleware";

import en from "locales/en";
import no from "locales/no";

export const resources = { en: { ...en }, no: { ...no } };

export const localeCookie = createCookie("lng", {
  path: "/",
  sameSite: "lax",
  secure: process.env.NODE_ENV === "production",
  httpOnly: true,
});

export const [i18nextMiddleware, getLocale, getInstance] =
  unstable_createI18nextMiddleware({
    detection: {
      supportedLanguages: ["en", "no"],
      fallbackLanguage: "en",
      cookie: localeCookie,
    },
    i18next: {
      resources,
    },
  });
