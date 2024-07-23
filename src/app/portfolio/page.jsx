"use client";

import { motion } from "framer-motion";

const PortfolioPage = () => {
  return (
    <motion.div
      className="h-full overflow-hidden"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div
        className="h-full overflow-scroll"
        style={{
          WebkitOverflowScrolling: "touch",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {/* Container for Projects and Images */}
        <div className="p-4 sm:p-8 md:p-10 lg:p-16 xl:p-24 flex flex-col gap-16 md:gap-20 lg:gap-24 xl:gap-32">
          {/* Project1 Container */}
          <div className="flex flex-col gap-4 bg-gray-50 p-6 rounded-lg max-w-4xl mx-auto">
            <h1 className="font-bold text-2xl">Global Educational Platform</h1>
            <div className="flex justify-center w-full">
              <img src="/project2.jpeg" alt="Image" className="w-1/2 h-auto" />
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="italic">Technology: MERN Stack</span>
              <a
                href="https://github.com/ShakilUrRehman21/e-learn"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black flex items-center"
              >
                Link
              </a>
            </div>
            <p className="text-lg">
  • Created a platform for educational purposes, enabling students to access learning resources.<br />
  • Integrated video library for on-demand learning across diverse subjects.<br />
  • Provided collection of e-books and study materials, along with mentoring sessions.<br />
  • Offered personalized learning experiences tailored to student requirements.
</p>

          </div>

          {/* Project2 Container */}
          <div className="flex flex-col gap-4 bg-gray-50 p-6 rounded-lg max-w-4xl mx-auto ">
            <h1 className="font-bold text-2xl">Real-Time Chat App</h1>
            <div className="flex justify-center w-full">
              <img src="/project1.jpeg" alt="Image" className="w-1/2 h-auto" />
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="italic">Technology: SpringBoot </span>
              <a
                href="https://github.com/ShakilUrRehman21/JavaChatApp"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black flex items-center"
              >
                Link
              </a>
            </div>
            <p className="text-lg">
            • Developed a Spring Boot MVC app enabling real-time communication between users. <br/>
            • Implemented WebSocket technology for instant messaging and online presence indicators. <br/>
            • Connected chatroom to Firebase for real-time updates and data storage. <br/>
            • Key Features: Private conversations and secure user authentication ensuring privacy.<br/>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
