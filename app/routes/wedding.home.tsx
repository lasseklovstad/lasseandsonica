import { useTranslation } from "react-i18next";

import { CloudinaryImage } from "~/components/CloudinaryImage";
import { PageTitle } from "~/components/PageTitle";
import { getBackLink, getNextLink, useLinks } from "~/hooks/useLinks";

import type { Route } from "./+types/wedding.home";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Velkommen - Lasse & Sonica" }];
};

export default function Home() {
  const { t } = useTranslation("home");
  const links = useLinks();
  return (
    <div className="flex flex-col items-center">
      <PageTitle
        title={t("title")}
        nextLink={getNextLink("home", links)}
        backLink={getBackLink("home", links)}
        subtitle={[t("subtitle")]}
      />
      <CloudinaryImage
        imageAlt={t("imageAlt")}
        imageUrl="Bryllup/20240601_140831538_iOS_rku6tv.jpg"
      />
    </div>
  );
}
