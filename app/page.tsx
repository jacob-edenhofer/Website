import Image from "next/image";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Markdown } from "./components/Markdown";

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
              <nav className="hero-social" aria-label="Public activity">
                <a href="https://x.com/edenhofer_jacob">Twitter/X</a>
                <a href="https://bsky.app/profile/jacobedenhofer.bsky.social">Bluesky</a>
                <a href="https://jacobedenhofer.substack.com/">Substack</a>
                <a href="https://github.com/jacob-edenhofer">GitHub</a>
              </nav>
            </div>
            <figure className="hero-portrait">
              <Image src="/jacob-edenhofer.webp" alt="Jacob Edenhofer at Nuffield College" width={1600} height={1067} priority sizes="(max-width: 560px) 112px, 164px" />
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
      </main>
      <Footer />
    </div>
  );
}
