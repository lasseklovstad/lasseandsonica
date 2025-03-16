import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  future: {
    unstable_middleware: false,
    unstable_optimizeDeps: true,
    unstable_splitRouteModules: "enforce",
    unstable_viteEnvironmentApi: false,
  },
} satisfies Config;
