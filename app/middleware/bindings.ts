import { unstable_createContext } from "react-router";
import { z } from "zod";

export const EnvSchema = z.object({
  LOGIN_SECRET_FULL: z.string(),
  LOGIN_SECRET_LIMITED: z.string(),
  LOGIN_SECRET_ADMIN: z.string(),
  CLOUDINARY_NAME: z.string(),
  RESEND_API_KEY: z.string(),
});

export const CloudflareContext = unstable_createContext<{
  env: z.infer<typeof EnvSchema>;
  db: D1Database;
  ctx: ExecutionContext;
  cf?: RequestInitCfProperties;
}>();
