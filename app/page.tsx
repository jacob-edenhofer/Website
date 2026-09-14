import Image from "next/image";
import { sitePath } from "../site.config.mjs";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Markdown } from "./components/Markdown";
import { researchByKind } from "./data/research";

export default function Home() {
  return (
    <div className="site-shell">
      <Header />
      <main id="main-content">
        <section className="hero page-width" aria-labelledby="hero-title">
          <div className="hero-layout">
            <div className="hero-copy">
              <h1 id="hero-title">Jacob Edenhofer</h1>
              <p className="hero-role">
                DPhil candidate in Politics<br />
                Department of Politics and International Relations<br />
                Nuffield College · University of Oxford
              </p>
              <address className="hero-contact">
                Email: <a href="mailto:jacob.edenhofer@nuffield.ox.ac.uk">jacob.edenhofer@nuffield.ox.ac.uk</a>
              </address>
              <nav className="hero-academic" aria-label="Academic profiles and CV">
                <a href="https://scholar.google.com/citations?user=59t8TxgAAAAJ">Google Scholar</a>
                <a href={sitePath("/Jacob_Edenhofer_CV.pdf")}>CV</a>
              </nav>
              <nav className="hero-social" aria-label="Public activity">
                <a href="https://x.com/edenhofer_jacob">Twitter/X</a>
                <a href="https://bsky.app/profile/jacobedenhofer.bsky.social">Bluesky</a>
                <a href="https://jacobedenhofer.substack.com/">Substack</a>
                <a href="https://github.com/jacob-edenhofer">GitHub</a>
              </nav>
            </div>
            <figure className="hero-portrait">
              <Image src={sitePath("/jacob-edenhofer.webp")} alt="Jacob Edenhofer at Nuffield College" width={1600} height={1067} priority sizes="(max-width: 560px) 112px, 164px" />
              <figcaption>Photograph by Tom Weller</figcaption>
            </figure>
          </div>
        </section>
        <section className="home-about page-width" aria-labelledby="about-title">
          <header className="section-heading-inline">
            <h2 id="about-title">About me</h2>
          </header>
          <Markdown file="about" />
        </section>
        <section className="recent-publications page-width" aria-labelledby="recent-publications-title">
          <header className="section-heading-inline">
            <h2 id="recent-publications-title">Recent publications</h2>
            <a className="text-link" href={sitePath("/research/")}>All research</a>
          </header>
          {researchByKind.publications.slice(0, 3).map((paper) => (
            <article className="paper-entry" key={paper.slug}>
              <h3><a href={sitePath(`/research/#${paper.slug}`)}>{paper.title}</a></h3>
              <p className="paper-authors">{paper.authors}</p>
              <p className="paper-meta">{[paper.venue, paper.year, paper.status].join(" · ")}</p>
              {paper.links.filter((link) => link.label === "Paper").map((link) => (
                <div className="paper-links" key={link.href}><a href={link.href}>{link.label}</a></div>
              ))}
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
