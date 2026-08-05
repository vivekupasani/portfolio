import { work } from "@/data/work";
import type { DescriptionSegment } from "@/data/work";
import Link from "next/link";

const linkClass =
  "text-[#0066cc] no-underline hover:text-[#004499] hover:underline transition-colors duration-200";

function renderDescription(segments: DescriptionSegment[]) {
  return segments.map((segment, i) =>
    typeof segment === "string" ? (
      <span key={i}>{segment}</span>
    ) : (
      <a
        key={i}
        href={segment.href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        {segment.text}
      </a>
    )
  );
}

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
          <span className="block mt-[6px] text-[#555] lowercase">
            {/* {renderDescription(item.description)} */}
            {item.shortDescription}
          </span>
        </div>
      ))}
      <p className="text-base text-[#444]">
        I spend my weekends building side projects. It's how I learn, experiment, and ship new ideas. Check them out at <Link className={linkClass} href={"/projects"}>/projects</Link>.
      </p>
    </>
  );
}
