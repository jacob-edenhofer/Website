"use client";

import { useEffect, useState } from "react";
import { PaperEntry } from "./PaperEntry";
import { researchByKind, researchByProgramme } from "../data/research";

const statusGroups = [
  {
    id: "published-articles",
    title: "Publications",
    papers: researchByKind.publications,
  },
  {
    id: "revise-and-resubmit",
    title: "Revise and resubmit",
    papers: researchByKind.reviseAndResubmit,
  },
  {
    id: "working-papers",
    title: "Working papers",
    papers: researchByKind.workingPapers,
  },
  {
    id: "work-in-progress",
    title: "Work in progress",
    papers: researchByKind.workInProgress,
  },
  {
    id: "reviews-and-reports",
    title: "Book reviews",
    papers: researchByKind.bookReviews,
  },
];

const themes = [
  {
    id: "theme-climate",
    title: "Climate Politics",
    description: "My DPhil manuscript and related papers examine uncertain public support, economic adjustment, compensation, and the institutions of decarbonisation.",
    papers: researchByProgramme.climate,
  },
  {
    id: "theme-populism",
    title: "Populism",
    description: "These papers examine how rising energy prices and local economic decline affect support for the populist right. They also assess the regional economic consequences of Brexit.",
    papers: researchByProgramme.populism,
  },
  {
    id: "theme-state-capacity",
    title: "State capacity",
    description: "These papers examine how limited information constrains governments’ ability to target taxes and compensation, and when conflict between firms generates support for investment in fiscal capacity.",
    papers: researchByProgramme.stateCapacity,
  },
  {
    id: "theme-cpe",
    title: "Other comparative political economy",
    description: "These projects examine taxation, inflation, redistribution, and the allocation of benefits across voters.",
    papers: researchByProgramme.cpe,
  },
  {
    id: "theme-democracy",
    title: "Liberal democracy and its tensions",
    description: "This work examines the relation between majority rule, technocracy, and institutional constraint, with particular attention to delegation and democratic accountability.",
    papers: researchByProgramme.democracy,
  },
];

export function PublicationViews() {
  const [grouping, setGrouping] = useState("theme");
  useEffect(() => {
    const followHash = () => {
      const hash = window.location.hash.slice(1);
      if (hash === "thematic" || themes.some((theme) => theme.id === hash)) setGrouping("theme");
      if (hash === "chronological" || statusGroups.some((group) => group.id === hash)) setGrouping("status");
    };
    followHash();
    window.addEventListener("hashchange", followHash);
    return () => window.removeEventListener("hashchange", followHash);
  }, []);
  useEffect(() => {
    // A theme anchor only exists after its group has been rendered.
    const frame = window.requestAnimationFrame(() => {
      const hash = window.location.hash.slice(1);
      if (hash) document.getElementById(hash)?.scrollIntoView({ behavior: "instant" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [grouping]);
  const groups = grouping === "status" ? statusGroups : themes;
  return (
    <section className="publication-collection page-width" id="papers" aria-labelledby="research-title">
      <header className="section-heading-inline">
        <h1 id="research-title">Research</h1>
        <label className="grouping-control">
          Group by
          <select value={grouping} onChange={(event) => setGrouping(event.target.value)} aria-controls="paper-groups">
            <option value="status">Publication status</option>
            <option value="theme">Research theme</option>
          </select>
        </label>
      </header>
      <nav className="paper-index" aria-label="Research categories">
        {groups.filter((group) => group.papers.length > 0).map((group) => <a href={`#${group.id}`} key={group.id}>{group.title}</a>)}
      </nav>
      <div id="paper-groups">
        <span id={grouping === "status" ? "chronological" : "thematic"} />
        {groups.filter((group) => group.papers.length > 0).map((group) => (
          <section className="paper-group" id={group.id} key={group.id} aria-labelledby={`${group.id}-title`}>
            <h2 id={`${group.id}-title`}>{group.title}</h2>
            {"description" in group && typeof group.description === "string" && <p className="group-description">{group.description}</p>}
            {group.papers.map((paper) => <PaperEntry paper={paper} key={paper.slug} />)}
          </section>
        ))}
      </div>
    </section>
  );
}
