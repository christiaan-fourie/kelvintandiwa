import type { Metadata } from "next";
import { RevealObserver } from "../../components/reveal-observer";
import { BackToBlog, CtaBand } from "../../components/shared";

export const metadata: Metadata = {
  title: "The Land Remembers: The Story Behind This Is Our Country",
  description: "How a prescribed novel, family stories, and distance from home became a book about Zimbabwe, belonging, and courage.",
  alternates: { canonical: "/blog/the-land-remembers/" },
};

export default function ArticlePage() {
  return <>
    <main>
      <header className="pagehero-simple"><div className="wrap article-wrap"><span className="eyebrow">FROM THE AUTHOR</span><h1>The Land Remembers: The Story Behind This Is Our Country</h1><p className="article-deck">How a prescribed novel, my grandmother&apos;s stories, and distance from home became a book about Zimbabwe, belonging, and courage.</p><p className="article-byline">By Kelvin Tadiwanashe, The Royal Doctor</p></div></header>
      <article className="section"><div className="wrap post-body reveal">
        <p>I did not grow up thinking of myself as a lover of literature. Nor did I imagine that I would one day write a book.</p>
        <p>In 2019, when I was fifteen, I studied Alan Paton&apos;s <em>Cry, the Beloved Country</em> as a prescribed text at school. At first, it was simply an assignment. But somewhere in its grief and its questions, it stopped being a story about another country. It made me see myself differently.</p>
        <p>I began to sense that something was slipping away, not only opportunity but also a sense of attachment. Disappointment, hardship, and conversations about leaving were everywhere. Those feelings were real. Yet another question stayed with me: what becomes of a country when its people no longer feel responsible for its future?</p>
        <p>I did not have an answer then. I only knew that the question would not leave me.</p>
        <p>My late grandmother had always told us stories from the liberation war. As children, we sometimes found them amusing. We did not always understand their weight. Yet I remember the pride in her voice, the way she paused before the difficult parts, as though she were still deciding whether we were old enough to hear them.</p>
        <p>As I grew older, I understood that she was not merely recounting the past. She was carrying memory: sacrifice, endurance, and the belief that Zimbabwe was worth fighting for.</p>
        <p>That changed how I read history. It was no longer a list of dates, names, and examination topics. It became an inheritance.</p>
        <p>People who do not know where they come from may struggle to understand what they owe one another, to their country, and to the future. History does not demand that we live in the past. It asks us to recognise that we inherited a country shaped by people whose hopes extended beyond their own lives.</p>
        <p>Belonging is not a gift. It is a responsibility.</p>
        <p>That responsibility does not mean pretending that Zimbabwe has no problems. It does not mean asking citizens to accept poor governance, corruption, hardship, or institutions that fail the people they are meant to serve.</p>
        <p>A government exists to serve its people, and it must fulfil that duty with accountability, competence, and dignity. Citizens have every right to demand better.</p>
        <p>Yet national renewal cannot be left to government alone. A country is also shaped by the conduct of its people: how we learn, work, create, treat one another, and respond when institutions, plans, or expectations fail.</p>
        <p>Patriotism is not applause. It is not silence. It is the courage to love a country enough to tell the truth about it, and to remain committed to improving it.</p>
        <p>I found the courage to write this book while I was far from Zimbabwe. Distance makes ordinary questions heavier. One of the first things people ask is, “Where are you from?” Each time I answered, “Zimbabwe,” I felt both pride and responsibility, a small jolt, as if the word itself were asking something of me.</p>
        <p>Leaving home does not always mean abandoning it. People leave for education, work, safety, and family. There is no shame in seeking opportunity. But distance should not become detachment.</p>
        <p>The question is not whether every Zimbabwean must remain at home. It is whether we will stay connected to the work of renewal, wherever we are. For those of us abroad, belonging cannot be measured only by where we live but also by what we remain willing to contribute.</p>
        <p>We often look elsewhere for answers, and sometimes rightly so. But every society becomes stronger when its people are willing to invest their knowledge, discipline, and imagination in its future. If we do not water the soil of our own land, who will?</p>
        <p>Zimbabwe carries real wounds. Its past includes struggle and bloodshed; its present contains frustration and uncertainty. These truths must be faced honestly.</p>
        <p>But memory should not imprison us. It should give us the courage to build differently.</p>
        <p>Hope matters, but hope without courage is like a candle that has never been lit. Courage means demanding accountable leadership while accepting personal responsibility: learning, working, creating, and contributing even when the path is difficult. It may mean mentoring a student, building an honest business, supporting a local initiative, participating in public life, or returning knowledge and skills to communities that need them.</p>
        <p>For me, courage meant turning a question that began in a literature classroom into a book. <em>This Is Our Country: Between Memory and Tomorrow</em> is not a claim to have every answer. It is an invitation to think differently about Zimbabwe: not as a perfect country and not as a hopeless one, but as a shared responsibility.</p>
        <p>The land remembers.</p>
        <p>The question is whether Zimbabwe&apos;s children will remember, and what they will choose to build.</p>
        <BackToBlog />
      </div></article>
    </main>
    <CtaBand /><RevealObserver />
  </>;
}
