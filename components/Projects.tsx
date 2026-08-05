import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <>
      {projects.map((item) => (
        <div key={item.name} className="mb-9 leading-[1.8]">
          <strong className="text-[17px]">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0066cc] no-underline hover:text-[#004499] transition-colors duration-200"
            >
              {item.name}
            </a>
          </strong>
          {item.status && (
            <em className="text-[#666]">{` · ${item.status}`}</em>
          )}
          <span className="block mt-[6px] text-[#555] lowercase">
            {item.shortDescription}
          </span>
          <span className="block mt-[6px] text-[13px] text-[#888]">
            {item.techStack.join(" · ")}
          </span>
        </div>
      ))}
    </>
  );
}
