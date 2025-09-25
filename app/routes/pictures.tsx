import { useRef, useState } from "react";
import { useRevalidator } from "react-router";

import { Button } from "~/components/Button";
import { Header } from "~/components/Header";
import { Typography } from "~/components/Typography";
import { CloudflareContext } from "~/middleware/bindings";
import { createBlobSas } from "~/utils/azure.server";

import type { Route } from "./+types/pictures";

const expireInMin = 5;
const expireInMs = expireInMin * 60 * 1000;

export const loader = async ({ context }: Route.LoaderArgs) => {
  const { env } = context.get(CloudflareContext);

  const { blobSasUrl } = await createBlobSas({
    accountKey: env.AZURE_BLOB_KEY,
    accountName: env.AZURE_BLOB_NAME,
    containerName: "wedding",
    permissions: "c", // create, no overwrite
    expiresOn: new Date(new Date().valueOf() + expireInMs),
    protocol: "https",
  });
  return {
    containerSAS: blobSasUrl,
    expiresAt: Date.now() + expireInMs,
  };
};

export default function Pictures({ loaderData }: Route.ComponentProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploadProgess, setUploadProgress] = useState<{
    total: number;
    success: number;
    failed: number;
  }>();
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const revalidator = useRevalidator();

  function needRefresh() {
    // refresh if < 5 min left
    return Date.now() > loaderData.expiresAt - 5 * 60 * 1000;
  }
  async function uploadNewBlob(file: File, containerSasUrl: string) {
    const [base, qs] = containerSasUrl.split("?");
    // Optional prefix folder
    const blobName = `uploads/${crypto.randomUUID()}-${encodeURIComponent(file.name)}`;
    const target = `${base}/${blobName}?${qs}`;
    const res = await fetch(target, {
      method: "PUT",
      headers: {
        "x-ms-blob-type": "BlockBlob",
        "Content-Type": file.type || "application/octet-stream",
      },
      body: file,
    });
    if (res.status === 409) {
      throw new Error("Blob already exists (conflict).");
    }
    if (!res.ok) {
      throw new Error(`Upload failed: ${res.status} ${await res.text()}`);
    }
    return { url: target.split("?")[0] };
  }
  return (
    <>
      <Header showSideBar={false} links={[]} />
      <main className="container mx-auto space-y-4 p-4 text-center">
        <Typography variant="h2" className="mt-2 mb-4">
          Bilder og video
        </Typography>
        <Typography className="mb-4 italic">
          Her kan du laste opp minner fra kvelden
        </Typography>
        <Button
          disabled={
            uploadProgess &&
            uploadProgess.total !== uploadProgess.success + uploadProgess.failed
          }
          onClick={async () => {
            if (needRefresh()) {
              await revalidator.revalidate();
              inputRef.current?.click();
            } else {
              inputRef.current?.click();
            }
          }}
        >
          Velg filer
        </Button>
        {uploadProgess &&
        uploadProgess.total !== uploadProgess.success + uploadProgess.failed ? (
          <div className="block">
            <svg
              aria-hidden="true"
              role="status"
              className="size-8 animate-spin text-blue-500"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              ></path>
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              ></path>
            </svg>
            Laster opp ({uploadProgess.success + uploadProgess.failed}/
            {uploadProgess.total})
          </div>
        ) : uploadProgess ? (
          <Typography variant="body">
            ✅{uploadProgess.success}/{uploadProgess.total} filer lastet opp
            uten problemer.
          </Typography>
        ) : null}
        <input
          hidden
          ref={inputRef}
          type="file"
          accept="image/*,video/*"
          multiple
          onChange={async (event) => {
            const files = event.target.files;
            if (files) {
              const list = Array.from(files);
              setUploadProgress({ total: list.length, success: 0, failed: 0 });
              setErrorMessages([]);

              // Simple limited concurrency (e.g., 3 at a time)
              const concurrency = 3;
              let success = 0;
              let failed = 0;

              async function run(file: File) {
                // Basic size guard (warn if > 200MB)
                if (file.size > 200 * 1024 * 1024) {
                  setErrorMessages((errors) => [
                    ...errors,
                    `Filen er for stor: ${file.name}`,
                  ]);
                  failed++;
                } else {
                  try {
                    await uploadNewBlob(file, loaderData.containerSAS);
                    success++;
                  } catch (e) {
                    console.error(e);
                    failed++;
                    setErrorMessages((errors) => [
                      ...errors,
                      `Feil ved opplasting av fil: ${file.name}`,
                    ]);
                  }
                }

                setUploadProgress({ total: list.length, success, failed });
              }

              const queue = [...list];
              const workers = Array.from(
                { length: Math.min(concurrency, queue.length) },
                async () => {
                  while (queue.length) {
                    const f = queue.shift();
                    if (f) await run(f);
                  }
                },
              );
              await Promise.all(workers);
            }
            if (inputRef.current) {
              inputRef.current.value = "";
            }
          }}
        />
        {errorMessages.length > 0 ? (
          <ul className="text-red-500">
            {errorMessages.map((message) => (
              <li key={message}>❌ {message}</li>
            ))}
          </ul>
        ) : null}
      </main>
    </>
  );
}
