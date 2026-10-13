import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "portfolio websites",
  description: "Five websites from the portfolio of Vivek Upasani.",
  alternates: {
    canonical: "/the-ceo",
  },
};

const websites: { url: string}[] = [
  { url: "https://luxora.acernity.online" },
  {url : "https://www.acernity.online"},
  { url: "https://www.acernity.online/work" },
  {url : "https://create-design.cluezy.site"},
  { url: "https://www.cluezy.site" },
  { url: "https://bizdine-omega.vercel.app"},
  { url: "https://www.drftmarketing.com"},
  { url: "https://www.homehavenmarket.co.uk", },
];

const linkClass =
  "text-[#0066cc] no-underline hover:text-[#004499] hover:underline transition-colors duration-200";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#F1F0EF] px-6 py-6 text-[#333] leading-[1.7] sm:px-8 sm:py-8 md:p-12">
      <div className="max-w-145 mx-auto text-left">
        <h1 className="mb-1 text-2xl font-bold leading-tight text-black sm:text-[28px]">
          five websites from our portfolio
        </h1>
        <p className="text-base text-[#555] mb-4">
          here are five websites from our portfolio that showcase our work and expertise in web development.
        </p>

        <div className="mb-0 border-t border-[#ddd]" />

        <ol className="divide-y divide-[#ddd]">
          {websites.map((website, index) => (
            <li
              key={website.url}
              className="grid grid-cols-[2rem_minmax(0,1fr)] items-center gap-x-3 gap-y-2 py-2 sm:grid-cols-[2rem_minmax(0,1fr)_auto] sm:gap-x-0"
            >
              <span className="text-sm text-[#777]">0{index + 1}</span>
              <a
                href={website.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkClass} min-w-0 break-words [overflow-wrap:anywhere]`}
              >
                {website.url.replace(/^https:\/\//, "")}
              </a>
            </li>
          ))}
        </ol>

         <p className="text-base text-[#555555bd] mb-4 text-center mt-10 border-t border-[#ddd] pt-4">
          © 2026 Acernity Studio. All rights reserved.
         </p>
      </div>
    </main>
  );
}
