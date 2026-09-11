import type { ResearchItem } from "../data/research";

export function PaperEntry({ paper }: { paper: ResearchItem }) {
  const metadata = [
    paper.status,
    paper.venue === "Draft" ? null : paper.venue,
    paper.date ?? paper.year,
  ].filter(Boolean).join(" · ");

  return (
    <article className={`paper-entry${paper.abstract ? " has-abstract" : ""}`} id={paper.slug}>
      <div className="paper-main">
        <h3>{paper.title}</h3>
        {paper.subtitle && <p className="dphil-subtitle">{paper.subtitle}</p>}
        <p className="paper-authors">{paper.authors}</p>
        <p className="paper-meta">{metadata}</p>
        <p className="paper-summary">{paper.summary}</p>
        <div className="paper-links">
          {paper.links.map((link) => (
            <a href={link.href} key={link.label}>{link.label}</a>
          ))}
        </div>
      </div>
      {paper.abstract ? (
        <details className="abstract-toggle">
          <summary>Abstract</summary>
          <p>{paper.abstract}</p>
        </details>
      ) : null}
    </article>
  );
}
