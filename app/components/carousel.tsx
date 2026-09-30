"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { galleryImages } from "./site-data";

export function Carousel() {
  const [current, setCurrent] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const stop = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
  }, []);

  const restart = useCallback(() => {
    stop();
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      timer.current = setInterval(() => setCurrent((index) => (index + 1) % galleryImages.length), 4500);
    }
  }, [stop]);

  useEffect(() => {
    restart();
    return () => { if (timer.current) clearInterval(timer.current); };
  }, [restart]);

  const show = (index: number) => {
    setCurrent((index + galleryImages.length) % galleryImages.length);
    restart();
  };

  return (
    <div className="reveal">
      <div className="carousel" aria-roledescription="carousel" aria-label="Portraits of Kelvin Tadiwanashe" onMouseEnter={stop} onMouseLeave={restart} onFocusCapture={stop} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) restart(); }}>
        {galleryImages.map((item, index) => (
          <div className={`slide${index === current ? " active" : ""}`} aria-hidden={index !== current} key={item.src}>
            <Image src={item.src} alt={item.alt} fill sizes="(max-width: 700px) 100vw, 640px" />
          </div>
        ))}
        <button className="carousel-arrow prev" type="button" aria-label="Previous photo" onClick={() => show(current - 1)}>‹</button>
        <button className="carousel-arrow next" type="button" aria-label="Next photo" onClick={() => show(current + 1)}>›</button>
      </div>
      <div className="carousel-dots">
        {galleryImages.map((item, index) => <button className={index === current ? "active" : ""} type="button" aria-label={`Go to slide ${index + 1}`} aria-current={index === current} onClick={() => show(index)} key={item.src} />)}
      </div>
    </div>
  );
}
