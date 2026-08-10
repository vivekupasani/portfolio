import Link from "next/link";
import type { Project } from "@/data/projects";

const linkClass =
  "text-[#0066cc] no-underline hover:text-[#004499] hover:underline transition-colors duration-200 font-semibold";

export default function ProjectDetail({ item }: { item: Project }) {
  return (
    <div className="px-8 py-4 md:p-12 bg-[#F1F0EF] text-[#333] leading-[1.7] min-h-screen">
      <div className="max-w-[580px] mx-auto text-left">
        <div className="mb-6">
          <Link href="/projects" className={linkClass}>
            ← back
          </Link>
        </div>

        <h1 className="text-[28px] font-bold text-black mb-1 leading-tight">
          {item.name}
        </h1>

        <p className="text-base text-[#555] mb-4">
          {item.status && <em className="text-[#666]">{item.status}</em>}
        </p>

        {item.href && (
          <p className="mb-4">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              click here to visit {item.name} ↗
            </a>
          </p>
        )}

        <div className="mb-6 border-t border-[#ddd]" />

        {item.description.map((segment, i) => (
          <p key={i} className="text-[#333] leading-[1.8] lowercase mb-2 last:mb-0">
            {segment}
          </p>
        ))}

        <div className="mb-6 mt-6 border-t border-[#ddd]" />

        <p className="text-[13px] text-[#888] lowercase">
          tech stack: {item.techStack.join(" · ")}
        </p>
      </div>
    </div>
  );
}
