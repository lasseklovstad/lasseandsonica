import { CloudinaryImage } from "~/components/CloudinaryImage";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <CloudinaryImage
        aspectRatio={{ h: 4032, w: 3024 }}
        imageAlt="Lasse og Sonica på tur i Paris"
        imageUrl="Bryllup/77B9998B-E0F0-4D8E-A4AE-AE1E501B6E5D_yrfz6t.jpg"
      />
    </div>
  );
}
