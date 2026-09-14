import { threadGroups } from "../data/twitter-threads";

const dateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function TwitterThreads() {
  return (
    <section className="writing-section twitter-threads" id="twitter-threads">
      <header className="writing-section-heading">
        <h2>Twitter threads</h2>
        <p>I started these threads when I was revising for my “Comparative Government” exams as a way to get feedback on my revision notes. They include summaries of the literature and tentative interpretations of its implications for current debates. The threads are grouped by theme, with the most recent first.</p>
      </header>
      <div className="thread-groups">
        {threadGroups.map((group) => (
          <details className="thread-theme" key={group.id} id={`threads-${group.id}`}>
            <summary>
              <h3>
                <span>{group.title}</span>
                <span className="thread-count">{group.items.length} threads</span>
                <svg className="thread-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </h3>
            </summary>
            <ul className="thread-list">
              {group.items.map((thread) => (
                <li key={thread.id}>
                  <a href={`https://threadreaderapp.com/thread/${thread.id}.html`}>{thread.title}</a>
                  <p className="thread-meta">
                    <time dateTime={thread.date}>{dateFormat.format(new Date(`${thread.date}T12:00:00Z`))}</time>
                    <span> · {thread.language} · </span>
                    <a href={`https://x.com/edenhofer_jacob/status/${thread.id}`} aria-label={`${thread.title} on Twitter/X`}>Twitter/X</a>
                  </p>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </section>
  );
}
