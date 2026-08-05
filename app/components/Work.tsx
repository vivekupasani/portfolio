import { work } from "@/data/work";
import type { DescriptionSegment } from "@/data/work";

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
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0066cc] no-underline hover:text-[#004499] transition-colors duration-200"
            >
              {item.name}
            </a>
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
    </>
  );
}
