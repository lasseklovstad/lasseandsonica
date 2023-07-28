import type { ResourceApiResponse, UploadApiResponse } from "cloudinary";
import cloudinary from "cloudinary";
import { writeAsyncIterableToWritable } from "@remix-run/node";

const cloudinarySecret = {
  "lasse.klovstad": {
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  },
  lklov_50: {
    cloud_name: process.env.CLOUDINARY_NAME_1,
    api_key: process.env.CLOUDINARY_API_KEY_1,
    api_secret: process.env.CLOUDINARY_API_SECRET_1,
  },
};

function cloudinaryConfig() {
  cloudinary.v2.config(cloudinarySecret[adminForm.cloudinarySecret]);
}

export function getCurrentCloudName() {
  return cloudinarySecret[adminForm.cloudinarySecret].cloud_name;
}

function resetCache() {
  cachedImages = undefined;
  cachedVideos = undefined;
}

export async function uploadImage(
  data: AsyncIterable<Uint8Array>,
  contentType: string
) {
  cloudinaryConfig();
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
  cloudinaryConfig();
  if (cachedImages) {
    return Promise.resolve(cachedImages);
  }
  return new Promise<ResourceApiResponse>((resolve, reject) => {
    cloudinary.v2.api.resources(
      {
        type: "upload",
        prefix: "remixImages",
        max_results: adminForm.maxResultsImage,
      },
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
  cloudinaryConfig();
  if (cachedVideos) {
    return Promise.resolve(cachedVideos);
  }
  return new Promise<ResourceApiResponse>((resolve, reject) => {
    cloudinary.v2.api.resources(
      {
        type: "upload",
        prefix: "remixImages",
        resource_type: "video",
        max_results: adminForm.maxResultsVideo,
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

type Usage = {
  credits: { usage: number; limit: number; used_percent: number };
  rate_limit_allowed: number;
  rate_limit_remaining: number;
  rate_limit_reset_at: string;
};

export async function getUsage() {
  cloudinaryConfig();
  return new Promise<Usage>((resolve, reject) => {
    cloudinary.v2.api.usage((error, result) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(result);
    });
  });
}

export type AdminForm = {
  cloudinarySecret: "lasse.klovstad" | "lklov_50";
  maxResultsVideo: number;
  maxResultsImage: number;
};

let adminForm: AdminForm = {
  cloudinarySecret: "lasse.klovstad",
  maxResultsImage: 100,
  maxResultsVideo: 20,
};
export function getAdminForm() {
  return adminForm;
}

export function postAdminForm(newAdminForm: AdminForm) {
  resetCache();
  adminForm = newAdminForm;
}
