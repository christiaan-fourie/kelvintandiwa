import Image from "next/image";
import type { ReactNode } from "react";

type HeroProps = { image: string; imageAlt: string; imagePosition?: string; compact?: boolean; eyebrow?: string; badge?: string; title: ReactNode; children?: ReactNode };

export function Hero({ image, imageAlt, imagePosition = "center 18%", compact, eyebrow, badge, title, children }: HeroProps) {
  return (
    <section className={`banner${compact ? " banner-sm" : ""}`}>
      <Image className="banner-image" src={image} alt={imageAlt} fill sizes="100vw" style={{ objectPosition: imagePosition }} priority />
      <div className="wrap banner-content">
        {badge && <span className="badge">{badge}</span>}
        {eyebrow && <span className="eyebrow hero-eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  );
}
