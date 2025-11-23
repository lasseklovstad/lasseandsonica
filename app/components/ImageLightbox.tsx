import { useEffect, useRef } from "react";
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
            className="fixed inset-0 m-0 h-screen w-screen max-h-full max-w-full p-0 bg-black bg-opacity-95 backdrop:bg-black backdrop:opacity-90"
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
            <div className="relative h-full w-full flex items-center justify-center p-4">
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
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100"
                >
                    <LeftArrow />
                </IconButton>

                {/* Image */}
                <div className="flex flex-col items-center justify-center max-w-full max-h-full">
                    <img
                        src={images[currentIndex]}
                        alt={`Image ${currentIndex + 1} of ${images.length}`}
                        className="max-w-full max-h-[calc(100vh-8rem)] object-contain"
                        loading="eager"
                    />

                    {/* Image counter */}
                    <div className="mt-4 text-white text-lg font-medium">
                        {currentIndex + 1} / {images.length}
                    </div>
                </div>

                {/* Next button */}
                <IconButton
                    onClick={handleNext}
                    type="button"
                    aria-label="Next image"
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-100"
                >
                    <RightArrow />
                </IconButton>
            </div>
        </dialog>
    );
};
