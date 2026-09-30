import type { Metadata } from "next";
import { ContactForm } from "../components/contact-form";
import { Hero } from "../components/hero";
import { RevealObserver } from "../components/reveal-observer";
import { heraldUrl, images } from "../components/site-data";

export const metadata: Metadata = { title: "Contact", description: "Contact Kelvin Tadiwanashe for interviews, events, speaking, or press.", alternates: { canonical: "/contact/" } };

export default function ContactPage() {
  return <>
    <main><Hero compact image={images.smiling} imageAlt="Kelvin Tadiwanashe smiling" imagePosition="65% 15%" eyebrow="CONTACT" title="Get In Touch"><p>For interviews, events, speaking, or press.</p></Hero>
      <section><div className="wrap contact-grid"><ContactForm /><div className="contact-card reveal"><h2>Reach Kelvin Directly</h2><p className="muted">For interviews, events, speaking or press.</p><ul><li>Email: <a href="mailto:author@kelvintadiwa.com">author@kelvintadiwa.com</a></li><li>Press: <a href={heraldUrl} target="_blank" rel="noopener noreferrer">Featured in The Herald</a></li><li>Based in: Nottingham Malaysia · Zimbabwe</li></ul></div></div></section>
      <section className="section-alt"><div className="wrap reveal"><div className="manuscript-callout"><p>Writing your own book? Bespoken Publishing is open to new manuscripts.</p><a className="btn manuscript-btn" href="https://www.bespokenpublishing.co/manuscript-submission" target="_blank" rel="noopener noreferrer">Submit a Manuscript</a></div></div></section>
    </main><RevealObserver />
  </>;
}
