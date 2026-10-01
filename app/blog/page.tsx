import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "../components/hero";
import { RevealObserver } from "../components/reveal-observer";
import { CtaBand } from "../components/shared";
import { heraldUrl, images } from "../components/site-data";

export const metadata: Metadata = { title: "Blog", description: "Notes from Kelvin Tadiwanashe, The Royal Doctor, on history, leadership, and Zimbabwe.", alternates: { canonical: "/blog/" } };

export default function BlogPage() {
  return <>
    <main><Hero compact image={images.jacketOff} imageAlt="Kelvin Tadiwanashe" imagePosition="75% 15%" mobileImagePosition="50% 12%" eyebrow="BLOG" title="Notes From The Royal Doctor"><p>Writing on history, leadership, and the long road to <em>This Is Our Country</em>.</p></Hero>
      <section><div className="wrap"><div className="blog-grid reveal"><article className="post"><span className="tag">IN THE NEWS</span><h2>Featured in The Herald</h2><p>&quot;National pride at the heart of young author&apos;s new book&quot;: read the full feature.</p><a className="readmore" href={heraldUrl} target="_blank" rel="noopener noreferrer">Read More</a></article><article className="post"><span className="tag">FROM THE AUTHOR</span><h2>The Land Remembers: The Story Behind This Is Our Country</h2><p>I did not grow up thinking of myself as a lover of literature. Nor did I imagine that I would one day write a book.</p><Link className="readmore" href="/blog/the-land-remembers">Read More</Link></article></div></div></section>
    </main><CtaBand /><RevealObserver />
  </>;
}
