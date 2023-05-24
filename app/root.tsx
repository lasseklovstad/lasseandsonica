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
        <div className="p-2 flex items-center flex-col gap-4 min-h-screen">
          <HeaderAndNaviagtion />
          <main>
            <Outlet />
          </main>
          <footer className="mt-auto">
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
