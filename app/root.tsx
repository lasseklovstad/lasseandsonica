import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";

export const meta: V2_MetaFunction = () => {
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
  { rel: "ico", href: "/favicon.svg" },
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="no">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
