import { unstable_createContext } from "react-router";

export const CloudflareContext = unstable_createContext<{
  env: Env;
  ctx: ExecutionContext;
  cf?: RequestInitCfProperties;
}>();
