export interface WorkLink {
    text: string;
    href: string;
}

// A description segment is either plain text or an inline link
export type DescriptionSegment = string | WorkLink;

export interface Work {
    name: string;
    href: string;
    slug: string,
    role: string;
    status?: string;
    shortDescription: string;
    description: DescriptionSegment[];
    images?: string[]
}

export const work: Work[] = [
    {
        name: "independent",
        href: "https://linkedin.com/in/vivekupasani",
        slug: "independent",
        role: "software developer",
        status: "(latest)",
        shortDescription: "delivered custom web projects and landing pages for clients across the globe as a freelancer",
        description: [
            "Designed and developed production full stack web applications, covering frontend architecture, backend services, database design, authentication, and deployment. Built responsive, production-ready interfaces from product requirements and designs using React, Next.js, TypeScript, and Tailwind CSS. Designed REST APIs and backend services using Node.js and Express, integrating databases, third-party services, authentication, and payment infrastructure.",
            "Containerized applications with Docker and deployed production workloads across cloud platforms including Vercel, Render, and Railway. Built and launched high-converting marketing landing pages focused on performance, responsive design, clear product messaging, and lead generation.",
        ],
    },
    {
        name: "cluezy",
        href: "https://cluezy.site",
        slug: "cluezy",
        role: "product builder",
        status: "(archived)",
        shortDescription: "AI powered research and productivity platform with a unified AI interface for multi-source search and document analysis.",
        description: [
            "Developed an AI-powered research and productivity platform featuring a unified interface for multi-source search and document analysis. Integrated web, academic, Reddit, GitHub, and X (Twitter) search to enable centralized information retrieval. Implemented multi-format content processing, allowing users to upload and analyze PDFs, DOCs, and PPTs directly within the platform.",
            "Built features to summarize website content, extract key insights, and analyze YouTube videos automatically. Developed functionality to chat with uploaded documents for interactive document understanding. Integrated third-party applications including Gmail, Google Drive, and Google Docs for seamless productivity workflows powered by natural language queries."
        ],
    },
    {
        name: "boulevard legacy llc",
        href: "https://boulevardlegacy.com",
        slug: "boulevard-legacy-llc",
        role: "full stack developer",
        shortDescription: "AI platform for pre-publish content analysis and automated media kit generation, helping creators improve engagement.",
        description: [
            "Developed an AI-powered content analysis platform for evaluating pre-publish content and generating automated optimization feedback. Built AI workflows for content analysis, recommendation generation, and automated processing of user-submitted content. Designed and developed an AI-driven media kit generation system that transformed audience insights and performance metrics into brand-ready PDFs and shareable portfolio pages.",
            "Built and launched a high converting marketing landing page focused on performance, responsive design, clear product messaging and lead generation. Worked across the full application stack from frontend interfaces and API integration to backend workflows and production deployment."
        ],
    },
    {
        name: "keryar",
        href: "https://keryar.com/",
        slug: "keryar",
        role: "full stack developer intern",
        shortDescription: "Teacher's Performance Evaluation Scheme with admin panel, built with Angular, Node.js, and MySQL. A user-friendly interface lets institutions submit teacher data and simplify administrative workflows.",
        description: [
            "Designed and developed a comprehensive Teacher's Performance Evaluation Scheme to streamline institutional administrative workflows. Built a user-friendly interface for institutions to submit teacher data and track performance metrics. Designed an admin panel for reviewing submissions, assigning teacher IDs, and maintaining organized digital records. Worked across the full application stack from frontend interfaces and API integration to backend workflows using Angular, Node.js, and MySQL.",
        ],
    }
];