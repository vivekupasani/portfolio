import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Skills, SkillIcons } from "@/data/skills";

export const metadata: Metadata = {
  title: "skills",
  description:
    "Technologies used by Vivek Upasani to build fast, scalable, and user-focused products — TypeScript, React, Next.js, Node.js, PostgreSQL, Docker, and more.",
  alternates: {
    canonical: "/skills",
  },
};

const linkClass =
  "text-[#0066cc] no-underline hover:text-[#004499] hover:underline transition-colors duration-200 font-semibold";

function categoryLabel(key: string): string {
  return key.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();
}

export default function SkillsPage() {
  return (
    <div className="px-8 py-4 md:p-12 bg-[#F1F0EF] text-[#333] leading-[1.7] min-h-screen">
      <div className="max-w-145 mx-auto text-left">
        <div className="mb-6">
          <Link href="/" className={linkClass}>
            ← back
          </Link>
        </div>

        <h1 className="text-[28px] font-bold text-black mb-1 leading-tight">
          skills
        </h1>

        <p className="text-base text-[#555] mb-4">
          these are the technologies i use to build fast, scalable, and user-focused products.
        </p>

        <p className="text-sm text-[#777] mb-6">
          each one has earned its place through real projects and continuous learning.
        </p>

        <div className="mb-6 border-t border-[#ddd]" />

        <div className="overflow-hidden rounded-lg border border-[#ddd]">
          <table className="w-full border-collapse">
            <tbody>
              {Object.entries(Skills).map(([category, skills]) => (
                <tr key={category} className="border-b border-[#ddd]">
                  <td className="py-3 px-4 align-middle text-center font-semibold text-black whitespace-nowrap border-r border-[#ddd]">
                    {categoryLabel(category)}
                  </td>
                  <td className="py-3 pl-5 align-top">
                    <div className="flex flex-wrap gap-x-5 gap-y-2 items-center">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="flex items-center gap-1.5 border border-dashed border-[#ddd] rounded-md px-2 py-1"
                        >
                          <Image
                            src={SkillIcons[skill]}
                            alt={skill}
                            width={16}
                            height={16}
                            className="w-4 h-4"
                            unoptimized
                          />
                          <span className="text-sm text-[#555] font-semibold">{skill}</span>
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
