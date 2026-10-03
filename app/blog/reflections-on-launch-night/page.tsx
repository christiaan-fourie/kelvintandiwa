import type { Metadata } from "next";
import { RevealObserver } from "../../components/reveal-observer";
import { BackToBlog, CtaBand } from "../../components/shared";

export const metadata: Metadata = {
  title: "Reflections on This Is Our Country’s Launch Night",
  description: "Kelvin reflects on the people who helped bring This Is Our Country to its launch night.",
  alternates: { canonical: "/blog/reflections-on-launch-night/" },
};

export default function ArticlePage() {
  return <>
    <main>
      <header className="pagehero-simple"><div className="wrap article-wrap"><span className="eyebrow">FROM THE AUTHOR</span><h1>Reflections on This Is Our Country’s Launch Night</h1><p className="article-byline">By Kelvin Tadiwanashe, The Royal Doctor</p></div></header>
      <article className="section"><div className="wrap post-body reveal">
        <p>The launch night gave me a moment to see what this book has always been about: no meaningful story, achievement, or future is built by one person alone.</p>
        <p>I thought of Be Spoken, who gave the manuscript a home; Mr Khumalo, whose belief encouraged me; Auntie Vickie and the team, who carried every detail with care; and my family, whose prayers began long before there was anything public to celebrate.</p>
        <p>I was honoured by the presence of the Honourable Tino Machakaire, Chief Seke, and everyone who came to stand with us. Their presence made the evening feel less like a personal milestone and more like a shared moment.</p>
        <p>I wrote the book, but launch night reminded me that no meaningful work is carried by one person alone.</p>
        <BackToBlog />
      </div></article>
    </main>
    <CtaBand /><RevealObserver />
  </>;
}
