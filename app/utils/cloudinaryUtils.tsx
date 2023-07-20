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
  const uploadPromise = new Promise<UploadApiResponse>(
    async (resolve, reject) => {
      const uploadStream = cloudinary.v2.uploader.upload_stream(
        {
          folder: "remixImages",
          resource_type: contentType.startsWith("video") ? "video" : "image",
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

export async function getImages() {
  return new Promise<ResourceApiResponse>((resolve, reject) => {
    cloudinary.v2.api.resources(
      { type: "upload", prefix: "remixImages" },
      (error, result) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(result);
      }
    );
  });
}

export async function getVideos() {
  return new Promise<ResourceApiResponse>((resolve, reject) => {
    cloudinary.v2.api.resources(
      { type: "upload", prefix: "remixImages", resource_type: "video" },
      (error, result) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(result);
      }
    );
  });
}
