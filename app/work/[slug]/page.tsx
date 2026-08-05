import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { work } from "@/data/work";
import WorkDetail from "@/components/work-releted/WorkDetail";

export function generateStaticParams() {
  return work.map((item) => ({ slug: item.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = work.find((w) => w.slug === slug);

  if (!item) {
    return {};
  }

  const description = item.shortDescription;
  const title = `${item.name} — ${item.role}`;

  return {
    title: item.name,
    description,
    alternates: {
      canonical: `/work/${item.slug}`,
    },
    openGraph: {
      type: "website",
      url: `/work/${item.slug}`,
      title: `${title} | vivek upasani`,
      description,
    },
    twitter: {
      card: "summary",
      title: `${title} | vivek upasani`,
      description,
    },
  };
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const item = work.find((w) => w.slug === slug);

  if (!item) {
    notFound();
  }

  return <WorkDetail item={item} />;
}