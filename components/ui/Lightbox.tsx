"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";
import { Emblem } from "./Emblem";

export type LightboxImage = { src: string; alt: string };

/**
 * Lightweight lightbox on the native <dialog> element: focus trapping, Esc to close and
 * the backdrop come free from the browser. Arrow keys / buttons navigate.
 */
export function Lightbox({
  images,
  index,
  onClose,
  onIndex,
}: {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const open = index !== null;
  const current = index !== null ? images[index] : undefined;

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  const go = useCallback(
    (dir: 1 | -1) => {
      if (index === null || images.length === 0) return;
      onIndex((index + dir + images.length) % images.length);
    },
    [index, images.length, onIndex],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      aria-label="Image viewer"
      className="lightbox m-auto h-full max-h-none w-full max-w-none bg-transparent p-0 text-white"
    >
      {current ? (
        <div className="relative flex h-full w-full items-center justify-center p-4 sm:p-12">
          <Emblem className="absolute w-16 animate-pulse opacity-40" />
          <div className="relative h-full max-h-[85vh] w-full max-w-6xl">
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              fill
              sizes="100vw"
              quality={75}
              className="object-contain"
            />
          </div>
          <p className="absolute inset-x-0 bottom-3 px-16 text-center text-sm text-white/80">
            {current.alt} · {(index ?? 0) + 1} / {images.length}
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close image viewer"
            autoFocus
            className="absolute top-3 right-3 grid size-12 place-items-center bg-brand-red text-white hover:bg-brand-red-dark"
          >
            <X className="size-6" />
          </button>
          {images.length > 1 ? (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous image"
                className="absolute top-1/2 left-2 grid size-12 -translate-y-1/2 place-items-center bg-black/60 hover:bg-brand-red sm:left-4"
              >
                <ChevronLeft className="size-7" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next image"
                className="absolute top-1/2 right-2 grid size-12 -translate-y-1/2 place-items-center bg-black/60 hover:bg-brand-red sm:right-4"
              >
                <ChevronRight className="size-7" />
              </button>
            </>
          ) : null}
        </div>
      ) : null}
    </dialog>
  );
}
