# Jacob Edenhofer’s website

An editable academic website, built with Next.js and exported as static files for GitHub Pages. It has no database or login requirement.

## Editing the website

| Change | File |
| --- | --- |
| Three-paragraph About me introduction and references | `content/about.md` |
| Teaching, courses and materials | `content/teaching.md` |
| Professional service | `content/service.md` |
| File drawer | `content/file-drawer.md` |
| Writing introduction | `content/writing.md` |
| Research, manuscript, review, abstracts and links | `app/data/research.ts` |
| Essays, reviews and public writing links | `app/data/writing.ts` |
| Homepage role, affiliations, email and public activity links | `app/page.tsx` |
| All contact/profile links, including ResearchGate | `app/components/Footer.tsx` |
| Main navigation | `app/components/Header.tsx` |
| Colours, type and spacing | `app/globals.css` |
| CV, photograph and other downloads | `public/` |

Markdown supports ordinary paragraphs, `## Section headings`, `*italics*`, `**bold**`, lists starting with `-`, and `[link text](https://example.com)`. Leave a blank line between paragraphs. The Markdown files are trusted, locally authored content; they are not an upload or public input feature.

To update the CV, replace `public/Jacob_Edenhofer_CV.pdf` with the new PDF using the same filename. Existing CV links will continue to work.

To add a paper, copy an existing object in `app/data/research.ts`. Give it a unique `slug`, set its title, authors, year, status, venue, summary, abstract and links, and choose its `kind` and research `programmes`. The Research page opens by theme; readers can also organise the entries by publication status. The DPhil manuscript is under Climate politics, and book reviews retain their own status. The site sorts papers by year within each group. Keep the quotation marks and commas around the text. The homepage no longer uses the `selected` flags; they remain in the data for reference.

## Preview on your computer

Install Node.js 22 (at least 22.13) with npm from [nodejs.org](https://nodejs.org/), then open a terminal in this website folder:

```sh
npm ci
npm run dev
```

Open the local address printed in the terminal. Layout edits refresh automatically. After changing a Markdown file, reload the page to see the new text. Stop the preview with Control-C.

Codex can also edit these files and run the preview using its bundled Node runtime; the temporary local tooling is ignored by Git.

To build and verify the version that will be published:

```sh
npm test
npm start
```

`npm test` builds the website and checks its exported pages, links and assets. `npm start` previews that static build at `http://127.0.0.1:4173/Website/`. Rebuild after edits before previewing with `npm start`. The generated `out/` folder is the publishable website; edit the source files rather than `out/`.

## Private review draft

The existing Sites preview remains available at its previous private address. The configuration in `.openai/hosting.json` records that preview's hosting identifier. GitHub Pages is the intended destination for subsequent publication.

The website uses `https://jacob-edenhofer.github.io/Website/`, configured in `site.config.mjs`, for local links, assets, and social-preview images. It retains the draft instruction asking search engines not to index it. This instruction does not restrict access; anyone with the public GitHub Pages address can open the website. Remove the `robots` setting in `app/layout.tsx` when the website should appear in search results.

## Publish using GitHub Pages

The public repository is [jacob-edenhofer/Website](https://github.com/jacob-edenhofer/Website). The workflow in `.github/workflows/pages.yml` builds, checks, and publishes changes pushed to `main`.

1. Use the existing `Website` repository under the `jacob-edenhofer` account.
2. Put this folder’s contents at the repository root, including `.github`. Do not upload the parent `Random_thoughts` folder or the backup folder. Keep `node_modules`, `.next`, `out` and `.sites-runtime` out of Git; `.gitignore` already covers these.
3. In the repository’s **Settings → Pages**, choose **GitHub Actions** as the source.
4. Push to `main`, or select **Actions → Publish website → Run workflow**. The workflow builds, tests and publishes the static output.
5. Check the successful deployment and open `https://jacob-edenhofer.github.io/Website/`.

The repository name is case-sensitive in the website address. `site.config.mjs` defines `/Website` as the shared base path for Next.js navigation, Markdown links, images, PDFs, the static preview, and the checks. Update that configuration and rebuild if the repository name changes.

For a custom domain, configure and verify it in GitHub Pages and update the domain’s DNS records. Update the origin and base path in `site.config.mjs` to match the final address before rebuilding.

After setup, routine updates are: edit → preview → commit → push. A commit on `main` automatically republishes the website. You can also make small text changes through GitHub’s browser editor. To undo a published change, revert its commit and push the revert.

Official documentation: [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages), [publishing configuration](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports).

## Original version and compatibility

The original folder was copied to `../Website_backups/before-redesign-20260911-142942` before the redesign. Publication and writing records, PDFs, the photograph and existing social-preview image have been preserved.

The previous Vite/Cloudflare configuration, example files and dependencies are retained for reference but are not used by the current static build. `next.config.ts` and the scripts in `package.json` control the active build. The `/publications/` address has a static fallback link and redirects visitors to the research page when JavaScript is enabled.
