import { type PlatformProxy } from "wrangler";

// When using `wrangler.toml` to configure bindings,
// `wrangler types` will generate types for those bindings
// into the global `Env` interface.
// Need this empty interface so that typechecking passes
// even if no `wrangler.toml` exists.
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Env {
  MY_KV: KVNamespace;
  AUTH0_SECRET: string;
  LOGIN_SECRET_LIMITED: string;
  LOGIN_SECRET_FULL: string;
  CLOUDINARY_API_SECRET: string;
  CLOUDINARY_API_KEY: string;
  CLOUDINARY_NAME: string;
  CLOUDINARY_API_SECRET_1: string;
  CLOUDINARY_API_KEY_1: string;
  CLOUDINARY_NAME_1: string;
}

type Cloudflare = Omit<PlatformProxy<Env>, "dispose">;

declare module "@remix-run/cloudflare" {
  interface AppLoadContext {
    cloudflare: Cloudflare;
  }
}
