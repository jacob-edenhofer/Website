import { readFileSync } from "node:fs";
import path from "node:path";
import { marked } from "marked";
import { sitePath } from "../../site.config.mjs";

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
