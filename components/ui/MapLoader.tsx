"use client";

import { useState, type ReactNode } from "react";

/** Shows the server-rendered facade (children) until clicked, then swaps in the map iframe. */
export function MapLoader({
  src,
  title,
  children,
}: {
  src: string;
  title: string;
  children: ReactNode;
}) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        src={src}
        title={title}
        className="absolute inset-0 h-full w-full border-0 grayscale-[0.4]"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    );
  }
  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      className="group absolute inset-0 flex flex-col items-center justify-center gap-4 text-center"
    >
      {children}
    </button>
  );
}
