import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectDetail from "@/components/ProjectDetail";

export function generateStaticParams() {
  return projects.map((item) => ({ slug: item.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = projects.find((p) => p.slug === slug);

  if (!item) {
    return {};
  }

  const description = item.shortDescription;

  return {
    title: item.name,
    description,
    alternates: {
      canonical: `/projects/${item.slug}`,
    },
    openGraph: {
      type: "website",
      url: `/projects/${item.slug}`,
      title: `${item.name} — Vivek Upasani`,
      description,
      images: item.images?.map((image) => ({ url: image })) ?? [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${item.name} — Vivek Upasani`,
      description,
      images: item.images ?? [],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const item = projects.find((p) => p.slug === slug);

  if (!item) {
    notFound();
  }

  return <ProjectDetail item={item} />;
}