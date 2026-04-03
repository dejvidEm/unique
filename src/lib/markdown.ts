import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "markdown/projects");

export type ProjectLocale = "en" | "sk";

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

function pickLocalized(data: Record<string, unknown>, field: string, locale: ProjectLocale): unknown {
  if (locale === "sk") {
    const skVal = data[`${field}_sk`];
    if (typeof skVal !== "undefined") return skVal;
  }
  return data[field];
}

function processImages(content: string) {
  return content.replace(/!\[.*?\]\((.*?)\)/g, '<img src="$1" alt="" />');
}

export function getProjectsBySlug(slug: string, fields: string[] = [], locale: ProjectLocale = "en") {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.mdx`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const dataRecord = data as Record<string, unknown>;

  const items: Record<string, unknown> = {};

  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
      return;
    }
    if (field === "content") {
      let raw: string;
      if (
        locale === "sk" &&
        typeof dataRecord.content_sk === "string" &&
        dataRecord.content_sk.trim() !== ""
      ) {
        raw = dataRecord.content_sk as string;
      } else {
        raw = content;
      }
      items[field] = processImages(raw);
      return;
    }
    if (field === "metadata") {
      items[field] = { ...data, coverImage: data.coverImage || null };
      return;
    }
    const val = pickLocalized(dataRecord, field, locale);
    if (typeof val !== "undefined") {
      items[field] = val;
    }
  });

  return items;
}

export function getAllProjects(fields: string[] = [], locale: ProjectLocale = "en") {
  const slugs = getPostSlugs();
  return slugs
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      return getProjectsBySlug(slug, fields, locale);
    })
    .filter((p): p is NonNullable<typeof p> => p != null);
}
