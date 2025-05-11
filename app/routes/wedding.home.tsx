import { href } from "react-router";

import { CloudinaryImage } from "~/components/CloudinaryImage";
import { PageTitle } from "~/components/PageTitle";

import type { Route } from "./+types/wedding.home";

export const meta: Route.MetaFunction = () => {
  return [{ title: "Velkommen - Lasse & Sonica" }];
};

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <PageTitle
        title="Velkommen"
        nextLink={{
          to: href("/wedding/ourstory"),
          name: "Vår historie",
        }}
        subtitle={[
          "Vi giftet oss 11. august 2023 og nå er det endelig tid for feiring!",
        ]}
      />
      <CloudinaryImage
        imageAlt="Lasse og Sonica på takterrasse 17.mai 2023"
        imageUrl="Bryllup/77B9998B-E0F0-4D8E-A4AE-AE1E501B6E5D_yrfz6t.jpg"
      />
    </div>
  );
}
