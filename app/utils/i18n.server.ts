import { createCookie } from "react-router";
import { RemixI18Next } from "remix-i18next/server";

import en from "locales/en";
import no from "locales/no";
import i18n from "~/i18n"; // your i18n configuration file

export const resources = { en: { ...en }, no: { ...no } };

export const localeCookie = createCookie("lng", {
  path: "/",
  sameSite: "lax",
  secure: process.env.NODE_ENV === "production",
  httpOnly: true,
});

export const i18nextConfig = {
  detection: {
    supportedLanguages: i18n.supportedLngs,
    fallbackLanguage: i18n.fallbackLng,
    cookie: localeCookie,
  },
  // This is the configuration for i18next used
  // when translating messages server-side only
  i18next: {
    ...i18n,
    resources,
  },
};

const i18next = new RemixI18Next(i18nextConfig);

export default i18next;
