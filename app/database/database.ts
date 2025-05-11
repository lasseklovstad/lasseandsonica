import { drizzle } from "drizzle-orm/d1";
import type { AppLoadContext } from "react-router";

import { rsvps } from "./schema";

export const getDatabase = (context: AppLoadContext) => {
  return drizzle(context.cloudflare.env.DB, {
    schema: { rsvps },
    casing: "snake_case",
  });
};
