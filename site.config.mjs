export const basePath = "/Website";
export const siteOrigin = "https://jacob-edenhofer.github.io";

/** Add the repository path to local assets and ordinary HTML links. */
export function sitePath(/** @type {string} */ value) {
  if (!value.startsWith("/") || value.startsWith("//")) return value;
  if (value === basePath || value.startsWith(`${basePath}/`)) return value;
  return `${basePath}${value}`;
}
