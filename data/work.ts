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
        name: "freelance.work",
        href: "https://linkedin.com/in/vivekupasani",
        slug: "freelance-work",
        role: "software developer",
        status: "(latest)",
        shortDescription: "delivered custom web projects and landing pages for clients across the globe as a freelancer",
        description: [
            "worked with clients as a freelance full stack developer, building complete web projects and marketing landing pages from scratch. ",
            "took projects from requirements and design through development and deployment, delivering clean, responsive, and performant results. ",
            "collaborated closely with clients to translate their goals into user-friendly products.",
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
            "developed an AI-powered research and productivity platform with a unified AI interface. ",
            "integrated web search, academic search, Reddit research, weather queries, GitHub search, and X (Twitter) search in one place. ",
            "enabled multi-source information retrieval to simplify research and data discovery. ",
            "implemented multi-format content processing for documents and media. ",
            "allowed users to upload and analyze PDFs, DOC, and PPT files directly within the platform. ",
            "built features to summarize website content and extract key insights automatically. ",
            "added support to analyze and summarize YouTube videos using AI. ",
            "developed functionality to chat with uploaded documents for interactive document understanding. ",
            "integrated third-party applications for seamless productivity workflows. ",
            "enabled users to connect Gmail, Google Drive, Google Docs, and Google Sheets with the platform. ",
            "implemented natural language queries to interact with external apps and data easily.",
        ],
    },
    {
        name: "boulevard legacy llc",
        href: "https://boulevardlegacy.com",
        slug: "boulevard-legacy-llc",
        role: "full stack developer",
        shortDescription: "AI platform for pre-publish content analysis and automated media kit generation, helping creators improve engagement.",
        description: [
            "built an AI-powered platform that analyzes content before publishing, providing instant feedback, quality scoring, and actionable optimization suggestions to help creators and marketers improve engagement. ",
            "created an AI-driven media kit generator that helps creators showcase audience insights and performance metrics through automatically updated, brand-ready PDFs and shareable portfolio links.",
        ],
    },
    {
        name: "keryar",
        href: "https://keryar.com/",
        slug: "keryar",
        role: "full stack developer intern",
        shortDescription: "Teacher's Performance Evaluation Scheme with admin panel, built with Angular, Node.js, and MySQL. A user-friendly interface lets institutions submit teacher data and simplify administrative workflows.",
        description: [
            "worked on the Teacher's Performance Evaluation Scheme project. ",
            "built a user-friendly interface for institutions to submit teacher's data and simplify administrative workflows. ",
            "designed an admin panel for reviewing submissions, assigning teacher IDs, and maintaining organized digital records. ",
            "software built using Angular, Node.js, and MySQL.",
        ],
    }
];