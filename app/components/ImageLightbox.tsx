import { useEffect } from "react";

import { IconButton } from "./IconButton";
import { Close } from "./icons/Close";
import { LeftArrow } from "./icons/LeftArrow";
import { RightArrow } from "./icons/RightArrow";

interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
  dialogRef: React.RefObject<HTMLDialogElement | null>;
}

export const ImageLightbox = ({
  images,
  currentIndex,
  onClose,
  onNavigate,
  dialogRef,
}: ImageLightboxProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!dialogRef.current?.open) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, images.length, onClose, onNavigate, dialogRef]);

  // Preload adjacent images
  useEffect(() => {
    if (!dialogRef.current?.open || images.length === 0) return;

    const preloadImage = (index: number) => {
      if (index >= 0 && index < images.length) {
        const img = new Image();
        img.src = images[index]!;
      }
    };

    // Preload next and previous images
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;

    preloadImage(nextIndex);
    preloadImage(prevIndex);
  }, [currentIndex, images, dialogRef]);

  const handlePrevious = () => {
    onNavigate(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    onNavigate(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <dialog
      ref={dialogRef}
      className="bg-opacity-95 fixed inset-0 m-0 h-screen max-h-full w-screen max-w-full bg-black p-0 backdrop:bg-black backdrop:opacity-90"
      aria-label="Image lightbox"
      onClick={(e) => {
        if (!dialogRef.current) return;
        const dialogDimensions = dialogRef.current.getBoundingClientRect();
        if (
          e.clientX < dialogDimensions.left ||
          e.clientX > dialogDimensions.right ||
          e.clientY < dialogDimensions.top ||
          e.clientY > dialogDimensions.bottom
        ) {
          onClose();
        }
      }}
    >
      <div className="relative flex h-full w-full items-center justify-center p-4">
        {/* Close button */}
        <IconButton
          onClick={onClose}
          type="button"
          aria-label="Close lightbox"
          className="absolute top-4 right-4 z-10 bg-white hover:bg-gray-100"
        >
          <Close />
        </IconButton>

        {/* Previous button */}
        <IconButton
          onClick={handlePrevious}
          type="button"
          aria-label="Previous image"
          className="absolute top-1/2 left-4 z-10 -translate-y-1/2 bg-white hover:bg-gray-100"
        >
          <LeftArrow />
        </IconButton>

        {/* Image */}
        <div className="flex max-h-full max-w-full flex-col items-center justify-center">
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1} of ${images.length}`}
            className="max-h-[calc(100vh-8rem)] max-w-full object-contain"
            loading="eager"
          />

          {/* Image counter */}
          <div className="mt-4 text-lg font-medium text-white">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Next button */}
        <IconButton
          onClick={handleNext}
          type="button"
          aria-label="Next image"
          className="absolute top-1/2 right-4 z-10 -translate-y-1/2 bg-white hover:bg-gray-100"
        >
          <RightArrow />
        </IconButton>
      </div>
    </dialog>
  );
};
