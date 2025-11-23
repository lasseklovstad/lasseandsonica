import { useTranslation } from "react-i18next";
import { href, useRouteLoaderData } from "react-router";

import type { loader } from "~/routes/wedding";

const pageIds = [
  "home",
  "program",
  "qa",
  "friendsandfamily",
  "ourstory",
  "pictures",
  "rsvp-admin",
  "thank-you",
] as const;

export const useLinks = () => {
  const { t } = useTranslation("common");
  const loaderData = useRouteLoaderData<typeof loader>("routes/wedding");
  return pageIds
    .map((id) => ({
      hide: id === "rsvp-admin" && loaderData?.accessLevel !== "admin",
      name: t(id),
      to: href(`/wedding/${id}`),
      id,
    }))
    .filter((route) => !route.hide);
};

export const getNextLink = (
  currentPageId: (typeof pageIds)[number],
  links: ReturnType<typeof useLinks>,
) => {
  const index = links.findIndex((link) => link.id === currentPageId);
  const nextIndex = index + 1 >= links.length ? 0 : index + 1;
  return links[nextIndex];
};

export const getBackLink = (
  currentPageId: (typeof pageIds)[number],
  links: ReturnType<typeof useLinks>,
) => {
  const index = links.findIndex((link) => link.id === currentPageId);
  const nextIndex = index - 1 < 0 ? links.length - 1 : index - 1;
  return links[nextIndex];
};
