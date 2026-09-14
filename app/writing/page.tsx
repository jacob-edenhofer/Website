import type { Metadata } from "next";
import { sitePath } from "../../site.config.mjs";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Markdown, MarkdownParagraph } from "../components/Markdown";
import { TwitterThreads } from "../components/TwitterThreads";
import {
  democracyAndAdvice,
  publicAffairsWriting,
  researchCommentary,
  reviewsAndEssays,
  type WritingItem,
} from "../data/writing";

export const metadata: Metadata = {
  title: "Public writing and engagement · Jacob Edenhofer",
  description: "Essays, research summaries, public discussions, and notes on climate policy, political economy, and liberal democracy.",
};

function WritingEntry({ item }: { item: WritingItem }) {
  return (
    <article className="writing-entry">
      <div>
        <h3><a href={sitePath(item.href)}>{item.title}</a></h3>
        <p>{item.authors}</p>
        {item.description ? <MarkdownParagraph className="writing-description" text={item.description} /> : null}
      </div>
      <p className="writing-meta">{item.outlet} · {item.date}</p>
      {item.links?.length ? (
        <div className="paper-links">
          {item.links.map((link) => <a href={sitePath(link.href)} key={link.label}>{link.label}</a>)}
        </div>
      ) : null}
    </article>
  );
}

const sections = [
  {
    id: "essays-reviews",
    title: "Essays and reviews",
    intro: "These essays examine climate policy, economic policy, and democratic government.",
    items: [...reviewsAndEssays, ...publicAffairsWriting],
  },
  {
    id: "research-summaries",
    title: "Research summaries",
    intro: "These summaries introduce published papers and working papers to readers beyond the immediate academic literature.",
    items: researchCommentary,
  },
  {
    id: "twitter-threads",
    title: "Twitter threads",
  },
  {
    id: "public-engagement",
    title: "Public engagement",
    intro: "These discussions, presentations, and tentative notes examine climate policy, expertise, democratic authority, and populism.",
    items: democracyAndAdvice,
  },
];

export default function WritingPage() {
  return (
    <div className="site-shell writing-page">
      <Header />
      <main id="main-content">
        <section className="page-intro page-width writing-intro">
          <p className="eyebrow">Beyond academic journals</p>
          <h1>Public writing &amp; engagement</h1>
          <Markdown file="writing" />
          <div className="inline-links intro-links">
            <a className="text-link" href="https://jacobedenhofer.substack.com/">Substack</a>
            <a className="text-link" href="https://bsky.app/profile/jacobedenhofer.bsky.social">Bluesky</a>
            <a className="text-link" href="https://x.com/edenhofer_jacob">Twitter/X</a>
          </div>
        </section>

        <nav className="programme-index page-width" aria-label="Public writing and engagement sections">
          {sections.map((section) => (
            <a href={`#${section.id}`} key={section.id}>{section.title}</a>
          ))}
        </nav>

        <div className="writing-sections page-width">
          {sections.map((section) => section.items ? (
            <section className="writing-section" id={section.id} key={section.id}>
              <header className="writing-section-heading">
                <h2>{section.title}</h2>
                <p>{section.intro}</p>
              </header>
              <div className="writing-list">
                {section.items.map((item) => <WritingEntry item={item} key={item.title} />)}
              </div>
            </section>
          ) : (
            <TwitterThreads key={section.id} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
