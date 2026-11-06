
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ImageOff, X, ZoomIn } from "lucide-react";
import type { Shot } from "@/lib/data";

export default function Gallery({
  items,
  portrait = false,
}: {
  items: Shot[];
  portrait?: boolean;
}) {
  const [open, setOpen] = useState<Shot | null>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  const ratio = portrait ? "aspect-[3/4]" : "aspect-video";

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid gap-5 sm:grid-cols-2">
        {items.map((shot, index) => (
          <figure
            key={`${shot.caption}-${index}`}
            className="group overflow-hidden rounded-2xl border border-[#318192]/15 bg-white shadow-lg shadow-[#26382D]/[0.05] transition-all duration-500 hover:-translate-y-1 hover:border-[#6BC658]/50 hover:shadow-xl hover:shadow-[#26382D]/10"
          >
            {/* Image */}
            {shot.src ? (
              <button
                type="button"
                onClick={() => setOpen(shot)}
                aria-label={`Enlarge: ${shot.caption}`}
                className={`relative block w-full overflow-hidden bg-[#E7E8DA]/50 ${ratio}`}
              >
                <Image
                  src={shot.src}
                  alt={shot.caption}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                {/* Zoom indicator */}
                <span className="absolute bottom-3 right-3 flex items-center gap-2 rounded-full bg-[#26382D]/80 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
                  <ZoomIn size={14} />
                  View image
                </span>
              </button>
            ) : (
              <div
                className={`flex flex-col items-center justify-center gap-3 border-b border-dashed border-[#318192]/20 bg-[#E7E8DA]/50 text-[#318192] ${ratio}`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#318192]/10">
                  <ImageOff size={24} strokeWidth={1.5} />
                </div>

                <span className="text-sm font-medium">
                  Project documentation coming soon
                </span>
              </div>
            )}

            {/* Caption */}
            <figcaption className="flex items-start gap-3 p-4">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#6BC658]/15 text-xs font-bold text-[#438D3B]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="text-sm font-medium leading-relaxed text-[#26382D]/80">
                {shot.caption}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Fullscreen Image Viewer */}
      {open && open.src && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.caption}
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#26382D]/95 p-4 backdrop-blur-md"
        >
          {/* Close Button */}
          <button
            type="button"
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:rotate-90 hover:bg-[#F17585]"
            aria-label="Close image"
            onClick={() => setOpen(null)}
          >
            <X size={22} />
          </button>

          {/* Image and Caption */}
          <div
            className="flex max-h-[92vh] max-w-full flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={open.src}
              alt={open.caption}
              className="max-h-[82vh] max-w-full rounded-xl object-contain shadow-2xl"
            />

            <p className="max-w-2xl text-center text-sm font-medium text-white/80">
              {open.caption}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
