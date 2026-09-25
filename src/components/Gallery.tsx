"use client";

import { useEffect, useRef, useState } from "react";
import type { Photo } from "@/data/profile";

/** Galerie de photos avec agrandissement au clic (flèches et Échap au clavier). */
export default function Gallery({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (index !== null && !d.open) d.showModal();
    if (index === null && d.open) d.close();
  }, [index]);

  const step = (dir: 1 | -1) =>
    setIndex((i) => (i === null ? i : (i + dir + photos.length) % photos.length));

  const current = index !== null ? photos[index] : null;

  return (
    <>
      <div className={`gallery count-${Math.min(photos.length, 3)}`}>
        {photos.map((ph, i) => (
          <button key={ph.src} type="button" className="thumb" onClick={() => setIndex(i)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ph.src} alt={ph.alt} loading="lazy" />
            {ph.caption && <span>{ph.caption}</span>}
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        onClose={() => setIndex(null)}
        onClick={(e) => e.target === e.currentTarget && setIndex(null)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
      >
        {current && (
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={current.src} alt={current.alt} />
            <figcaption>
              <span>{current.caption ?? current.alt}</span>
              <span className="lb-actions">
                {photos.length > 1 && (
                  <>
                    <button type="button" className="btn" onClick={() => step(-1)} aria-label="Photo précédente">
                      ←
                    </button>
                    <button type="button" className="btn" onClick={() => step(1)} aria-label="Photo suivante">
                      →
                    </button>
                  </>
                )}
                <button type="button" className="btn" onClick={() => setIndex(null)}>
                  Fermer
                </button>
              </span>
            </figcaption>
          </figure>
        )}
      </dialog>
    </>
  );
}
