import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import mylogo from "../assets/mylogo.png";
import { Link } from "react-router-dom";
const HomePage = () => {
  const skills = [
    "Kotlin",
    "Dart",
    "JavaScript",
    "Solidity",
    "Android",
    "Flutter",
    "React Native",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Ethereum blockchain",
    "Smart contracts",
    "MongoDB",
    "Firebase",
    "PHP",
    "MySQL",
    "Hive",
    "Room",
    "Clean Architecture",
    "MVVM",
    "BLoC",
    "Retrofit",
    "HTTP",
    "Git",
    "GitHub",
    "Android Studio",
    "VSCode",
    "Postman",
  ];

  const projects = [
    {
      title: "Dappr - Decentralized social media",
      icon: "🕸️",
      date: "June 2025 - June 2025",
      description:
        "Built with React native, Solidity, and Ethereum blockchain.",
      summary: "A decentralized social media platform",
      details:
        "Users can connect their MetaMask wallet, create a profile, and interact with on-chain social posts—completely censorship-resistant and user-owned.",
      techStack: [
        "React Native",
        "Web3.js",
        "WalletConnect v2",
        "Metamask",
        "Solidity",
        "Ethereum Sepolia testnet",
      ],
      website: "",
      github: "https://github.com/vivekupasani/Dappr",
    },
    {
      title: "Mock 3 Wallet - Web3 wallet simulation",
      icon: "🕸️",
      date: "June 2025 - June 2025",
      description: "Built with React native, Nodejs, Expressjs and MongoDB",
      summary: "A full-stack project simulating a Web3 wallet system",
      details:
        "This system replicates wallet creation, token management, transactions, contact book features, and user settings",
      techStack: ["React Native", "Nodejs", "Expressjs", "MongoDB"],
      github: "https://github.com/vivekupasani/mock3wallet",
    },
    {
      title: "Syncra AI - AI powered voice assistant",
      icon: "🕸️",
      date: "May 2025 - May 2025",
      description: "Built with Flutter, Nodejs, Expressjs and Gemini",
      summary: "Generate images and answer your queries",
      details:
        "Introducing an AI-powered voice assistant that not only answers your questions in real time but also generates stunning images from your voice commands.",
      techStack: ["Flutter", "Nodejs", "Expressjs", "Gemini"],
      website: "",
      github: "https://github.com/vivekupasani/syncra",
    },
    {
      title: "CloudStash - The ultimate cloud storage solution",
      icon: "☁️",
      date: "November 2024 - December 2024",
      description:
        "Built with Flutter, Node.js, Express.js, Firebase and MongoDB.",
      summary: "A Google drive-style cloud storage app",
      details:
        "It offers fast, secure cloud storage with firebase integration for seamless media upload, management, and performance.",
      techStack: [
        "Flutter",
        "Dart",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
      ],
      website: "https://cloudstash-vivekupasani.onrender.com/",
      github: "https://github.com/vivekupasani/cloudstash",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, bounce: 0.25, delay: 0.2 }}
        exit={{ opacity: 0, y: 50 }}
        className="flex flex-col md:flex-row items-center justify-between py-12"
      >
        <div className="md:mr-8">
          <h1 className="text-  xl font-bold mb-2">Hi, I'm Vivek</h1>
          <p className="flex items-center text-gray-600 mb-4">
            <span className="h-2 w-2 bg-pink-500 rounded-full mr-2"></span>
            Based in India
          </p>
          <p className="text-25 text-gray-700 mb-4">
            I'm a skilled full-stack and mobile developer with expertise in
            Flutter, React Native, Node.js, and Web3. Passionate about building
            scalable apps using modern tech like Firebase, Solidity, and Clean
            Architecture.
          </p>
          <p className="text-gray-700 mb-6 text-20 ">
            For quick connect just drop me a Hey! on X, I'm pretty active there.
          </p>

          <div className="flex space-x-4 mb-8">
            <motion.a
              whileHover={{
                shadow: "lg",
                transition: { duration: 0.2 },
                rotate: -2,
                scale: 1.05,
              }}
              href="https://x.com/VIVEKUpasani2"
              className="flex items-center bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800"
            >
              <span className="mr-2">Discuss Your Project</span>
              <ExternalLink size={16} />
            </motion.a>
            <motion.a
              whileHover={{
                shadow: "lg",
                transition: { duration: 0.2 },
                rotate: 3,
                scale: 1.05,
              }}
              href="mailto:vivekupasani984@gmail.com"
              className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-700"
            >
              Hire
            </motion.a>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: 0, delay: 10 }}
          transition={{ duration: 0.5, bounce: 0.25 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          className="hover:shadow-fuchsia-400 w-108 h-48  rotate-2 overflow-hidden rounded-lg shadow-lg shadow-gray-500 hidden md:block"
        >
          <motion.img
            src={mylogo}
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 0, delay: 10 }}
            transition={{ duration: 0.5, bounce: 0.25 }}
            alt="Vivek Upasani"
            className="w-full h-full object-cover shadow-lg shadow-gray-500 rounded-lg"
          />
        </motion.div>
      </motion.div>

      {/* Work Experience */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, bounce: 0.25, delay: 0.2 }}
        className="md:py-8"
      >
        <h2 className="text-2xl font-bold mb-6">Work Experience</h2>

        <div className="mb-6">
          <div className="flex flex-wrap items-center justify-between mb-1">
            <div className="flex items-center">
              <div className="bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <span className="font-bold">C</span>
              </div>
              <div>
                <div className="flex items-center">
                  <h3 className="text-40 font-medium">
                    Charotar Education Society
                  </h3>
                  <a href="https://cesociety.in/">
                    <ExternalLink size={16} className="ml-2 text-gray-500" />
                  </a>
                </div>
                <p className="text-gray-600">Software Developer - Internship</p>
              </div>
            </div>
            <p className="ml-13 sm:text-gray-500">Dec 2024 - Apr-2025</p>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap items-center justify-between mb-1">
            <div className="flex items-center">
              <div className="bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <span className="font-bold">F</span>
              </div>
              <div>
                <div className="flex items-center">
                  <h3 className="text-40 font-medium">Freelancer</h3>
                </div>
                <p className="text-gray-600">
                  Full stack web & app developer - Freelancer
                </p>
              </div>
            </div>
            <p className="ml-13 sm:text-gray-500">May 2024 - Jan 2025</p>
          </div>
        </div>
      </motion.div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, bounce: 0.25, delay: 0.1 }}
        className="py-8"
      >
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <motion.span
              whileHover={{
                marginLeft: "10px",
                marginRight: "10px",
                shadow: "lg",
                scale: 1.1,
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                transition: { duration: 0.2, bounce: 0.25 },
              }}
              key={index}
              className="bg-black text-sm text-white px-3 py-1.5 rounded-full"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Latest Work */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, bounce: 0.25, delay: 0.1 }}
        className="py-8"
      >
        <h2 className="text-2xl sm:text-3xl font-npm font-bold mb-4 ">
          Projects
        </h2>
        <p className="text-gray-600 text-25 mb-8">
          I'm currently exploring Web3 by building decentralized applications
          and smart contract integrations. I'm passionate about creating
          products that empower users and push the boundaries of blockchain
          technology.
          <br />
          Below are three of my projects — feel free to check out more on my{" "}
          <a
            className="text-gray-700 hover:text-black"
            href="https://github.com/vivekupasani"
          >
            GitHub
          </a>{" "}
          or go to{" "}
          <Link to="/projects" className="text-gray-700 hover:text-black">
            /projects
          </Link>
          .
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.01,
                boxShadow: "#fff",
                transition: { duration: 0.2, bounce: 0.25 },
              }}
              className="border border-gray-200 rounded-lg p-6"
            >
              <div className="flex items-center mb-2">
                <h3 className="text-xl font-bold">{project.title}</h3>
                {project.icon && (
                  <span className="ml-2 mt-2">{project.icon}</span>
                )}
              </div>
              <p className="text-gray-500 mb-4">{project.date}</p>
              <p className="text-gray-600 mb-2">{project.description}</p>
              <p className="font-semibold mb-1">{project.summary}</p>
              <p className="text-gray-600 mb-4">{project.details}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-2">
                {project.website && (
                  <a
                    href={project.website}
                    className="flex items-center bg-gray-800 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-700"
                  >
                    <ExternalLink className="mr-1" size={14} />
                    Website
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    className="flex items-center bg-gray-800 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-700"
                  >
                    <Github className="mr-1" size={14} />
                    Github
                  </a>
                )}
                {project.preview && (
                  <a
                    href={project.github}
                    className="flex items-center bg-gray-800 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-700"
                  >
                    <Github className="mr-1" size={14} />
                    Preview
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, bounce: 0.25, delay: 0.1 }}
        className="py-16"
      >
        <div className="text-center">
          <span className="inline-block bg-black text-white px-4 py-1 rounded-md text-sm mb-4">
            Contact
          </span>
          <h2 className="text-5xl font-bold mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-600 mb-2">
            Looking to hire? Just send me a mail{" "}
            <a
              href="mailto:vivekupasani984@gmail.com"
              className="text-blue-500 hover:underline"
            >
              here
            </a>
            .
          </p>
          <p className="text-gray-600">I respond the quickest to mails.</p>
        </div>
      </motion.div>
      <p className="text-center text-gray-100 p-10">
        The portfolio design is inspired from{" "}
        <a
          className=" underline underline-offset-3 hover:text-black"
          href="https://yashyadav.info/"
        >
          Yash Yadav
        </a>
      </p>
    </div>
  );
};

export default HomePage;
