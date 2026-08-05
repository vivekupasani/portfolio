import Link from "next/link";
import type { Work } from "@/data/work";

const linkClass =
  "text-[#0066cc] no-underline hover:text-[#004499] hover:underline transition-colors duration-200 font-semibold";

export default function WorkDetail({ item }: { item: Work }) {
  return (
    <div className="px-8 py-4 md:p-12 bg-[#F1F0EF] text-[#333] leading-[1.7] min-h-screen">
      <div className="max-w-145 mx-auto text-left">
        <div className="mb-6">
          <Link href="/" className={linkClass}>
            ← back
          </Link>
        </div>

        <h1 className="text-[28px] font-bold text-black mb-1 leading-tight">
          {item.name}
        </h1>

        <p className="text-base text-[#555] mb-4">
          {item.role}
          {item.status && <em className="text-[#666]"> {item.status}</em>}
        </p>

        <div className="mb-6 border-t border-[#ddd]" />

        <p className="text-[#333] leading-[1.8] lowercase">
          {item.description.map((segment, i) =>
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
          )}
        </p>
      </div>
    </div>
  );
}