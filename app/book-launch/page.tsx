import type { Metadata } from "next";
import Image from "next/image";
import { Gallery } from "../components/gallery";
import { Hero } from "../components/hero";
import { RevealObserver } from "../components/reveal-observer";
import { BuyButtons, Quotes, SectionHeading } from "../components/shared";
import { heraldUrl, images, launchGalleryImages, publisherUrl } from "../components/site-data";

export const metadata: Metadata = { title: "Book Launch | This Is Our Country", description: "This Is Our Country by Kelvin Tadiwanashe officially launched on August 27, 2026.", alternates: { canonical: "/book-launch/" } };

const details = [["Author", "Kelvin Tadiwanashe, The Royal Doctor"], ["Publisher", "Bespoken Publishing"], ["ISBN", "9781779289254"], ["Status", "Launched August 27, 2026"], ["Price", "Paperback: $20 · eBook: $8"], ["Formats", "Paperback & eBook"]];
const event = [["Date", "August 27, 2026, 5:30 PM to 8:30 PM"], ["Dresscode", "Ethnic Colours"], ["Venue", "Golden Conifer, 30 Quendon Rd., Harare"], ["Guest of Honour", "Hon. Tino Machakaire, Minister of Youth Empowerment, Development and Vocational Training of Zimbabwe"]];

function DetailTable({ rows }: { rows: string[][] }) {
  return <dl className="detail-table reveal">{rows.map(([label, value]) => <div className="row" key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>;
}

export default function BookLaunchPage() {
  return <>
    <main>
      <Hero image={images.portrait} imageAlt="Kelvin Tadiwanashe, The Royal Doctor" imagePosition="75% 12%" badge="OFFICIALLY LAUNCHED · AUGUST 27, 2026" title={<>This Is Our Country<span className="title-sub">Between Memory and Tomorrow</span></>}><p className="lede">Kelvin T. (The Royal Doctor) officially launched his thought-provoking debut, exploring Zimbabwe&apos;s past, examining its present, and inviting a new generation to imagine its future.</p><div className="cta-row"><a className="btn btn-red" href={publisherUrl} target="_blank" rel="noopener noreferrer">Get The Book</a><a className="btn btn-ghost" href="#launch-gallery">See Launch Photos</a></div></Hero>
      <section><div className="wrap reveal"><div className="vip-card minister-card"><div className="minister-photo"><Image src="/minister.jpg" alt="Hon. Tino Machakaire, Guest of Honour at the official launch of This Is Our Country" width={1297} height={1436} sizes="(max-width: 720px) min(360px, calc(100vw - 84px)), 320px" /></div><div className="vip-copy"><span className="vip-icon" aria-hidden="true">🎖️</span><p><b>Officially launched</b> by the Hon. Tino Machakaire, Minister of Youth Empowerment, Development and Vocational Training of Zimbabwe, who graced the event as Guest of Honour.</p></div></div></div></section>
      <section><div className="wrap book-feature reveal"><div className="book-photo lg"><Image src={images.book} alt="This Is Our Country book cover" width={1124} height={1028} sizes="320px" /></div><div><span className="eyebrow">ABOUT THE BOOK</span><h2 className="feature-title feature-title-sm">What does it mean to inherit a nation shaped by the past?</h2><p className="measure">This debut is a thoughtful exploration of Zimbabwe&apos;s past, present, and future. Through reflections on history, identity, leadership, and the resilience of its people, the book invites readers to consider how the lessons of yesterday can shape a stronger tomorrow, offering insight, reflection, and hope rather than dwelling only on the nation&apos;s challenges.</p><BuyButtons direct /></div></div></section>
      <section className="section-alt"><div className="wrap"><SectionHeading eyebrow="BOOK DETAILS">The essentials.</SectionHeading><DetailTable rows={details} /></div></section>
      <section><div className="wrap"><SectionHeading eyebrow="THE LAUNCH EVENT">How it happened.</SectionHeading><DetailTable rows={event} /><div className="cta-row"><a className="btn btn-outline-dark" href={heraldUrl} target="_blank" rel="noopener noreferrer">Read The Herald Feature</a></div></div></section>
      <section className="section-alt" id="launch-gallery"><div className="wrap"><div className="section-head reveal"><span className="eyebrow">LAUNCH GALLERY</span><h2>Photos from the night.</h2><p className="section-note">A few moments from the official launch of <em>This Is Our Country</em>.</p></div><Gallery items={launchGalleryImages} variant="launch" /></div></section>
      <section><div className="wrap"><SectionHeading eyebrow="FROM THE BOOK">In his own words.</SectionHeading><Quotes /></div></section>
    </main>
    <RevealObserver />
  </>;
}
