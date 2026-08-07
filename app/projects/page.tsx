import Link from "next/link";
import type { Metadata } from "next";
import Projects from "../../components/Projects";

export const metadata: Metadata = {
  title: "projects",
  description:
    "Side projects built by Vivek Upasani in his spare time — from games and e-commerce to developer tools. Explore the full list with tech stacks and links.",
  alternates: {
    canonical: "/projects",
  },
};

const linkClass =
  "text-[#0066cc] no-underline hover:text-[#004499] hover:underline transition-colors duration-200 font-semibold";

export default function ProjectsPage() {
  return (
    <div className="px-8 py-4 md:p-12 bg-[#F1F0EF] text-[#333] leading-[1.7] min-h-screen">
      <div className="max-w-145 mx-auto text-left">
        <div className="mb-6">
          <Link href="/" className={linkClass}>
            ← back
          </Link>
        </div>

        <h1 className="text-[28px] font-bold text-black mb-1 leading-tight">
          projects
        </h1>
        <p className="text-base text-[#555] mb-4">
          side projects i spend my weekends building
        </p>

        <div className="mb-6 border-t border-[#ddd]" />

        <Projects />
      </div>
    </div>
  );
}