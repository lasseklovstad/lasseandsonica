import type { unstable_InitialContext } from "react-router";
import { createRequestHandler } from "react-router";
// eslint-disable-next-line import/no-unresolved
import * as build from "virtual:react-router/server-build";

import { CloudflareContext, EnvSchema } from "./middleware/bindings";

const handler = createRequestHandler(build);

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    const context: unstable_InitialContext = new Map();
    context.set(CloudflareContext, {
      env: EnvSchema.parse(env),
      db: env.DB,
      ctx,
      cf: request.cf,
    });
    return await handler(request, context);
  },
};
