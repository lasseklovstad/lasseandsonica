import { createRequestHandler, RouterContextProvider } from "react-router";
// eslint-disable-next-line import/no-unresolved
import * as build from "virtual:react-router/server-build";

import { CloudflareContext, EnvSchema } from "./middleware/bindings";

const handler = createRequestHandler(build);

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    // Redirect HTTP to HTTPS
    const url = new URL(request.url);
    if (
      url.protocol === "http:" &&
      !url.toString().startsWith("http://localhost")
    ) {
      const httpsUrl = url.toString().replace("http://", "https://");
      return Response.redirect(httpsUrl, 301);
    }
    const routerContext = new RouterContextProvider();
    routerContext.set(CloudflareContext, {
      env: EnvSchema.parse(env),
      db: env.DB,
      ctx,
      cf: request.cf,
    });

    return await handler(request, routerContext);
  },
};
