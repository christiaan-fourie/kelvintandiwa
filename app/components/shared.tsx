import Link from "next/link";
import type { ReactNode } from "react";
import { publisherUrl } from "./site-data";

export function SectionHeading({ eyebrow, children }: { eyebrow: string; children: ReactNode }) {
  return <div className="section-head reveal"><span className="eyebrow">{eyebrow}</span><h2>{children}</h2></div>;
}

export function BuyButtons({ direct = false }: { direct?: boolean }) {
  return <div className="buy-row"><a className="btn btn-red" href={direct ? publisherUrl : "#get-the-book"} target={direct ? "_blank" : undefined} rel={direct ? "noopener noreferrer" : undefined}>Get the Book</a><a className="btn btn-outline-dark" href={publisherUrl} target="_blank" rel="noopener noreferrer">Publisher&apos;s Site</a></div>;
}

export function Quotes() {
  const quotes = ["A people who do not know what they carry cannot know what they owe.", "Belonging is not a gift. It is a duty.", "This is our country. Its wounds are ours to heal. Its gifts are ours to cultivate. Its future is ours to determine."];
  return <div className="quote-grid reveal">{quotes.map((quote) => <blockquote className="quote-card" key={quote}><p>“{quote}”</p><cite>This Is Our Country</cite></blockquote>)}</div>;
}

export function CtaBand() {
  return <section className="ctaband" id="get-the-book"><div className="wrap"><h2><em>This Is Our Country</em> is officially launched. Get your copy today.</h2><a className="btn" href={publisherUrl} target="_blank" rel="noopener noreferrer">Get The Book</a></div></section>;
}

export function BackToBlog() {
  return <div className="cta-row"><Link className="btn btn-outline-dark" href="/blog">Back To Blog</Link></div>;
}
