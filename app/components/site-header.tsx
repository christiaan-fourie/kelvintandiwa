"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { images } from "./site-data";

const links = [["/", "HOME"], ["/about-us", "ABOUT"], ["/book-launch", "BOOK LAUNCH"], ["/blog", "BLOG"], ["/contact", "CONTACT"]] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback((restoreFocus = false) => {
    setOpen(false);
    if (restoreFocus) window.requestAnimationFrame(() => toggle.current?.focus());
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    const frame = window.requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setOpen(false));
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const desktop = window.matchMedia("(min-width: 841px)");
    const handlePointerDown = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) closeMenu(true);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu(true);
    };
    const handleDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) closeMenu();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    desktop.addEventListener("change", handleDesktop);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
      desktop.removeEventListener("change", handleDesktop);
    };
  }, [closeMenu, open]);

  return (
    <header ref={header} className={`site-header${scrolled ? " is-scrolled" : ""}${open ? " menu-open" : ""}`}>
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
              return <li key={href}><Link className={current ? "current" : ""} href={href} aria-current={current ? "page" : undefined} onClick={() => closeMenu()}>{label}</Link></li>;
            })}
          </ul>
        </nav>
        <button ref={toggle} className="navtoggle" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-controls="primary-navigation" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
