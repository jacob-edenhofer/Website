import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Markdown } from "../components/Markdown";

export const metadata: Metadata = {
  title: "The file drawer · Jacob Edenhofer",
  description: "Informative empirical projects, research designs, and theoretical ideas that produced reasons to stop.",
};

export default function Page() {
  return (
    <div className="site-shell">
      <Header />
      <main id="main-content">
        <article className="prose-page page-width">
          <Markdown file="file-drawer" />
        </article>
      </main>
      <Footer />
    </div>
  );
}
