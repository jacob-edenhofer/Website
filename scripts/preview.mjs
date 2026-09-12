import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { basePath } from "../site.config.mjs";

const root = path.resolve("out");
const port = Number(process.env.PORT || 4173);
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".json": "application/json", ".txt": "text/plain; charset=utf-8", ".pdf": "application/pdf", ".webp": "image/webp", ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".ico": "image/x-icon", ".woff2": "font/woff2" };
await stat(path.join(root, "index.html")).catch(() => { throw new Error("Build the website first with npm run build."); });

createServer(async (request, response) => {
  if (!["GET", "HEAD"].includes(request.method)) { response.writeHead(405, { Allow: "GET, HEAD" }); response.end(); return; }
  try {
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    if (pathname === "/" || pathname === basePath) {
      response.writeHead(302, { Location: `${basePath}/` }); response.end(); return;
    }
    if (!pathname.startsWith(`${basePath}/`)) throw new Error("Path outside website");
    let file = path.resolve(root, `.${pathname.slice(basePath.length)}`);
    if (file !== root && !file.startsWith(`${root}${path.sep}`)) { response.writeHead(403); response.end(); return; }
    const info = await stat(file);
    if (info.isDirectory()) file = path.join(file, "index.html");
    const data = await readFile(file);
    response.writeHead(200, { "Content-Type": types[path.extname(file)] || "application/octet-stream", "Content-Length": data.length });
    response.end(request.method === "HEAD" ? undefined : data);
  } catch {
    const data = await readFile(path.join(root, "404.html")).catch(() => Buffer.from("Not found"));
    response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    response.end(request.method === "HEAD" ? undefined : data);
  }
}).listen(port, "127.0.0.1", () => console.log(`Website preview: http://127.0.0.1:${port}${basePath}/`));
