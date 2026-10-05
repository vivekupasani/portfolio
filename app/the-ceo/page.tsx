import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "portfolio websites",
	description: "Five websites from the portfolio of Vivek Upasani.",
	alternates: {
		canonical: "/the-ceo",
	},
};

type WebsiteStatus = "Live" | "In development" | "website to showcase my work(not client work)";

const websites: { url: string; status: WebsiteStatus }[] = [
	{ url: "https://bizdine-omega.vercel.app", status: "website to showcase my work(not client work)" },
	{ url: "https://online-jewelry-shop-ecommerce.vercel.app", status: "In development" },
	{ url: "https://www.drftmarketing.com", status: "Live" },
	{ url: "https://www.cluezy.site", status: "Live" },
	{ url: "https://www.homehavenmarket.co.uk", status: "Live" },
	{ url: "https://www.acernity.online/work", status: "Live" },
];

const linkClass =
	"text-[#0066cc] no-underline hover:text-[#004499] hover:underline transition-colors duration-200";

export default function TheCEOPage() {
	return (
		<main className="min-h-screen bg-[#F1F0EF] px-6 py-6 text-[#333] leading-[1.7] sm:px-8 sm:py-8 md:p-12">
			<div className="max-w-145 mx-auto text-left">
				<h1 className="mb-1 text-2xl font-bold leading-tight text-black sm:text-[28px]">
					portfolio websites for the ceo
				</h1>
				<p className="text-base text-[#555] mb-4">
					five websites from my portfolio
				</p>

				<div className="mb-6 border-t border-[#ddd]" />

				<ol className="divide-y divide-[#ddd]">
					{websites.map((website, index) => (
						<li
							key={website.url}
							className="grid grid-cols-[2rem_minmax(0,1fr)] items-center gap-x-3 gap-y-2 py-4 sm:grid-cols-[2rem_minmax(0,1fr)_auto] sm:gap-x-4"
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
							<div className="col-start-2 flex items-center justify-between gap-3 sm:col-start-3 sm:justify-start">
								<span
									className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${
										website.status === "Live"
											? "bg-[#e4f2e8] text-[#25633a]"
											: "bg-[#fff0d7] text-[#845400]"
									}`}
								>
									{website.status}
								</span>
								<span aria-hidden="true" className="text-[#777] sm:ml-1">
									↗
								</span>
							</div>
						</li>
					))}
				</ol>
			</div>
		</main>
	);
}
