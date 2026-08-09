export interface Project {
    name: string;
    href: string;
    slug: string;
    status?: string;
    shortDescription: string;
    description: string[];
    techStack: string[];
    images?: string[]
}

export const projects: Project[] = [
    {
        name: "whispy",
        href: "https://github.com/vivekupasani/whispy",
        slug: "whispy",
        status: "March 2026",
        shortDescription: "desktop voice transcription app with push-to-talk recording and AI-powered speech-to-text",
        description: [
            "built a desktop voice transcription app that records with a simple push-to-talk flow — hold a key, speak, and release to transcribe instantly. ",
            "powered fast speech-to-text with Groq's Whisper Large V3. ",
            "added an optional AI refinement step that cleans up grammar and removes filler words. ",
            "included customizable hotkeys, from Option, Command, and Control to the F1-F12 keys. ",
            "made it auto-paste the text into any active app while running quietly in the system tray.",
        ],
        techStack: ["typescript", "React.js", "Electron.js", "Tailwind CSS"],
        images: ["/whispy.png"],
    },
    {
        name: "deploymate",
        href: "https://github.com/vivekupasani/vercel-clone",
        slug: "deploymate",
        status: "Aug 2026",
        description: [
            "built a self-hosted, vercel-style deployment platform that lets users deploy static web applications directly from github by simply providing a repository url. the platform automatically clones the repository, uploads the source files to supabase storage, creates a bullmq job backed by redis, and processes the build asynchronously through a dedicated deployment worker that installs dependencies, runs `npm run build`, and uploads the generated `dist/` files back to object storage. the frontend, built with react, tanstack start, tanstack router, typescript, vite, and tailwind css, provides a deployment dashboard with live progress tracking across uploading, uploaded, building, deploying, and deployed states, while the upload service handles repository cloning, storage uploads, job creation, and deployment status polling. the request-handler service serves the final static files dynamically based on each deployment's unique id and hostname, allowing deployments to be accessed through urls such as `<id>.vercelclone.com:3001/index.html`, while custom domains can be connected through cname records. deploymate is framework-agnostic for projects that produce a `dist/` directory through their build command and uses node.js, express, simple-git, bullmq, ioredis, supabase storage, redis, and docker across its services. the complete stack is containerized with docker compose and includes the frontend, upload service, deployment worker, request-handler service, and redis, allowing the entire platform to be started with a single command while also supporting running each service independently for local development. for local deployments, the platform can use a hosts-file entry to map deployment subdomains to localhost, demonstrating the core workflow behind modern deployment platforms while keeping the entire infrastructure self-hosted and under the developer's control."
        ],
        shortDescription: "a self-hosted, vercel-style deployment platform that automates github deployments with live progress tracking.",
        techStack: ["docker", "bullmq", "redis", "supabase", "typescript", "react", "Vite", "TanStack React Router", "Tailwind CSS", "Node.js", "Express", "Simple Git", "iORedis"],
    },
    {
        name: "mr driving",
        href: "https://mr-driving.vercel.app/",
        slug: "mr-driving",
        status: "May 2026",
        shortDescription: "open-world browser car driving game with realistic physics and free-roam gameplay",
        description: [
            "built an open-world style car driving game with realistic physics and responsive controls. ",
            "created a free-roam driving experience across highways, city roads, and off-road environments. ",
            "added features like drifting, nitro boost, collision mechanics, and dynamic camera modes. ",
            "built it with React Three Fiber and Rapier physics for smooth high-performance gameplay right in the browser. ",
            "added immersive visuals with lighting effects, moving traffic props, and detailed environments.",
        ],
        techStack: ["Next.js", "TypeScript", "React Three Fiber", "Three.js", "Rapier Physics", "Zustand", "Tailwind CSS"],
        images: ["/mr-driving.png"],
    },
    {
        name: "jsonbazaar",
        href: "https://jsonbazaar.onrender.com/",
        slug: "jsonbazaar",
        status: "Mar 2025 • 1 month",
        shortDescription: "free mock REST API store for developers to test and prototype their applications",
        description: [
            "built a mock REST API platform similar to JSONPlaceholder so developers can test and prototype their applications. ",
            "implemented endpoints for common resources like posts, users, comments, and todos. ",
            "enabled full CRUD operations for testing API requests and responses. ",
            "designed the platform to serve realistic JSON data for frontend development. ",
            "created a simple and developer-friendly interface for quick API testing. ",
            "ensured fast and scalable API responses suitable for development environments.",
        ],
        techStack: ["Node.js", "Express", "EJS"],
        images: ["/opengraph-image1.png"],
    },
    {
        name: "luxora",
        href: "https://online-jewelry-shop-ecommerce.vercel.app/",
        slug: "luxora",
        status: "March 2026 - Present",
        shortDescription: "full-fledged e-commerce website for jewelry with secure checkout and order management",
        description: [
            "built a full-fledged e-commerce jewelry store where users can browse a wide collection of pieces with high-quality images, detailed descriptions, and pricing. ",
            "added a shopping cart so users can add products, update quantities, and manage selected items before purchase. ",
            "implemented a smooth and secure checkout process with full payment integration. ",
            "included order management so users can track their orders, view order history, and manage their purchases easily.",
        ],
        techStack: ["typescript", "Next.js", "Tailwind CSS", "Motion", "Supabase", "Dodopayments"],
        images: ["/opengraph-image1.png"],
    },
    {
        name: "medremind",
        href: "https://github.com/vivekupasani/medremind",
        slug: "medremind",
        status: "March 2026 - March 2026",
        shortDescription: "cross-platform medication reminder app with custom scheduling and biometric authentication",
        description: [
            "built a cross-platform medication reminder app that works seamlessly on both iOS and Android. ",
            "set up medication scheduling with fully custom reminders for timely doses. ",
            "added refill tracking so users can monitor their medicine supply and get alerts when it's low. ",
            "secured access with biometric authentication using Face ID or Touch ID. ",
            "included progress tracking to log daily medication intake with a full history. ",
            "added calendar integration to manage doses efficiently. ",
            "stored all data safely on-device using AsyncStorage.",
        ],
        techStack: ["React Native", "TypeScript", "AsyncStorage"],
        images: ["/opengraph-image1.png"],
    },
    {
        name: "chatapp",
        href: "https://github.com/vivekupasani/chatapp",
        slug: "chatapp",
        status: "July 2024 - August 2024",
        shortDescription: "real-time chat application built with signup, auth, friend requests, and instant messaging",
        description: [
            "built a real-time chat application with complete sign-up and login functionality. ",
            "added profile setup so users can create and update their name, profile picture, and about info. ",
            "implemented friend requests to send, receive, and accept connections. ",
            "built instant text messaging between users. ",
            "added image sharing, including sending and receiving photos in chat. ",
            "included status updates users can upload and view. ",
            "supported both light and dark themes for a consistent user experience.",
        ],
        techStack: ["Android", "Firebase", "Kotlin"],
        images: ["/opengraph-image1.png"],
    },
    {
        name: "pixsy",
        href: "https://pixsy-b2ccb.web.app",
        slug: "pixsy",
        status: "Aug 2024 - Oct 2024",
        shortDescription: "complete social media platform with image sharing, real-time chat, and likes",
        description: [
            "built a complete social media platform with fully real-time features. ",
            "implemented image sharing, likes, and comments. ",
            "developed a real-time chat system using Firebase Firestore. ",
            "focused on creating a smooth and engaging user experience.",
        ],
        techStack: ["Flutter", "Firebase", "Dart"],
        images: ["/opengraph-image1.png"],
    }
];