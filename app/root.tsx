import { cssBundleHref } from "@remix-run/css-bundle";
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
import { HeaderAndNaviagtion } from "./components/HeaderAndNavigation";
import { Typography } from "./components/Typography";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Lasse & Sonica" }];
};

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="no">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="flex items-center flex-col min-h-screen">
          <HeaderAndNaviagtion />
          <main className="md:min-w-[500px] min-w-full mb-2">
            <Outlet />
          </main>
          <footer className="mt-auto h-10 bg-red-50 w-full text-center p-2">
            <Typography variant="body-small">
              Laget av Lasse & Sonica
            </Typography>
          </footer>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
