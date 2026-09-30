"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { images } from "./site-data";

const links = [["/", "HOME"], ["/about-us", "ABOUT"], ["/book-launch", "BOOK LAUNCH"], ["/blog", "BLOG"], ["/contact", "CONTACT"]] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    const frame = window.requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${open ? " menu-open" : ""}`} onKeyDown={(event) => { if (event.key === "Escape") setOpen(false); }}>
      <div className="wrap headerbar">
        <Link className="brand" href="/" aria-label="Kelvin Tadiwanashe, home">
          <Image className="brand-mark" src={images.favicon} alt="" width={50} height={50} priority />
          <span className="name-block">
            <span className="brand-name">Kelvin Tadiwanashe</span>
            <span className="tagline">THE ROYAL DOCTOR · AUTHOR</span>
          </span>
        </Link>
        <nav aria-label="Primary navigation">
          <ul className={`navlinks${open ? " open" : ""}`} id="primary-navigation">
            {links.map(([href, label]) => {
              const current = href === "/" ? pathname === "/" : pathname.startsWith(href);
              return <li key={href}><Link className={current ? "current" : ""} href={href} aria-current={current ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link></li>;
            })}
          </ul>
        </nav>
        <button className="navtoggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-controls="primary-navigation" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
