import ProjectDetailClient from "@/app/components/projects/ProjectDetailClient";
import { getProjectsBySlug, type ProjectLocale } from "@/lib/markdown";
import { cookies } from "next/headers";

type Props = {
  params: Promise<{ slug: string }>;
};

function localeFromCookieStore(cookieLocale: string | undefined): ProjectLocale {
  return cookieLocale === "en" ? "en" : "sk";
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const cookieStore = await cookies();
  const locale = localeFromCookieStore(
    cookieStore.get("studio32-locale")?.value ?? cookieStore.get("unique-locale")?.value
  );

  const project = getProjectsBySlug(slug, ["title"], locale);
  const siteName = process.env.SITE_NAME || "Studio32";
  const authorName = process.env.AUTHOR_NAME || "Studio32";

  if (project?.title) {
    return {
      title: `${String(project.title)} | ${siteName}`,
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  }

  return {
    title: "Not Found",
    description: "No blog article has been found",
    author: authorName,
    robots: {
      index: false,
      follow: false,
      nocache: false,
      googleBot: {
        index: false,
        follow: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function Post({ params }: Props) {
  const { slug } = await params;
  return <ProjectDetailClient slug={slug} />;
}
