import { readdir } from "node:fs/promises";
import path from "node:path";

export type TemplateInfo = {
  slug: string;
  filename: string;
  title: string;
  description: string;
  imageSrc: string;
  vercelLink: string;
  githubLink: string;
};

const imageExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".svg", ".gif"]);

function slugToTitle(slug: string) {
  return slug
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function createTemplateInfo(filename: string): TemplateInfo {
  const ext = path.extname(filename).toLowerCase();
  const slug = path.basename(filename, ext);
  const title = slugToTitle(slug);
  return {
    slug,
    filename,
    title,
    description: `Template ${title} พร้อมระบบชำระเงินราคา 5,000 บาท`,
    imageSrc: `/${filename}`,
    vercelLink: `https://${slug}.vercel.app/`,
    githubLink: `https://github.com/Ex2-Axon/${slug}`,
  };
}

export async function getTemplateImages(): Promise<TemplateInfo[]> {
  const publicDir = path.join(process.cwd(), "public");
  const entries = await readdir(publicDir, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => imageExtensions.has(path.extname(name).toLowerCase()))
    .map(createTemplateInfo)
    .sort((a, b) => a.title.localeCompare(b.title, "th"));
}

export async function getTemplateBySlug(slug: string): Promise<TemplateInfo | undefined> {
  const templates = await getTemplateImages();
  return templates.find((template) => template.slug === slug);
}
