import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Markdown } from "../components/Markdown";

export const metadata: Metadata = {
  title: "Professional service · Jacob Edenhofer",
  description: "Scientific assessment, seminar organisation, and peer review.",
};

export default function Page() {
  return (
    <div className="site-shell">
      <Header />
      <main id="main-content">
        <article className="prose-page page-width">
          <Markdown file="service" />
        </article>
      </main>
      <Footer />
    </div>
  );
}
