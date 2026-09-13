import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PublicationViews } from "../components/PublicationViews";

export const metadata: Metadata = {
  title: "Research · Jacob Edenhofer",
  description: "Research, a DPhil manuscript, and book reviews in comparative political economy, climate politics, populism, and liberal democracy.",
};

export default function ResearchPage() {
  return (
    <div className="site-shell">
      <Header />
      <main id="main-content">
        <PublicationViews />
      </main>
      <Footer />
    </div>
  );
}
