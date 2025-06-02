import { useTranslation } from "react-i18next";
import { href, Link } from "react-router";

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
          to: href("/wedding/rsvp"),
          name: tCommon("rsvp"),
        }}
        subtitle={[t("subtitle")]}
      />
      <Link
        to={href("/wedding/rsvp")}
        className="mb-2 text-lg underline underline-offset-2"
      >
        Svar innen 1.september ved å klikke her!
      </Link>
      <CloudinaryImage
        imageAlt={t("imageAlt")}
        imageUrl="Bryllup/edited-sonica-og-lasse_izlpgd.jpg"
      />
    </div>
  );
}
