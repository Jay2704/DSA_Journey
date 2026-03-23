/** Join Vite `base` with a path under `public/`. */
export function publicAssetUrl(path: string): string {
  const base = import.meta.env.BASE_URL;
  const p = path.replace(/^\/+/, "");
  return `${base}${p}`;
}
