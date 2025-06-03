import { useTranslation } from "react-i18next";
import { Outlet } from "react-router";

import { PageTitle } from "~/components/PageTitle";
import { RoundedImageLink } from "~/components/RoundedImageLink";
import { getBackLink, getNextLink, useLinks } from "~/hooks/useLinks";

import type { Route } from "./+types/wedding.friendsandfamily";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Venner og familie - Lasse & Sonica" }];
};

export default function FriendsAndFamily() {
  const { t } = useTranslation("friendsAndFamily");
  const links = useLinks();
  return (
    <div>
      <PageTitle
        title={t("title")}
        backLink={getBackLink("friendsandfamily", links)}
        nextLink={getNextLink("friendsandfamily", links)}
        subtitle={[t("subtitle")]}
      />
      <div className="mx-4 flex items-center justify-center gap-4 md:gap-16">
        <RoundedImageLink
          title="Sonica"
          imageUrl="Bryllup/sonica_squar_tmyspn.jpg"
          to="sonica"
          weedingRole={t("bride")}
        />
        <RoundedImageLink
          title="Lasse"
          imageUrl="Bryllup/lasse_squar_nb1kto.jpg"
          to="lasse"
          weedingRole={t("groom")}
        />
      </div>
      <Outlet />
    </div>
  );
}
