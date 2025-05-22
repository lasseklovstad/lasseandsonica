import type { resources } from "~/utils/i18n.server";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: typeof resources.en;
  }
}
