import { work } from "@/data/work";
import type { DescriptionSegment } from "@/data/work";
import Link from "next/link";

const linkClass =
  "text-[#0066cc] no-underline hover:text-[#004499] hover:underline transition-colors duration-200 font-semibold";

export default function Work() {
  return (
    <>
      {work.map((item) => (
        <div key={item.name} className="mb-9 leading-[1.8]">
          <strong className="text-[17px]">
            <Link
              href={`/work/${item.slug}`}
              className="text-[#0066cc] no-underline hover:text-[#004499] transition-colors duration-200"
            >
              {item.name}
            </Link>
          </strong>
          {` · ${item.role} `}
          {item.status && (
            <em className="text-[#666]">{item.status}</em>
          )}
          <span className="block mt-1.5 text-[#555] lowercase">
            {item.shortDescription}
          </span>
        </div>
      ))}
      <p className="text-base text-[#444] mb-6">Curious about the technologies I use? Check out{" "}
        <Link className={linkClass} href={"/skills"}>/skills</Link>
        {" "} for my complete tech stack.
      </p>
      <p className="text-base text-[#444]">
        I spend my weekends building side projects. It's how I learn, experiment, and ship new ideas. Check them out at{" "}
        <Link className={linkClass} href={"/projects"}>/projects</Link>.
      </p>
    </>
  );
}
