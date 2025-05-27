import { drizzle } from "drizzle-orm/d1";
import type { unstable_RouterContextProvider } from "react-router";

import { CloudflareContext } from "~/middleware/bindings";

import { rsvps } from "./schema";

export const getDatabase = (context: unstable_RouterContextProvider) => {
  return drizzle(context.get(CloudflareContext).db, {
    schema: { rsvps },
    casing: "snake_case",
  });
};
