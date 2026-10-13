import Link from "next/link";
import { work } from "@/data/work";

export default function ExperienceList() {
  return (
    <ul className="divide-y divide-[#ededed]">
      {work.map((item, index) => (
        <li key={item.slug} className="flex items-center gap-3 py-3 first:pt-1">
          <span
            aria-hidden="true"
            className={`flex size-7 shrink-0 items-center justify-center rounded-md text-[10px] font-semibold text-white ${
              index % 2 === 0 ? "bg-[#202020]" : "bg-[#777]"
            }`}
          >
            {item.name.slice(0, 1).toUpperCase()}
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline justify-between gap-3">
              <Link
                href={`/work/${item.slug}`}
                className="truncate text-[13px] font-medium text-[#242424] decoration-[#bdbdbd] underline-offset-4 hover:underline"
              >
                {item.name}
              </Link>
              {item.status && (
                <span className="shrink-0 text-[10px] uppercase tracking-[0.08em] text-[#888]">
                  {item.status.replace(/[()]/g, "")}
                </span>
              )}
            </div>
            <p className="mt-0.5 truncate text-[11px] text-[#777]">{item.role}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
