import React from "react";
import HomePage from "./pages/HomePage";
import Projects from "./pages/Projects";
import { motion } from "motion/react";
import { Routes, Route, Link } from "react-router-dom";
import {
  Github,
  ExternalLink,
  Mail,
  Home,
  FileText,
  Sun,
  Moon,
  Linkedin,
  X,
  Twitter,
  Workflow,
  ProjectorIcon,
  WorkflowIcon,
  Cylinder,
} from "lucide-react";
function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        ease: ["anticipate", "anticipate"],
        duration: 2,
        type: "tween",
      }}
      className="min-h-screen bg-white"
    >
      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          mass: 0.5,
          duration: 3,
        }}
        className="flex justify-center pt-8 pb-4"
      >
        <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2 space-x-4">
          <Link to="/" className="p-2 rounded-full hover:bg-gray-100">
            <Home size={20} />
          </Link>
          <Link to="/projects" className="p-2 rounded-full hover:bg-gray-100">
            <Cylinder size={20} />
          </Link>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.linkedin.com/in/vivekupasani/"
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com/vivekupasani"
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://x.com/VIVEKUpasani2"
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <Twitter size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="/Vivek_Upasani_FullStack.pdf"
            download="Vivek_Upasani_Resume.pdf"
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <FileText size={20} />
          </motion.a>
        </div>
      </motion.div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </motion.div>
  );
}

export default App;
