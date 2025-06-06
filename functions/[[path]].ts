import { createPagesFunctionHandler } from "@react-router/cloudflare";

// @ts-ignore - the server build file is generated by `remix vite:build`
// eslint-disable-next-line import/no-unresolved
import * as build from "../build/server";

export const onRequest = createPagesFunctionHandler({ build });
