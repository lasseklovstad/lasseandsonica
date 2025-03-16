import { href } from "react-router";

import { CloudinaryImage } from "~/components/CloudinaryImage";
import { PageTitle } from "~/components/PageTitle";
import { useWeddingLoaderData } from "~/hooks/useWeddingLoaderData";
import { routes } from "~/types/routes";

import type { Route } from "./+types/wedding.home";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Velkommen - Lasse & Sonica" }];
};

export default function Home() {
  const { accessLevel } = useWeddingLoaderData();
  return (
    <div className="flex flex-col items-center">
      <PageTitle
        title="Velkommen"
        nextLink={{
          to: href("/wedding/ourstory"),
          name: "Vår historie",
        }}
        subtitle={
          accessLevel === "fullAccess"
            ? [
                "Vi giftet oss 11. august 2023 og takk til dere som var med på feiringen!",
                "En større bryllupsfeiring er under planlegging og vil bli om noen år.",
              ]
            : [
                "Vi giftet oss 11. august 2023!",
                "En større bryllupsfeiring er under planlegging og vil bli om noen år.",
              ]
        }
      />
      <CloudinaryImage
        imageAlt="Lasse og Sonica på takterrasse 17.mai 2023"
        imageUrl="Bryllup/77B9998B-E0F0-4D8E-A4AE-AE1E501B6E5D_yrfz6t.jpg"
      />
    </div>
  );
}
