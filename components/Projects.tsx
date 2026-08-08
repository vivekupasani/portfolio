import { projects } from "@/data/projects";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      {projects.map((item) => (
        <div key={item.name} className="mb-9 leading-[1.8]">
          <strong className="text-[17px]">
            <Link
              href={`/projects/${item.slug}`}
              className="text-[#0066cc] no-underline hover:text-[#004499] transition-colors duration-200"
            >
              {item.name}
            </Link>
          </strong>
          {item.status && (
            <em className="text-[#666]">{` · ${item.status}`}</em>
          )}
          <span className="block mt-1.5 text-[#555] lowercase">
            {item.shortDescription}
          </span>
          <span className="block mt-1.5 text-[13px] text-[#888] truncate">
            {item.techStack.join(" · ")}
          </span>
        </div>
      ))}
    </>
  );
}
