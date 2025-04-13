import React from "react";
import { Github, ExternalLink } from "lucide-react";
const Projects = () => {
  return (
    <div className="py-8 max-w-4xl mx-auto px-4">
      <h2 className="text-4xl sm:text-3xl font-bold mb-4 ">Projects</h2>
      <p className="text-gray-600 mb-8">
        I'm currently working on an AI-powered code review SaaS tool designed to
        help developers write better code. I'm passionate about building
        products that enhance productivity and simplify the development process.{" "}
        <br />
        Below are three of my projects — feel free to check out more on my{" "}
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
        <div className="border border-gray-200 rounded-lg p-6">
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
            Built with Ejs, Node.js, and Express.js.
          </p>
          <p className="font-semibold mb-1">
            Say goodbye to handcrafting mock data
          </p>
          <p className="text-gray-600 mb-4">
            It offers high-performance mock APIs for developers, testers, and
            businesses. It provides fast responses and realistic data, perfect
            for learning API integration, testing, or prototyping—without the
            need for a backend.
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
            Built with Flutter, Node.js, Express.js, Cloudinary and MongoDB.
          </p>
          <p className="font-semibold mb-1">
            A Google drive-style cloud storage app
          </p>
          <p className="text-gray-600 mb-4">
            It provides a fast and reliable cloud storage solution for users to
            upload, manage, and store media files securely. With Cloudinary
            integration for media storage, CloudStash ensures smooth,
            high-performance file management.
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
              Cloudinary
            </span>
          </div>

          <div className="flex space-x-2">
            <a
              href="#"
              className="flex items-center bg-gray-800 text-white px-3 py-1 rounded-md text-sm hover:bg-gray-700"
            >
              <ExternalLink className="mr-1" size={14} />
              Link to app
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
  );
};

export default Projects;
