import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "../../projects";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="py-8 max-w-4xl mx-auto px-4"
    >
      <h2 className="text-4xl sm:text-3xl font-bold mb-4">Projects</h2>

      <p className="text-gray-600 mb-8">
        I'm currently exploring Web3 by building decentralized applications and
        smart contract integrations. I'm passionate about creating products that
        empower users and push the boundaries of blockchain technology.
        <br />
        Below are my some projects — feel free to check out more on my{" "}
        <a
          className="text-gray-700 hover:text-black"
          href="https://github.com/vivekupasani"
        >
          GitHub
        </a>{" "}
        .
      </p>

      {/* ✅ Only change here: responsive grid layout */}
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

      <span className="mt-4 flex items-center justify-center text-gray-300">
        Code of all the project is available on github
      </span>
      <span className="mt-2 flex items-center justify-center text-gray-300">
        © Vivek Upasani
      </span>
    </motion.div>
  );
};

export default Projects;
