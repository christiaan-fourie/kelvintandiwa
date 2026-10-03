import Link from "next/link";
import { instagramUrl, linkedinUrl } from "./site-data";

const links = [["/", "Home"], ["/about-us", "About"], ["/book-launch", "Book Launch"], ["/blog", "Blog"], ["/contact", "Contact"]] as const;

export function Footer() {
  return (
    <footer className="site-footer"><div className="wrap">
      <ul className="footlinks">{links.map(([href, label]) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul>
      <ul className="footlinks" aria-label="Social profiles">
        <li><a href={instagramUrl} target="_blank" rel="noopener noreferrer">Instagram</a></li>
        <li><a href={linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      </ul>
      <p>© 2026 Kelvin Tadiwanashe. All Rights Reserved.</p>
    </div></footer>
  );
}
