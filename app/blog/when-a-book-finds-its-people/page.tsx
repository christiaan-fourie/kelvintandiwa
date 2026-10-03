import type { Metadata } from "next";
import { RevealObserver } from "../../components/reveal-observer";
import { BackToBlog, CtaBand } from "../../components/shared";

export const metadata: Metadata = {
  title: "When a Book Finds Its People",
  description: "Kelvin reflects on the publication journey of This Is Our Country and finding a team that understood the manuscript.",
  alternates: { canonical: "/blog/when-a-book-finds-its-people/" },
};

export default function ArticlePage() {
  return <>
    <main>
      <header className="pagehero-simple"><div className="wrap article-wrap"><span className="eyebrow">FROM THE AUTHOR</span><h1>When a Book Finds Its People</h1><p className="article-byline">By Kelvin Tadiwanashe, The Royal Doctor</p></div></header>
      <article className="section"><div className="wrap post-body reveal">
        <p>Some places are spoken about so often that people stop looking at them closely. They become headlines, assumptions, symbols, or stories told by people who have never had to carry their weight.</p>
        <p><em>This Is Our Country</em> began with a different question: what becomes visible when we look again?</p>
        <p>The manuscript lived with me for a long time. It was shaped by questions about memory, belonging, identity, and people&apos;s responsibility to the places they call home. I did not want those questions to disappear behind a cover or be reduced to an easy message. I wanted the book to hold them, honestly.</p>
        <p>I had self-published before, and I knew that determination could bring a book a long way. But this time, I was looking for more than a route to publication. I was looking for people prepared to meet the work at the level of its questions.</p>
        <p>That is what I found with Bespoken Publishing.</p>
        <p>When the team presented the first cover concept, they did not reach for an expected image. They chose a magnifying glass, a fingerprint, and the outline of a country: a visual language of attention, identity, and belonging. Their response showed me they hadn&apos;t simply read the manuscript for its subject. They had listened for what it was trying to see.</p>
        <p>That distinction mattered.</p>
        <p>A good publishing team does more than correct, design, print, and distribute. At its best, it gives a writer the rare relief of knowing that the work has been met with care. Not everyone will agree with a book. They should not have to. But every serious book deserves to be encountered beyond its surface.</p>
        <p>For those carrying unfinished manuscripts, I have learned this: uncertainty is not always proof that a work should be abandoned. Sometimes it means the work is asking for more patience, more honesty, or a clearer form. Return to the pages. Finish what you can. Then allow trusted people to help you see what you may not yet be able to see alone.</p>
        <p>Writing begins privately. A book begins to live when its questions find other people willing to sit with them.</p>
        <BackToBlog />
      </div></article>
    </main>
    <CtaBand /><RevealObserver />
  </>;
}
