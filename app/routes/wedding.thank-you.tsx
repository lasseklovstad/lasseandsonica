import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { ImageLightbox } from "~/components/ImageLightbox";
import { PageTitle } from "~/components/PageTitle";
import { getBackLink, getNextLink, useLinks } from "~/hooks/useLinks";
import { CloudflareContext } from "~/middleware/bindings";
import { createBlobSas } from "~/utils/azure.server";

import type { Route } from "./+types/wedding.thank-you";

const expireInMin = 60;
const expireInMs = expireInMin * 60 * 1000;

export const loader = async ({ context }: Route.LoaderArgs) => {
  const { env } = context.get(CloudflareContext);

  const containerSas = await createBlobSas({
    accountKey: env.AZURE_BLOB_KEY,
    accountName: env.AZURE_BLOB_NAME,
    containerName: "wedding",
    permissions: "rl", // create, no overwrite
    expiresOn: new Date(new Date().valueOf() + expireInMs),
    protocol: "https",
  });

  const xmlText400 = await getBlobsInFolderXml(containerSas, "edited_400");
  const files400 = getFileNamesFromXml(xmlText400);
  const xmlText1200 = await getBlobsInFolderXml(containerSas, "edited_1200");
  const files1200 = getFileNamesFromXml(xmlText1200);

  const images400 = await Promise.all(
    files400.map((blobName) =>
      createBlobSas({
        accountKey: env.AZURE_BLOB_KEY,
        accountName: env.AZURE_BLOB_NAME,
        containerName: "wedding",
        blobName,
        permissions: "r",
        expiresOn: new Date(new Date().valueOf() + expireInMs),
        protocol: "https",
      }),
    ),
  );

  const images1200 = await Promise.all(
    files1200.map((blobName) =>
      createBlobSas({
        accountKey: env.AZURE_BLOB_KEY,
        accountName: env.AZURE_BLOB_NAME,
        containerName: "wedding",
        blobName,
        permissions: "r",
        expiresOn: new Date(new Date().valueOf() + expireInMs),
        protocol: "https",
      }),
    ),
  );

  return {
    images: images400.map((small) => {
      const smallPathname = new URL(small).pathname.replace("edited_400", "");
      const large = images1200.find((largeImageUrl) => {
        const largePathName = new URL(largeImageUrl).pathname.replace(
          "edited_1200",
          "",
        );
        return smallPathname === largePathName;
      });
      if (!large) {
        throw new Error("couldn't fined image " + small);
      }
      return { large, small };
    }),
  };
};

const getBlobsInFolderXml = async (containerSasUrl: string, prefix: string) => {
  const [base, qs] = containerSasUrl.split("?");

  // Build the List Blobs URL
  const url = new URL(base);
  const params = new URLSearchParams(qs);
  params.set("restype", "container");
  params.set("comp", "list");
  if (prefix) {
    params.set("prefix", prefix);
  }

  const listUrl = `${url.origin}${url.pathname}?${params.toString()}`;

  const response = await fetch(listUrl);

  if (!response.ok) {
    throw new Error(`Failed to list blobs: ${response.status}`);
  }

  return await response.text();
};

const getFileNamesFromXml = (xmlText: string) => {
  // Match all <Blob>...</Blob> blocks
  const blobRegex = /<Blob>([\s\S]*?)<\/Blob>/g;
  const nameRegex = /<Name>(.*?)<\/Name>/;

  const files: string[] = [];

  let match;
  while ((match = blobRegex.exec(xmlText)) !== null) {
    const blobContent = match[1];
    const nameMatch = nameRegex.exec(blobContent);

    files.push(nameMatch?.[1] || "");
  }

  return files;
};

export default function Pictures({
  loaderData: { images },
}: Route.ComponentProps) {
  const links = useLinks();
  const { t } = useTranslation("thank-you");
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    dialogRef.current?.showModal();
  };

  const closeLightbox = () => {
    dialogRef.current?.close();
  };

  const navigateToImage = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div>
      <PageTitle
        title={t("title")}
        backLink={getBackLink("thank-you", links)}
        nextLink={getNextLink("thank-you", links)}
        subtitle={[t("subtitle")]}
      />
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 md:gap-3 lg:grid-cols-5 xl:grid-cols-6">
        {images.map((src, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="relative aspect-square cursor-pointer overflow-hidden rounded-md transition-opacity hover:opacity-80 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
            aria-label={`Open image ${index + 1}`}
          >
            <img
              loading="lazy"
              src={src.small}
              alt={`Gallery image ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>

      <ImageLightbox
        images={images.map((image) => image.large)}
        currentIndex={selectedIndex}
        onClose={closeLightbox}
        onNavigate={navigateToImage}
        dialogRef={dialogRef}
      />
    </div>
  );
}
