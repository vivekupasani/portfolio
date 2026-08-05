import { notFound } from "next/navigation";
import { work } from "@/data/work";
import WorkDetail from "@/components/work-releted/WorkDetail";

export function generateStaticParams() {
  return work.map((item) => ({ slug: item.slug }));
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = work.find((w) => w.slug === slug);

  if (!item) {
    notFound();
  }

  return <WorkDetail item={item} />;
}