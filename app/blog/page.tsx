import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hero } from "../components/hero";
import { RevealObserver } from "../components/reveal-observer";
import { CtaBand } from "../components/shared";
import { heraldUrl, images } from "../components/site-data";

export const metadata: Metadata = { title: "Blog", description: "Notes from Kelvin Tadiwanashe, The Royal Doctor, on history, leadership, and Zimbabwe.", alternates: { canonical: "/blog/" } };

export default function BlogPage() {
  return <>
    <main><Hero compact image={images.jacketOff} imageAlt="Kelvin Tadiwanashe" imagePosition="75% 15%" mobileImagePosition="50% 12%" eyebrow="BLOG" title="Notes From The Royal Doctor"><p>Writing on history, leadership, and the long road to <em>This Is Our Country</em>.</p></Hero>
      <section><div className="wrap"><div className="blog-grid reveal">
        <article className="post"><span className="tag">FROM THE AUTHOR</span><h2>Reflections on This Is Our Country’s Launch Night</h2><p>A shared moment made possible by the people who carried the book from manuscript to launch.</p><Link className="readmore" href="/blog/reflections-on-launch-night">Read More</Link></article>
        <article className="post"><span className="tag">FROM THE AUTHOR</span><h2>When a Book Finds Its People</h2><p>On the publication journey and finding people prepared to meet the work at the level of its questions.</p><Link className="readmore" href="/blog/when-a-book-finds-its-people">Read More</Link></article>
        <article className="post"><span className="tag">FROM THE AUTHOR</span><h2>The Pause Before We Say Zimbabwe</h2><p>On the stories we inherit about home and the responsibility to speak with accuracy and dignity.</p><Link className="readmore" href="/blog/the-pause-before-we-say-zimbabwe">Read More</Link></article>
        <article className="post"><span className="tag">FROM THE AUTHOR</span><h2>The Land Remembers: The Story Behind This Is Our Country</h2><p>I did not grow up thinking of myself as a lover of literature. Nor did I imagine that I would one day write a book.</p><Link className="readmore" href="/blog/the-land-remembers">Read More</Link></article>
        <article className="post"><span className="tag">IN THE NEWS</span><h2>Featured in The Herald</h2><p>&quot;National pride at the heart of young author&apos;s new book&quot;: read the full feature.</p><a className="readmore" href={heraldUrl} target="_blank" rel="noopener noreferrer">Read More</a></article>
        <article className="post"><span className="tag">IN THE NEWS · 1 SEPTEMBER 2026</span><h2>Tadiwanashe makes literary debut</h2><p>Daily News featured Kelvin and the launch of <em>This Is Our Country</em> in its arts section.</p><a className="news-clipping" href="/news/daily-news-literary-debut.jpeg" target="_blank" rel="noopener noreferrer" aria-label="Open the Daily News clipping at full size"><Image src="/news/daily-news-literary-debut.jpeg" alt="Daily News arts page featuring the article Tadiwanashe makes literary debut" width={720} height={1056} sizes="(max-width: 860px) 100vw, 33vw" /></a><a className="readmore" href="/news/daily-news-literary-debut.jpeg" target="_blank" rel="noopener noreferrer">View The Clipping</a></article>
      </div></div></section>
    </main><CtaBand /><RevealObserver />
  </>;
}
