import { Link, useSearchParams } from "@remix-run/react";
import { CloudinaryImage } from "~/components/CloudinaryImage";
import { PageTitle } from "~/components/PageTitle";

const pictures = [
  {
    imageUrl: "Bryllup/936C0B28-0267-4512-B66A-E7E30D7CD401_vqta6e.jpg",
    imageAlt: "",
  },
  {
    imageUrl: "Bryllup/5BD31EF8-4641-481B-B3A5-5CDB9601859C_zfwhu2.jpg",
    imageAlt: "Sonica på huske ved akerselva",
  },
  {
    imageUrl: "Bryllup/4605E2E5-E6EC-46C1-B007-D64281228728_velt63.jpg",
    imageAlt: "Sonica og Lasse i hengekøye",
  },
  {
    imageUrl: "Bryllup/A5404738-85F1-4775-ABCD-8688BFCEE3BB_uq8chj.jpg",
    imageAlt: "Sonica med hatt",
  },
  {
    imageUrl: "Bryllup/87FD1159-9544-4062-8895-1B2F2F8D1641_ojhz7u.jpg",
    imageAlt: "Sonica og Lasse på vei til brylupp",
  },
  {
    imageUrl: "Bryllup/C987F085-ECD0-40DE-AE60-9FA21A561221_rbgj89.jpg",
    imageAlt: "Sonica og Lasse på fest",
  },
  {
    imageUrl: "Bryllup/1E228DA5-7255-48DE-AEBA-1A38274C04B2_jvtqrn.jpg",
    imageAlt: "Sonica og Lasse i London",
  },
  {
    imageUrl: "Bryllup/4EEE8876-6532-4E27-9176-89F5043CB79E_pxjozc.jpg",
    imageAlt: "Sonica og Lasse i bryllup",
  },
  {
    imageUrl: "Bryllup/991EAE0E-34D6-459F-8315-CED736F78B07_wlkzws.jpg",
    imageAlt: "Sonica og Lasse med Olivia",
  },
  {
    imageUrl: "Bryllup/6024367F-CF06-44BC-A60A-37FCE41F4114_junxcn.jpg",
    imageAlt: "Sonica og Lasse i Paris",
  },
  {
    imageUrl: "Bryllup/5C340B65-FCCC-415F-8EEC-D2EFAB325DD7_x7aykj.jpg",
    imageAlt: "Sonica og Lasse på hotellrom i Paris",
  },
  {
    imageUrl: "Bryllup/617B8EC1-7A36-401D-91F2-9E2F1DDB3AB3_icnszf.jpg",
    imageAlt: "Sonica og Lasse på tur i Norge et sted",
  },
  {
    imageUrl: "Bryllup/DBA9E8B2-A1EC-4742-B439-7C34F7D1D95E_v7spbg.jpg",
    imageAlt: "Sonica og Lasse er kule",
  },
  {
    imageUrl: "Bryllup/3467CE7B-71AD-462C-A299-A4E502466333_yvwxdd.jpg",
    imageAlt: "Lasse i Baker Street",
  },
];

export default function Pictures() {
  const [params] = useSearchParams();
  const pictureIndex = params.get("pictureIndex");
  const pictureIndexAsNumber = pictureIndex && parseInt(pictureIndex);
  const selectedPicture = pictures.find((p, i) => i == pictureIndexAsNumber);
  return (
    <div>
      <PageTitle
        title="Bilder av oss"
        subtitle={[
          "Her ser du bilder av oss gjennom tidene sammen.",
          "Trykk på bildene for å se dem i større størrelse.",
        ]}
      />
      {typeof pictureIndexAsNumber === "number" && selectedPicture ? (
        <div className="flex justify-around w-full items-start">
          <Link
            preventScrollReset
            to={{ search: `?pictureIndex=${pictureIndexAsNumber - 1}` }}
            aria-label="Forrige bilde"
            className="inline-flex items-center p-0.5 m-2 text-black rounded-lg focus:outline-none focus:ring-2 hover:ring-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              viewBox="3 3 10 10"
            >
              <path
                fill-rule="evenodd"
                d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
              ></path>
            </svg>
          </Link>
          <CloudinaryImage
            imageUrl={selectedPicture.imageUrl}
            imageAlt={selectedPicture.imageAlt}
            className="max-w-[500px]"
          />
          <Link
            to={{ search: `?pictureIndex=${pictureIndexAsNumber + 1}` }}
            preventScrollReset
            aria-label="Neste bilde"
            className="inline-flex items-center p-0.5 m-2 text-black rounded-lg focus:outline-none focus:ring-2 hover:ring-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              viewBox="3 3 10 10"
            >
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              ></path>
            </svg>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 items-center">
          {pictures.map((p, i) => (
            <Link
              key={i}
              to={{ search: `?pictureIndex=${i}` }}
              aria-label="Se bilde i større størrelse"
            >
              <CloudinaryImage imageUrl={p.imageUrl} imageAlt={p.imageAlt} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
