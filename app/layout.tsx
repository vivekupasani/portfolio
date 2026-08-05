import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "vivek upasani",
  description:
    "Portfolio website of Vivek Upasani, a builder and entrepreneur based in San Francisco. Previously founded Orb, Dwellffood, and more.",
  keywords: [
    "Vivek Upasani",
    "Orb",
    "Dwellffood",
    "entrepreneur",
    "startup founder",
    "mobile apps",
    "web3",
    "San Francisco",
  ],
  authors: [{ name: "Vivek Upasani" }],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
