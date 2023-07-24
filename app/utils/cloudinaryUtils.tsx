import type { ResourceApiResponse, UploadApiResponse } from "cloudinary";
import cloudinary from "cloudinary";
import { writeAsyncIterableToWritable } from "@remix-run/node";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImage(
  data: AsyncIterable<Uint8Array>,
  contentType: string
) {
  const resource_type = contentType.startsWith("video") ? "video" : "image";
  // Invalidate cache
  if (resource_type === "video") {
    cachedVideos = undefined;
  } else {
    cachedImages = undefined;
  }
  const uploadPromise = new Promise<UploadApiResponse>(
    async (resolve, reject) => {
      const uploadStream = cloudinary.v2.uploader.upload_stream(
        {
          folder: "remixImages",
          resource_type,
        },
        (error, result) => {
          if (error || !result) {
            reject(error);
            return;
          }
          resolve(result);
        }
      );
      await writeAsyncIterableToWritable(data, uploadStream);
    }
  );
  return uploadPromise;
}

let cachedImages: ResourceApiResponse | undefined = undefined;
export async function getImages() {
  if (cachedImages) {
    return Promise.resolve(cachedImages);
  }
  return new Promise<ResourceApiResponse>((resolve, reject) => {
    cloudinary.v2.api.resources(
      { type: "upload", prefix: "remixImages", max_results: 100 },
      (error, result) => {
        if (error) {
          reject(error);
          return;
        }
        cachedImages = result;
        resolve(result);
      }
    );
  });
}

let cachedVideos: ResourceApiResponse | undefined = undefined;
export async function getVideos() {
  if (cachedVideos) {
    return Promise.resolve(cachedVideos);
  }
  return new Promise<ResourceApiResponse>((resolve, reject) => {
    cloudinary.v2.api.resources(
      {
        type: "upload",
        prefix: "remixImages",
        resource_type: "video",
        max_results: 20,
      },
      (error, result) => {
        if (error) {
          reject(error);
          return;
        }
        cachedVideos = result;
        resolve(result);
      }
    );
  });
}
