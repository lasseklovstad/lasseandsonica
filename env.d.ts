/// <reference types="@remix-run/cloudflare" />
/// <reference types="vite/client" />

import type { KVNamespace } from "@cloudflare/workers-types";

declare module "@remix-run/cloudflare" {
  interface AppLoadContext {
    env: {
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
    };
  }
}
