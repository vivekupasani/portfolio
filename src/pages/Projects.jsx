import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="py-8 max-w-4xl mx-auto px-4"
    >
      <h2 className="text-4xl sm:text-3xl font-bold mb-4 ">Projects</h2>
      <p className="text-gray-600 mb-8">
        I'm currently working on an AI-powered code review SaaS tool designed to
        help developers write better code. I'm passionate about building
        products that enhance productivity and simplify the development process.{" "}
        <br />
        Below are seven of my projects — feel free to check out more on my{" "}
        <a
          className="text-gray-700 hover:text-black"
          href="https://github.com/vivekupasani"
        >
          GitHub
        </a>{" "}
        .
      </p>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {/* Project 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.01,
            boxShadow: "0 0 10px rgb(231, 187, 255)",
            transition: { duration: 0.2, bounce: 0.25 },
          }}
          className="border border-gray-200 rounded-lg p-6"
        >
          <div className="flex items-center mb-2">
            <h3 className="text-xl font-bold">Pixsy - Full social media app</h3>
            <span className="ml-2 mt-2">🕸️</span>
          </div>
          <p className="text-gray-500 mb-4">August 2024 - October 2024</p>

          <p className="tex t-gray-600 mb-2">
            Built with Flutter, Firebase, and BLoC.
          </p>
          <p className="font-semibold mb-1">A modern social media app</p>
          <p className="text-gray-600 mb-4">
            Here users can share posts, discover people, and connect in
            real-time. Firebase powers authentication and media storage, while
            clean architecture ensures smooth, scalable performance.
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
        </motion.div>

        {/* Project 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.01,
            boxShadow: "0 0 10px rgb(231, 187, 255)",
            transition: { duration: 0.2, bounce: 0.25 },
          }}
          className="border border-gray-200 rounded-lg p-6"
        >
          <div className="flex items-center mb-2">
            <h3 className="text-xl font-bold">
              DevunoAI - The AI-powered code review tool
            </h3>
            {/* <span className="ml-2 mt-2">🕵️‍♀️</span> */}
          </div>
          <p className="text-gray-500 mb-4">April 2025 - April 2025</p>

          <p className="text-gray-600 mb-2">
            Built with React.js, Node.js, Express.js, Motion, Gemini API.
          </p>
          <p className="font-semibold mb-1">
            The AI-powered code review tool for developers
          </p>
          <p className="text-gray-600 mb-4">
            It offers fast, secure code reviews with AI integration for seamless
            code analysis, management, and performance. It helps developers
            improve their code quality and productivity.
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
              React.js
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
              Motion
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
              Node.js
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
              Express.js
            </span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
              Motion
            </span>
          </div>

          <div className="flex space-x-2">
            <a
              href="https://devuno.onrender.com/"
              className="flex items-center bg-gray-800 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-700"
            >
              <ExternalLink className="mr-1" size={14} />
              Website
            </a>
            <a
              href="https://github.com/vivekupasani/devuno"
              className="flex items-center bg-gray-800 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-700"
            >
              <Github className="mr-1" size={14} />
              Github
            </a>
          </div>
        </motion.div>

        {/* Project 3 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.01,
            boxShadow: "0 0 10px rgb(231, 187, 255)",
            transition: { duration: 0.2, bounce: 0.25 },
          }}
          className="border border-gray-200 rounded-lg p-6"
        >
          {" "}
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
        </motion.div>
      </div>

      {/* Project 4 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{
          scale: 1.01,
          boxShadow: "0 0 10px rgb(231, 187, 255)",
          transition: { duration: 0.2, bounce: 0.25 },
        }}
        className="border border-gray-200 rounded-lg p-6 mt-6"
      >
        {" "}
        <div className="flex items-center mb-2">
          <h3 className="text-xl font-bold">
            JSONBazaar - A free mock API's store
          </h3>
          <span className="ml-2 mt-2">🧩</span>
        </div>
        <p className="text-gray-500 mb-4">March 2025 - March 2025</p>
        <p className="text-gray-600 mb-2">
          Built with Ejs, Node.js, and Express.js.
        </p>
        <p className="font-semibold mb-1">
          Say goodbye to handcrafting mock data
        </p>
        <p className="text-gray-600 mb-4">
          It offers high-performance mock APIs for developers, testers, and
          businesses. It provides fast responses and realistic data, perfect for
          learning API integration, testing, or prototyping—without the need for
          a backend.
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
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
      </motion.div>

      {/*Project 5 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{
          scale: 1.01,
          boxShadow: "0 0 10px rgb(231, 187, 255)",
          transition: { duration: 0.2, bounce: 0.25 },
        }}
        className="border border-gray-200 rounded-lg p-6 mt-6"
      >
        {" "}
        <div className="flex items-center mb-2">
          <h3 className="text-xl font-bold">
            ChatApp - Real-time chat & social experience
          </h3>
          <span className="ml-2 mt-2">💬</span>
        </div>
        <p className="text-gray-500 mb-4">December 2024 - January 2025</p>
        <p className="text-gray-600 mb-2">
          Built with Kotlin, Firebase, and MVVM Architecture.
        </p>
        <p className="font-semibold mb-1">
          A modern chat app with real-time messaging and social features
        </p>
        <p className="text-gray-600 mb-4">
          Connect with friends, send messages or images, manage statuses, and
          enjoy light/dark themes—all with Firebase-powered backend and clean
          UI.
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
            Kotlin
          </span>
          <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
            XML
          </span>
          <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
            MVVM
          </span>
          <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
            Firebase Auth
          </span>
          <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
            Firestore
          </span>
          <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
            Firebase Storage
          </span>
          <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
            Realtime DB
          </span>
          <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
            Glide
          </span>
          <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
            Material Design
          </span>
        </div>
        <div className="flex space-x-2">
          <a
            href="https://github.com/vivekupasani/chatapp.git"
            className="flex items-center bg-gray-800 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-700"
          >
            <Github className="mr-1" size={14} />
            Github
          </a>
        </div>
      </motion.div>

      {/* Project 6*/}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0,}}
        whileHover={{
          scale: 1.01,
          boxShadow: "0 0 10px rgb(231, 187, 255)",
          transition: { duration: 0.2, bounce: 0.25 },
        }}
        className="border border-gray-200 rounded-lg p-6 mt-6"
      >
        {" "}
        <div className="flex items-center mb-2">
          <h3 className="text-xl font-bold">
            Food Villa - Your personal recipe book
          </h3>
          <span className="ml-2 mt-2">🍽️</span>
        </div>
        <p className="text-gray-500 mb-4">September 2024 - October 2024</p>
        <p className="text-gray-600 mb-2">
          Built with Kotlin, MVVM, Retrofit, Room, and more.
        </p>
        <p className="font-semibold mb-1">
          A feature-rich recipe app with step-by-step guides and video tutorials
        </p>
        <p className="text-gray-600 mb-4">
          Food Villa makes cooking easy with clear instructions, videos, and a
          clean UI. Whether you're a beginner or a pro, explore and prepare
          meals effortlessly.
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
            Kotlin
          </span>
          <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
            Navigation Component
          </span>
          <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
            Retrofit
          </span>
          <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
            Room DB
          </span>
          <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
            MVVM
          </span>
          <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
            LiveData
          </span>
          <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
            Coroutines
          </span>
          <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
            View Binding
          </span>
          <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
            Glide
          </span>
        </div>
        <div className="flex space-x-2">
          <a
            href="https://github.com/vivekupasani/Food-Villa.git"
            className="flex items-center bg-gray-800 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-700"
          >
            <Github className="mr-1" size={14} />
            Github
          </a>
        </div>
      </motion.div>

      {/* Project 7*/}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{
          scale: 1.01,
          boxShadow: "0 0 10px rgb(231, 187, 255)",
          transition: { duration: 0.2, bounce: 0.25 },
        }}
        className="border border-gray-200 rounded-lg p-6 mt-6"
      >
        {" "}
        <div className="flex items-center mb-2">
          <h3 className="text-xl font-bold">
            Pixster - A wallpaper collection app
          </h3>
          <span className="ml-2 mt-2">🖼️</span>
        </div>
        <p className="text-gray-500 mb-4">August 2024 - September 2024</p>
        <p className="text-gray-600 mb-2">
          Built with Flutter, BLoC, HTTP, and Hive.
        </p>
        <p className="font-semibold mb-1">
          A sleek wallpaper app to explore, download, and manage favorites
        </p>
        <p className="text-gray-600 mb-4">
          Pixster offers a seamless experience for browsing and downloading
          high-quality wallpapers, with search and favorites features for easy
          access and personalization.
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
            Flutter
          </span>
          <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
            Dart
          </span>
          <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
            BLoC
          </span>
          <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
            HTTP
          </span>
          <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-md text-sm">
            Hive
          </span>
        </div>
        <div className="flex space-x-2">
          <a
            href="https://github.com/vivekupasani/Pixster-A-Wallpaper-Collection.git"
            className="flex items-center bg-gray-800 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-700"
          >
            <Github className="mr-1" size={14} />
            Github
          </a>
        </div>
      </motion.div>

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
