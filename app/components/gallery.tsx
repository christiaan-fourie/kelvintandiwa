"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { galleryImages, type GalleryImage } from "./site-data";

export function Gallery({ items = galleryImages, variant = "portrait" }: { items?: readonly GalleryImage[]; variant?: "portrait" | "launch" }) {
  const [current, setCurrent] = useState<number | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const open = current !== null;

  const close = useCallback(() => {
    setCurrent(null);
    window.setTimeout(() => trigger.current?.focus(), 0);
  }, []);
  const step = useCallback((direction: number) => setCurrent((index) => index === null ? null : (index + direction + items.length) % items.length), [items.length]);

  useEffect(() => {
    if (!open) return;
    closeButton.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
      if (event.key === "Tab" && dialog.current) {
        const controls = Array.from(dialog.current.querySelectorAll<HTMLElement>("button:not([disabled])"));
        const first = controls[0];
        const last = controls.at(-1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = ""; document.removeEventListener("keydown", onKeyDown); };
  }, [close, open, step]);

  return (
    <>
      <div className={`gallery-grid reveal${variant === "launch" ? " launch-gallery" : ""}`}>
        {items.map((item, index) => (
          <button className="gitem" type="button" key={item.src} onClick={(event) => { trigger.current = event.currentTarget; setCurrent(index); }}>
            <Image src={item.src} alt={item.alt} fill sizes="(max-width: 760px) 50vw, 33vw" />
            <span className="gcap">{item.title}</span>
          </button>
        ))}
      </div>
      {current !== null && (
        <div className="lightbox open" role="dialog" aria-modal="true" aria-label="Photo viewer" onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
          <div className="lightbox-inner" ref={dialog}>
            <button ref={closeButton} className="lightbox-close-btn" type="button" aria-label="Close" onClick={close}>✕</button>
            <div className="lb-frame">
              <Image src={items[current].src} alt={items[current].alt} width={1200} height={900} sizes="(max-width: 700px) 100vw, 640px" />
              <div className="lb-nav">
                <button className="lb-prev" type="button" aria-label="Previous" onClick={() => step(-1)}>‹</button>
                <button className="lb-next" type="button" aria-label="Next" onClick={() => step(1)}>›</button>
              </div>
            </div>
            <div className="lb-caption"><h3>{items[current].title}</h3><p>{items[current].description}</p></div>
          </div>
        </div>
      )}
    </>
  );
}
