import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

type HeroProps = { image: string; imageAlt: string; imagePosition?: string; mobileImagePosition?: string; compact?: boolean; eyebrow?: string; badge?: string; title: ReactNode; children?: ReactNode };

export function Hero({ image, imageAlt, imagePosition = "center 18%", mobileImagePosition, compact, eyebrow, badge, title, children }: HeroProps) {
  const style = {
    "--hero-position": imagePosition,
    "--hero-position-mobile": mobileImagePosition ?? imagePosition,
  } as CSSProperties;

  return (
    <section className={`banner${compact ? " banner-sm" : ""}`} style={style}>
      <Image className="banner-image" src={image} alt={imageAlt} fill sizes="100vw" priority />
      <div className="wrap banner-content">
        {badge && <span className="badge">{badge}</span>}
        {eyebrow && <span className="eyebrow hero-eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  );
}
