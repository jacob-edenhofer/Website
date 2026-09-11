import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="header-inner page-width">
        <Link className="home-link" href="/">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
            <path d="m3 10 9-7 9 7" />
            <path d="M5 9v12h5v-7h4v7h5V9" />
          </svg>
          Home
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          <Link href="/research">Research</Link>
          <Link href="/writing">Writing</Link>
          <Link href="/teaching">Teaching</Link>
          <Link href="/service">Professional service</Link>
          <Link href="/file-drawer">File drawer</Link>
          <a href="/Jacob_Edenhofer_CV.pdf">CV</a>
        </nav>
      </div>
    </header>
  );
}
