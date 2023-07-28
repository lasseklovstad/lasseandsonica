import { useRouteLoaderData } from "@remix-run/react";
import type { AccessLevel } from "~/utils/siteSecret";

export const useWeddingLoaderData = () => {
  return useRouteLoaderData("routes/wedding") as {
    accessLevel: AccessLevel;
    mainCloudName: string;
  };
};
