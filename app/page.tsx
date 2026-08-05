import Hero from "../components/Hero";
import Work from "../components/work-releted/Work";
import Footer from "../components/Footer";
import Divider from "../components/Divider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "vivek upasani",
  },
  description:
    "Portfolio of Vivek Upasani, a product focused full stack developer who ships fast and focuses on user experience. Explore my projects, work experience, and tech stack.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="px-8 py-4 md:p-12 bg-[#F1F0EF] text-[#333] leading-[1.7] min-h-screen">
      <div className="max-w-145 mx-auto text-left">

        <Hero />

        <Divider />

        <Work />

        <Divider />

        <Footer />

      </div>
    </div>
  );
}
