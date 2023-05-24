import { redirect } from "@remix-run/node";
import { routes } from "~/types/routes";

export const loader = () => {
  return redirect(`/${routes.home}`);
};
