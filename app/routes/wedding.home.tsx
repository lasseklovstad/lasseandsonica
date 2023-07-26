import { CloudinaryImage } from "~/components/CloudinaryImage";
import { PageTitle } from "~/components/PageTitle";
import { useWeddingLoaderData } from "~/hooks/useWeddingLoaderData";
import { routes } from "~/types/routes";

export default function Home() {
  const { accessLevel } = useWeddingLoaderData();
  return (
    <div className="flex flex-col items-center">
      <PageTitle
        title="Velkommen"
        nextLink={{
          to: `../${routes.wedding.ourStory}`,
          name: `Vår historie`,
        }}
        subtitle={
          accessLevel === "fullAccess"
            ? [
                "Vi gifter oss 11. august 2023 og håper dere vil bli med på feiringen!",
              ]
            : [
                "Vi gifter oss 11. august 2023!",
                "Denne dagen blir det i hovedsak en liten feiring med familie og forlovere, men dere er hjertelig velkommen til vielsen (12.00-15.00). En større bryllupsfeiring er under planlegging og vil bli om noen år.",
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
