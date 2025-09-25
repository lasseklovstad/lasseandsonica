import { createContext } from "react-router";
import { z } from "zod";

export const EnvSchema = z.object({
  LOGIN_SECRET_FULL: z.string(),
  LOGIN_SECRET_LIMITED: z.string(),
  LOGIN_SECRET_ADMIN: z.string(),
  CLOUDINARY_NAME: z.string(),
  AZURE_BLOB_KEY: z.string(),
  AZURE_BLOB_NAME: z.string(),
});

export const CloudflareContext = createContext<{
  env: z.infer<typeof EnvSchema>;
  db: D1Database;
  ctx: ExecutionContext;
  cf?: RequestInitCfProperties;
}>();
