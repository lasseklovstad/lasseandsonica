import { data } from "react-router";
import { z } from "zod";

import { resources } from "~/utils/i18n.server";

import type { Route } from "./+types/api.locales.$lng.$ns";

type Languages = keyof typeof resources;
const LanguageSchema = z
  .string()
  .refine((lng: string): lng is Languages =>
    Object.keys(resources).includes(lng),
  );
type Namespaces = keyof (typeof resources)[Languages];

export function loader({ params }: Route.LoaderArgs) {
  const lng = LanguageSchema.safeParse(params.lng);

  if (lng.error) return data({ error: lng.error }, { status: 400 });

  const namespaces = resources[lng.data];
  const NamespaceSchema = z.string().refine((ns: string): ns is Namespaces => {
    return Object.keys(namespaces).includes(ns);
  });

  const ns = NamespaceSchema.safeParse(params.ns);

  if (ns.error) return data({ error: ns.error }, { status: 400 });

  return data(namespaces[ns.data], {
    headers:
      process.env.NODE_ENV === "production"
        ? {
            "Cache-Control":
              "max-age=300, s-maxage=86400, stale-while-revalidate=604800, stale-if-error=604800",
          }
        : {},
  });
}
