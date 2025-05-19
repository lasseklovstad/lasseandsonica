import type { LinksFunction, MetaFunction } from "react-router";
import {
  data,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "react-router";
import { useChangeLanguage } from "remix-i18next/react";
import "./tailwind.css";

import type { Route } from "./+types/root";
import i18next, { localeCookie } from "./utils/i18n.server";

export const meta: MetaFunction = () => {
  return [{ title: "Lasse & Sonica" }];
};

export const links: LinksFunction = () => [
  {
    rel: "preload",
    as: "font",
    href: "/AlexBrush-Regular.ttf",
    type: "font/ttf",
    crossOrigin: "anonymous",
  },
];

export const loader = async ({ request }: Route.LoaderArgs) => {
  const locale = await i18next.getLocale(request);
  return data(
    { locale },
    { headers: { "Set-Cookie": await localeCookie.serialize(locale) } },
  );
};

export const handle = { i18n: "common" };

export default function App({ loaderData: { locale } }: Route.ComponentProps) {
  // This hook will change the i18n instance language to the current locale
  // detected by the loader, this way, when we do something to change the
  // language, this locale will change and i18next will load the correct
  // translation files
  useChangeLanguage(locale);
  return (
    <html lang={locale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  return (
    <html lang="no">
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        {/* add the UI you want your users to see */}
        <Scripts />
      </body>
    </html>
  );
}
