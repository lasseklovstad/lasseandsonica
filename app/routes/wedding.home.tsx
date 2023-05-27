import { CloudinaryImage } from "~/components/CloudinaryImage";
import { PageTitle } from "~/components/PageTitle";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <PageTitle
        title="Velkommen"
        subtitle={[
          "Vi gifter oss 11. august 2023 og håper dere vil bli med på feiringen!",
        ]}
      />

      <CloudinaryImage
        imageAlt="Lasse og Sonica på tur i Paris"
        imageUrl="Bryllup/77B9998B-E0F0-4D8E-A4AE-AE1E501B6E5D_yrfz6t.jpg"
      />
    </div>
  );
}
