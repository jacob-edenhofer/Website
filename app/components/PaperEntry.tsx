import type { ResearchItem } from "../data/research";

export function PaperEntry({ paper }: { paper: ResearchItem }) {
  const metadata = [
    paper.status,
    paper.venue === "Draft" ? null : paper.venue,
    paper.date ?? paper.year,
  ].filter(Boolean).join(" · ");
  const paragraphs = paper.kind === "manuscript"
    ? paper.abstract.split(/\n\s*\n/)
    : [paper.abstract.replace(/\s*\n\s*/g, " ")];
  const researchLinks = paper.links.filter((link) => link.category === "research");
  const commentaryGroups = [
    { category: "authors", title: "Authors’ writing" },
    { category: "coverage", title: "External coverage" },
  ].map((group) => ({
    ...group,
    links: paper.links.filter((link) => link.category === group.category),
  })).filter((group) => group.links.length > 0);

  return (
    <article className={`paper-entry${paper.abstract ? " has-abstract" : ""}`} id={paper.slug}>
      <div className="paper-main">
        <h3>{paper.subtitle ? `${paper.title} ${paper.subtitle}` : paper.title}</h3>
        <p className="paper-authors">{paper.authors}</p>
        <p className="paper-meta">{metadata}</p>
        {researchLinks.length > 0 && (
          <div className="paper-links">
            {researchLinks.map((link) => (
              <a href={link.href} key={link.href}>{link.label}</a>
            ))}
          </div>
        )}
        {commentaryGroups.length > 0 && (
          <dl className="paper-link-groups">
            {commentaryGroups.map((group) => (
              <div className="paper-link-group" key={group.category}>
                <dt>{group.title}</dt>
                <dd className="paper-links">
                  {group.links.map((link) => (
                    <a href={link.href} key={link.href}>{link.label}</a>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
      {paper.abstract ? (
        <details className="abstract-toggle">
          <summary>{paper.kind === "manuscript" ? "Précis" : "Abstract"}</summary>
          {paragraphs.map((paragraph, paragraphIndex) => (
            <p key={paragraphIndex}>{paragraph.split(/(\*[^*]+\*)/g).map((part, index) => (
              part.startsWith("*") && part.endsWith("*")
                ? <em key={index}>{part.slice(1, -1)}</em>
                : part
            ))}</p>
          ))}
        </details>
      ) : null}
    </article>
  );
}
