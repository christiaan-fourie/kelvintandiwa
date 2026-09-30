import type { Metadata } from "next";
import { Gallery } from "../components/gallery";
import { Hero } from "../components/hero";
import { RevealObserver } from "../components/reveal-observer";
import { BuyButtons, CtaBand, SectionHeading } from "../components/shared";
import { heraldUrl, images } from "../components/site-data";

export const metadata: Metadata = { title: "About Kelvin Tadiwanashe", description: "Meet Kelvin Tadiwanashe, The Royal Doctor: Christian author, student leader, and proud Zimbabwean.", alternates: { canonical: "/about-us/" } };

export default function AboutPage() {
  return <>
    <main>
      <Hero compact image={images.seated} imageAlt="Kelvin Tadiwanashe seated, The Royal Doctor" imagePosition="70% 15%" eyebrow="ABOUT THE AUTHOR" title="Kelvin Tadiwanashe"><p>Christian author, student leader, and proud Zimbabwean, known as The Royal Doctor.</p></Hero>
      <section><div className="wrap about-grid">
        <div className="reveal"><p className="measure">Kelvin, affectionately known as <strong>The Royal Doctor</strong>, is a Christian author, student leader, and proud Zimbabwean whose passion for history, leadership, and national identity inspired his debut book, <em>This Is Our Country: Between Memory and Tomorrow</em>.</p><blockquote className="pullquote">&quot;A people who do not know what they carry cannot know what they owe.&quot;</blockquote><p className="measure">His love for literature first took root while serving as Head Boy at Direct Contact High School, where writing became more than an academic pursuit. It became a way of exploring ideas, preserving stories, and inspiring others. Alongside his passion for writing, Kelvin has long been fascinated by history, particularly biographies and the events that shape individuals, societies, and nations.</p><p className="measure body-gap">Through his writing, Kelvin invites readers to embrace their heritage, take responsibility for the present, and participate in shaping a hopeful tomorrow.</p></div>
        <div className="reveal"><ul className="facts"><li><b>Now</b><span>Final-year International Relations with French, University of Nottingham Malaysia</span></li><li><b>Leadership</b><span>Head of Ambassadors, International Students&apos; Bureau, leading a diverse team</span></li><li><b>Roots</b><span>Former Head Boy, Direct Contact High School</span></li><li><b>On campus</b><span>Known as &quot;the King of Africa&quot;</span></li><li><b>Faith</b><span>Christian author</span></li></ul><BuyButtons /></div>
      </div></section>
      <section className="section-alt"><div className="wrap"><SectionHeading eyebrow="FROM THE AUTHOR">On the launch.</SectionHeading><div className="article-teaser reveal"><span className="placeholder-tag">PLACEHOLDER ARTICLE</span><h3>Reflections on This Is Our Country&apos;s launch night</h3><p>[Placeholder: Kelvin&apos;s own words on the book launch go here, e.g. what the night meant to him, a note about the Guest of Honour, and what he hopes readers take from the book. Replace this paragraph with the real article text.]</p><a className="readmore" href="#journey">See More Pictures From The Launch</a></div></div></section>
      <section id="journey"><div className="wrap"><SectionHeading eyebrow="IN PICTURES">A few frames from the journey.</SectionHeading><Gallery /></div></section>
      <section className="section-alt"><div className="wrap"><div className="press-card reveal"><span className="press-label">IN THE NEWS</span><p>Kelvin was featured in <strong>The Herald</strong>: &quot;National pride at the heart of young author&apos;s new book.&quot;</p><a className="readmore" href={heraldUrl} target="_blank" rel="noopener noreferrer">Read The Feature</a></div></div></section>
    </main>
    <CtaBand /><RevealObserver />
  </>;
}
