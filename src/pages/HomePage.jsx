import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import mylogo from "../assets/mylogo.png";
const HomePage = () => {
  const skills = [
    "Kotlin",
    "Dart",
    "JavaScript",
    "Android",
    "Flutter",
    "React",
    "Node.js",
    "Express.js",
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
  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between py-12">
        <div className="md:mr-8">
          <h1 className="text-4xl font-bold mb-2">Hi, I'm Vivek</h1>
          <p className="flex items-center text-gray-600 mb-4">
            <span className="h-2 w-2 bg-pink-500 rounded-full mr-2"></span>
            Based in India
          </p>
          <p className="text-lg text-gray-700 mb-4">
            I'm a full-stack developer with a strong foundation in mobile app
            development and a growing expertise in MongoDB, Express.js,
            React.js, Node.js.
          </p>
          <p className="text-gray-700 mb-6 ">
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
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.5, bounce: 0.25 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          className="hover:shadow-fuchsia-400 w-88 h-58 rotate-2 rounded-full overflow-hidden shadow-lg shadow-gray-500 hidden md:block"
        >
          <img
            src={mylogo}
            alt="Vivek Upasani"
            className="w-full h-full object-cover shadow-lg shadow-gray-500 rounded-full"
          />
        </motion.div>
      </div>

      {/* Work Experience */}
      <div className="md:py-8">
        <h2 className="text-2xl font-bold mb-6">Work Experience</h2>

        <div className="mb-6">
          <div className="flex flex-wrap items-center justify-between mb-1">
            <div className="flex items-center">
              <div className="bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <span className="font-bold">C</span>
              </div>
              <div>
                <div className="flex items-center">
                  <h3 className="text-lg font-medium">
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
                  <h3 className="text-lg font-medium">Freelancer</h3>
                  <ExternalLink size={16} className="ml-2 text-gray-500" />
                </div>
                <p className="text-gray-600">
                  Full stack web & app developer - Freelancer
                </p>
              </div>
            </div>
            <p className="ml-13 sm:text-gray-500">May 2024 - Jan 2025</p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="py-8">
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <motion.span
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.2, bounce: 0.25 },
              }}
              key={index}
              className="bg-black  text-white px-3 py-1 rounded-full"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Latest Work */}
      <div className="py-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 ">Projects</h2>
        <p className="text-gray-600 mb-8">
          I'm currently working on an AI-powered code review SaaS tool designed
          to help developers write better code. I'm passionate about building
          products that enhance productivity and simplify the development
          process. <br />
          Below are three of my projects — feel free to check out more on my{" "}
          <a
            className="text-gray-700 hover:text-black"
            href="https://github.com/vivekupasani"
          >
            GitHub
          </a>{" "}
          .
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project 1 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center mb-2">
              <h3 className="text-xl font-bold">
                Pixsy - Full social media app
              </h3>
              <span className="ml-2 mt-2">🕸️</span>
            </div>
            <p className="text-gray-500 mb-4">August 2024 - October 2024</p>

            <p className="tex t-gray-600 mb-2">
              Built with Flutter, Firebase, and BLoC.
            </p>
            <p className="font-semibold mb-1">A modern social media app</p>
            <p className="text-gray-600 mb-4">
              Users can share posts, discover others, and connect in
              real-time—powered by Firebase and clean architecture for smooth,
              scalable performance.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
                Flutter
              </span>
              <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
                Dart
              </span>
              <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
                Firebase
              </span>
              <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
                BLoC
              </span>
              <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
                Clean Architecture
              </span>
              <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
                Get_it
              </span>
            </div>

            <div className="flex space-x-2">
              <a
                href="https://pixsy-b2ccb.web.app/"
                className="flex items-center bg-gray-800 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-700"
              >
                <ExternalLink className="mr-1" size={14} />
                Website
              </a>
              <a
                href="https://github.com/vivekupasani/pixsy"
                className="flex items-center bg-gray-800 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-700"
              >
                <Github className="mr-1" size={14} />
                Github
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center mb-2">
              <h3 className="text-xl font-bold">
                JSONBazaar - A free mock API's store
              </h3>
              <span className="ml-2 mt-2">🧩</span>
            </div>
            <p className="text-gray-500 mb-4">March 2025 - March 2025</p>

            <p className="text-gray-600 mb-2">
              Built with Html, Css, Ejs, Node.js, and Express.js.
            </p>
            <p className="font-semibold mb-1">
              Say goodbye to handcrafting mock data
            </p>
            <p className="text-gray-600 mb-4">
              It delivers high-performance mock APIs with fast, realistic
              responses—ideal for testing, prototyping, and learning without a
              backend.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
                HTML
              </span>
              <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
                CSS
              </span>
              <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
                EJS
              </span>
              <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
                Node.js
              </span>
              <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
                Express.js
              </span>
              <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
                JavaScript
              </span>
              <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
                Render
              </span>
            </div>

            <div className="flex space-x-2">
              <a
                href="https://jsonbazaar.onrender.com"
                className="flex items-center bg-gray-800 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-700"
              >
                <ExternalLink className="mr-1" size={14} />
                Website
              </a>
              <a
                href="https://github.com/vivekupasani/jsonbazaar"
                className="flex items-center bg-gray-800 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-700"
              >
                <Github className="mr-1" size={14} />
                Github
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center mb-2">
              <h3 className="text-xl font-bold">
                CloudStash - The ultimate cloud storage solution
              </h3>
              <span className="ml-2 mt-2">☁️</span>
            </div>
            <p className="text-gray-500 mb-4">November 2024 - December 2024</p>

            <p className="text-gray-600 mb-2">
              Built with Flutter, Node.js, Express.js, Firebase and MongoDB.
            </p>
            <p className="font-semibold mb-1">
              A Google drive-style cloud storage app
            </p>
            <p className="text-gray-600 mb-4">
              It offers fast, secure cloud storage with firebase integration for
              seamless media upload, management, and performance.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
                Flutter
              </span>
              <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
                Dart
              </span>
              <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
                Node.js
              </span>
              <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
                Express.js
              </span>
              <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
                MongoDB
              </span>
              <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
                Firebase
              </span>
            </div>

            <div className="flex space-x-2">
              <a
                href="https://cloudstash-vivekupasani.onrender.com/"
                className="flex items-center bg-gray-800 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-700"
              >
                <ExternalLink className="mr-1" size={14} />
                Website
              </a>
              <a
                href="https://github.com/vivekupasani/cloudstash"
                className="flex items-center bg-gray-800 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-700"
              >
                <Github className="mr-1" size={14} />
                Github
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="py-16">
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
      </div>
      <p className="text-center text-gray-300 p-10">
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
