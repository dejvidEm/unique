import { getProjectsBySlug, type ProjectLocale } from "@/lib/markdown";
import markdownToHtml from "@/lib/markdownToHtml";
import { NextResponse } from "next/server";

const FIELDS = [
  "title",
  "slug",
  "ScopeOfWork",
  "industry",
  "raised",
  "website",
  "description",
  "coverImage",
  "gallery",
  "content",
] as const;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  const lang = (searchParams.get("lang") === "en" ? "en" : "sk") as ProjectLocale;

  if (!slug) {
    return NextResponse.json({ error: "Missing slug" }, { status: 400 });
  }

  const project = getProjectsBySlug(slug, [...FIELDS], lang);
  if (!project) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const { content, ...rest } = project as { content?: string } & Record<string, unknown>;
  const contentHtml = await markdownToHtml(String(content ?? ""));

  return NextResponse.json({ ...rest, contentHtml });
}
