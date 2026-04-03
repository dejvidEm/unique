import { getAllProjects, type ProjectLocale } from "@/lib/markdown";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lang = (searchParams.get("lang") === "en" ? "en" : "sk") as ProjectLocale;
  const projects = getAllProjects(["title", "slug", "ScopeOfWork", "industry", "coverImage"], lang);
  return NextResponse.json(projects);
}
