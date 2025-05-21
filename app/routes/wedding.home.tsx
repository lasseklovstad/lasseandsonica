import { useTranslation } from "react-i18next";
import { href } from "react-router";

import { CloudinaryImage } from "~/components/CloudinaryImage";
import { PageTitle } from "~/components/PageTitle";

import type { Route } from "./+types/wedding.home";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Velkommen - Lasse & Sonica" }];
};

export default function Home() {
  const { t } = useTranslation("home");
  const { t: tCommon } = useTranslation("common");
  return (
    <div className="flex flex-col items-center">
      <PageTitle
        title={t("title")}
        nextLink={{
          to: href("/wedding/ourstory"),
          name: tCommon("ourstory"),
        }}
        subtitle={[t("subtitle")]}
      />
      <CloudinaryImage
        imageAlt={t("imageAlt")}
        imageUrl="Bryllup/77B9998B-E0F0-4D8E-A4AE-AE1E501B6E5D_yrfz6t.jpg"
      />
    </div>
  );
}
