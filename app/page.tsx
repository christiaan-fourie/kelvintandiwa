import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "./components/carousel";
import { Hero } from "./components/hero";
import { RevealObserver } from "./components/reveal-observer";
import { CtaBand, BuyButtons, Quotes, SectionHeading } from "./components/shared";
import { heraldUrl, images } from "./components/site-data";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { title: "Kelvin Tadiwanashe | This Is Our Country", description: "Official site of Kelvin Tadiwanashe, The Royal Doctor. His debut book is available now.", url: "/" },
};

export default function Home() {
  return <>
    <main>
      <Hero image={images.jacketOff} imageAlt="Kelvin Tadiwanashe, The Royal Doctor" imagePosition="78% 15%" mobileImagePosition="32% 12%" badge="OUT NOW · LAUNCHED AUGUST 27, 2026" title={<>This Is Our Country<span className="title-sub">Between Memory and Tomorrow</span></>}>
        <p className="lede">Kelvin Tadiwanashe, The Royal Doctor, invites you into a conversation about Zimbabwe&apos;s past, present, and future. His debut book is officially launched and available now.</p>
        <div className="cta-row"><a className="btn btn-red" href="#get-the-book">Get The Book</a><Link className="btn btn-ghost" href="/book-launch">See The Launch</Link></div>
      </Hero>
      <section><div className="wrap book-feature reveal">
        <div className="book-photo lg"><Image src={images.book} alt="This Is Our Country book cover" width={1500} height={1499} sizes="320px" /></div>
        <div><span className="eyebrow">THE BOOK</span><h2 className="feature-title">A debut that asks what we owe the past, and each other.</h2><p className="measure">Through reflections on history, identity, leadership, and resilience, <em>This Is Our Country</em> invites every Zimbabwean to embrace their shared heritage and help build a hopeful tomorrow.</p><BuyButtons /></div>
      </div></section>
      <section className="section-alt"><div className="wrap"><SectionHeading eyebrow="PRESS">In the news.</SectionHeading><div className="press-list"><div className="press-card reveal"><span className="press-label">IN THE NEWS</span><p>Kelvin was featured in <strong>The Herald</strong>: &quot;National pride at the heart of young author&apos;s new book.&quot;</p><a className="readmore" href={heraldUrl} target="_blank" rel="noopener noreferrer">Read The Feature</a></div><div className="press-card reveal"><span className="press-label">IN THE NEWS</span><p><strong>Daily News</strong> covered Kelvin&apos;s literary debut in its 1 September 2026 arts section.</p><a className="readmore" href="/news/daily-news-literary-debut.jpeg" target="_blank" rel="noopener noreferrer">View The Clipping</a></div></div></div></section>
      <section><div className="wrap"><SectionHeading eyebrow="FROM THE BOOK">In his own words.</SectionHeading><Quotes /></div></section>
      <section className="section-alt"><div className="wrap"><SectionHeading eyebrow="WHAT HE WRITES ABOUT">Three threads running through every page.</SectionHeading><div className="feature-grid reveal"><div className="feature"><div className="ficon">H</div><h3>History &amp; Memory</h3><p>A lifelong student of how people are made: what shapes a life, a nation, a memory.</p></div><div className="feature"><div className="ficon">L</div><h3>Leadership</h3><p>Head of Ambassadors on the International Students&apos; Bureau, leading a diverse team.</p></div><div className="feature"><div className="ficon">Z</div><h3>Zimbabwean Identity</h3><p>A proud Zimbabwean known among friends as &quot;the King of Africa.&quot;</p></div></div></div></section>
      <section><div className="wrap"><SectionHeading eyebrow="IN PICTURES">A few frames from the journey.</SectionHeading><Carousel /></div></section>
    </main>
    <CtaBand /><RevealObserver />
  </>;
}
