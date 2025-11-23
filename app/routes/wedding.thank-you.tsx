import { Typography } from "~/components/Typography";
import { CloudflareContext } from "~/middleware/bindings";
import { createBlobSas } from "~/utils/azure.server";

import type { Route } from "./+types/wedding.thank-you";
import { PageTitle } from "~/components/PageTitle";
import { getBackLink, getNextLink, useLinks } from "~/hooks/useLinks";
import { useTranslation } from "react-i18next";

const expireInMin = 10;
const expireInMs = expireInMin * 60 * 1000;

export const loader = async ({ context }: Route.LoaderArgs) => {
  const { env } = context.get(CloudflareContext);

  const { blobSasUrl } = await createBlobSas({
    accountKey: env.AZURE_BLOB_KEY,
    accountName: env.AZURE_BLOB_NAME,
    containerName: "wedding",
    permissions: "rl", // create, no overwrite
    expiresOn: new Date(new Date().valueOf() + expireInMs),
    protocol: "https",
  });

  const xmlText = await getBlobsInFolderXml(blobSasUrl, "edited");
  const files = getFileNamesFromXml(xmlText);

  const { blobSasUrl: firstImageUrl } = await createBlobSas({
    accountKey: env.AZURE_BLOB_KEY,
    accountName: env.AZURE_BLOB_NAME,
    containerName: "wedding",
    blobName: files[0]!,
    permissions: "r", // create, no overwrite
    expiresOn: new Date(new Date().valueOf() + expireInMs),
    protocol: "https",
  })

  return {
    containerSAS: blobSasUrl,
    files,
    images: await Promise.all(files.map(blobName => createBlobSas({
      accountKey: env.AZURE_BLOB_KEY,
      accountName: env.AZURE_BLOB_NAME,
      containerName: "wedding",
      blobName,
      permissions: "r", // create, no overwrite
      expiresOn: new Date(new Date().valueOf() + expireInMs),
      protocol: "https",
    })))
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
}

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
}

export default function Pictures({ loaderData: { images } }: Route.ComponentProps) {
  const links = useLinks();
  const { t } = useTranslation("thank-you");
  return <div>
    <PageTitle
      title={t("title")}
      backLink={getBackLink("thank-you", links)}
      nextLink={getNextLink("thank-you", links)}
      subtitle={[t("subtitle")]}
    />
    <div className="grid grid-cols-3 gap-2">
      {images.map(src => <img loading="lazy" src={src.blobSasUrl} />)}
    </div>
  </div>
}
