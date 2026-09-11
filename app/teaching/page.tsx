import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Markdown } from "../components/Markdown";

export const metadata: Metadata = {
  title: "Teaching · Jacob Edenhofer",
  description: "Teaching in formal political economy and climate policy at Oxford and the Hertie School.",
};

export default function Page() {
  return (
    <div className="site-shell">
      <Header />
      <main id="main-content">
        <article className="prose-page page-width">
          <Markdown file="teaching" />
        </article>
      </main>
      <Footer />
    </div>
  );
}
