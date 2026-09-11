import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { PublicationsRedirect } from "../components/PublicationsRedirect";

export const metadata: Metadata = { title: "Publications · Jacob Edenhofer", robots: { index: false } };

export default function PublicationsPage() {
  return (
    <div className="site-shell">
      <Header />
      <main id="main-content" className="page-intro page-width">
        <h1>Publications</h1>
        <p>The complete list of papers is on the <Link className="text-link" href="/research/#papers">research page</Link>.</p>
        <PublicationsRedirect />
      </main>
      <Footer />
    </div>
  );
}
