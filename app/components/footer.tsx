import Link from "next/link";

const links = [["/", "Home"], ["/about-us", "About"], ["/book-launch", "Book Launch"], ["/blog", "Blog"], ["/contact", "Contact"]] as const;

export function Footer() {
  return (
    <footer className="site-footer"><div className="wrap">
      <ul className="footlinks">{links.map(([href, label]) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul>
      <p>© 2026 Kelvin Tadiwanashe. All Rights Reserved.</p>
    </div></footer>
  );
}
