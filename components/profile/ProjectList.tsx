import { projects } from "@/data/projects";

const featuredProjects = ["deploymate", "whispy", "cluezy"];

export default function ProjectList() {
  return (
    <ul className="divide-y divide-[#ededed]">
      {projects
        .filter((project) => featuredProjects.includes(project.slug))
        .map((project) => (
          <li key={project.slug} className="py-3 first:pt-1">
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-baseline justify-between gap-3 text-[13px] font-medium text-[#242424] decoration-[#bdbdbd] underline-offset-4 hover:underline"
            >
              <span className="truncate">{project.name}</span>
              {project.status && (
                <span className="shrink-0 text-[10px] font-normal text-[#888]">
                  {project.status}
                </span>
              )}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <p className="mt-1 text-[11px] leading-[1.6] text-[#777]">
              {project.shortDescription}
            </p>
          </li>
        ))}
    </ul>
  );
}
