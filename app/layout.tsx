import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const siteUrl = "https://vivekupasni.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "vivek upasani",
    template: "%s | vivek upasani",
  },
  description:
    "Portfolio of Vivek Upasani, a product focused full stack developer who ships fast and focuses on user experience.",
  keywords: [
    "Vivek Upasani",
    "full stack developer",
    "web developer",
    "software engineer",
    "React",
    "Next.js",
    "TypeScript",
    "product engineer",
    "portfolio",
    "freelance developer",
  ],
  authors: [{ name: "Vivek Upasani" }],
  creator: "Vivek Upasani",
  publisher: "Vivek Upasani",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "vivek upasani",
    title: "vivek upasani",
    description:
      "Product focused full stack developer who ships fast and focuses on user experience.",
  },
  twitter: {
    card: "summary_large_image",
    title: "vivek upasani",
    description:
      "Product focused full stack developer who ships fast and focuses on user experience.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
