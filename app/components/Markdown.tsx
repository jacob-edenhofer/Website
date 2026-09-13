import { readFileSync } from "node:fs";
import path from "node:path";
import { marked } from "marked";
import { sitePath } from "../../site.config.mjs";

// Like the content files below, these strings are authored locally.
export function MarkdownParagraph({ text, className }: { text: string; className?: string }) {
  const html = marked.parseInline(text, { async: false });
  return <p className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

// These are locally authored content files, rendered when the site is built.
export function Markdown({ file, className = "prose" }: { file: string; className?: string }) {
  if (!/^[a-z0-9-]+$/.test(file)) throw new Error("Invalid content filename");
  const source = readFileSync(path.join(process.cwd(), "content", `${file}.md`), "utf8");
  const html = marked.parse(source, {
    async: false,
    walkTokens(token) {
      if (token.type === "link" || token.type === "image") token.href = sitePath(token.href);
    },
  });
  return <div className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
