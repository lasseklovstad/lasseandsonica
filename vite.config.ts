import { unstable_vitePlugin as remix, unstable_cloudflarePreset as cloudflare, } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [
        remix({
        ignoredRouteFiles: ["**/.*"],
        presets: [cloudflare()],
    }),
    tsconfigPaths()
    ],
    ssr: {
        resolve: {
          externalConditions: ["workerd", "worker"],
        },
      },
});