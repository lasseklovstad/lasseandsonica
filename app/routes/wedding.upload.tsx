import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import {
  json,
  redirect,
  unstable_composeUploadHandlers as composeUploadHandlers,
  unstable_createMemoryUploadHandler as createMemoryUploadHandler,
  unstable_parseMultipartFormData as parseMultipartFormData,
} from "@remix-run/node";
import { useFetcher, useLoaderData, useRouteError } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import { Button } from "~/components/Button";
import { ImageLibrary } from "~/components/ImageLibrary";
import { PageTitle } from "~/components/PageTitle";
import { Typography } from "~/components/Typography";
import { routes } from "~/types/routes";
import { getImages, getVideos, uploadImage } from "~/utils/cloudinaryUtils";
import { verifyUserIsLoggedIn } from "~/utils/siteSecret";

export const loader = async ({ request }: LoaderArgs) => {
  const isLoggedIn = await verifyUserIsLoggedIn(request);
  if (!isLoggedIn) {
    return redirect(`/${routes.login}`);
  }
  const images = await getImages();
  const videos = await getVideos();
  return json({ images, videos } as const);
};

export const action = async ({ request }: ActionArgs) => {
  const uploadHandler = composeUploadHandlers(
    async ({ name, data, contentType }) => {
      if (name !== "multiple_files") {
        return undefined;
      }
      await uploadImage(data, contentType);
    },
    createMemoryUploadHandler()
  );

  await parseMultipartFormData(request, uploadHandler);

  return json({});
};

export default function Upload() {
  const { images, videos } = useLoaderData<typeof loader>();
  const [canSave, setCanSave] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const fetcher = useFetcher();

  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data && inputRef.current?.value) {
      inputRef.current.value = "";
      setCanSave(false);
    }
  }, [fetcher.data, fetcher.state]);

  return (
    <div>
      <PageTitle
        title="Bilder fra dagen"
        nextLink={{
          to: `../${routes.wedding.qa}`,
          name: `Q+A`,
        }}
        backLink={{
          to: `../${routes.wedding.rsvp}`,
          name: `RSVP`,
        }}
        subtitle={[]}
      />
      <fetcher.Form
        method="post"
        encType="multipart/form-data"
        className="flex flex-col gap-4 items-center mb-4"
      >
        <Typography as="label" htmlFor="multiple_files">
          Last opp bilder og video
        </Typography>
        <input
          ref={inputRef}
          className="block
          file:mr-4 file:py-2 file:px-4
          file:border-0 file:text-md file:font-semibold
          file:cursor-pointer
          file:bg-gray-800 file:text-white
          text-md text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
          id="multiple_files"
          type="file"
          name="multiple_files"
          multiple
          onChange={(ev) => ev.target.files?.length && setCanSave(true)}
        />
        {canSave ? (
          <Button type="submit" pending={fetcher.state !== "idle"}>
            Last opp
          </Button>
        ) : null}
      </fetcher.Form>
      {!images.resources.length ? (
        <Typography className="text-center">
          Ingen bilder lagt til enda...
        </Typography>
      ) : (
        <>
          <Typography variant="h3" className="text-center mb-4">
            Bilder
          </Typography>
          <ImageLibrary
            pictures={images.resources.map((r) => ({
              imageUrl: r.public_id,
              imageAlt: `Opplastet bilde med id: ${r.asset_id}`,
            }))}
          />
        </>
      )}
      {videos.resources.length ? (
        <>
          <Typography variant="h3" className="mt-8 mb-4 text-center">
            Video
          </Typography>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 items-center">
            {videos.resources.map((v) => {
              const wideVideo = v.height < v.width;
              return (
                <video
                  controls
                  key={v.public_id}
                  className={wideVideo ? "col-span-2" : ""}
                >
                  <source src={v.secure_url} type={`video/${v.format}`} />
                </video>
              );
            })}
          </div>
        </>
      ) : (
        <Typography className="text-center">
          Ingen video lagt til enda...
        </Typography>
      )}
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  }
  return (
    <div>
      <h1>Unknown error</h1>
    </div>
  );
}
