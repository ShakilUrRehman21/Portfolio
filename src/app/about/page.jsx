"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);

  const scrollToSkills = () => {
    skillsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToExperience = () => {
    experienceRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className="h-full overflow-hidden"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div
        className="h-full overflow-scroll lg:flex"
        style={{
          WebkitOverflowScrolling: "touch",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {/* Text Container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg-gap:48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* Biography Container */}
          <div className="flex flex-col gap-10 justify-center">
            <div className="flex flex-col gap-4 items-start justify-start">
  <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
  <p className="text-lg">
    Dynamic and results-oriented professional with expertise in Java and Python programming languages. Known for a strong work
    ethic, adaptability, and keen problem-solving skills. Possesses an analytical mindset honed through an engineering background,
    ensuring the delivery of robust and aesthetically pleasing solutions.
  </p>
</div>

            <span className="italic">High level experience in DSA.</span>
            {/* Scroll Down Button */}
            <button
              onClick={scrollToSkills}
              className="bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black flex items-center w-5 justify-center"
            >
              ↓
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {/* Skills Container */}
          <div ref={skillsRef} className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">SKILLS</h1>
            {/* Skills List */}
            <div className="flex gap-4 flex-wrap">
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Java
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Python
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SpringBoot
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SQL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Google Colab
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Power BI
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tableau
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Django
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Jupyter Notebook
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Windows
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Full Stack
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                RESTful APIs
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                GitHub
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                FireBase
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
            </div>
            {/* Scroll Down Button */}
            <button
              onClick={scrollToExperience}
              className="bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black flex items-center w-5 justify-center"
            >
              ↓
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          {/* Experience Container */}
          <div
            ref={experienceRef}
            className="flex flex-col gap-12 justify-center pb-48"
          >
            {/* Experience Title */}
            <h1 className="font-bold text-2xl">EXPERIENCE</h1>
            {/* Experience List */}
            <div className="">
              {/* Experience List Item */}
              <div className=" flex justify-between h-48">
                {/* Left */}
                <div className="w-1/3 ">
                  {/* Job Title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Java Developer
                  </div>
                  {/* Job Description */}
                  <div className="p-3 text-sm italic">
                    My current focus. Way better than the experience before!
                  </div>
                  {/* Job Date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024-present
                  </div>
                </div>
                {/* Center */}
                <div className="w-1/6">
                  {/* Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Line Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* Right */}
                <div className="w-1/3"></div>
              </div>
              <div className=" flex justify-between h-48">
                {/* Left */}
                <div className="w-1/3 "></div>
                {/* Center */}
                <div className="w-1/6">
                  {/* Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Line Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* Right */}
                <div className="w-1/3">
                  {/* Job Title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Web Developer
                  </div>
                  {/* Job Description */}
                  <div className="p-3 text-sm italic">
                  Experienced web developer with a proven track record in creating dynamic and responsive web applications.
                  </div>
                  {/* Job Date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2023-2024
                  </div>
                </div>
              </div>
              {/* Experience List Item */}
              <div className=" flex justify-between h-48">
                {/* Left */}
                <div className="w-1/3 ">
                  {/* Job Title */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Python Developer
                  </div>
                  {/* Job Description */}
                  <div className="p-3 text-sm italic">
                  Proficient Python developer with a strong background in building scalable and efficient applications.
                  </div>
                  {/* Job Date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2021-2022
                  </div>
                </div>
                {/* Center */}
                <div className="w-1/6">
                  {/* Line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* Line Circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* Right */}
                <div className="w-1/3"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Image Container */}
        <div className="hidden lg:block w-1 xl:w-1/2 relative">
          <div
            className="fixed top-0 flex flex-col justify-center items-center h-screen transform"
            style={{ transform: "translate(-10px, 55px)" }}
          >
            <img src="/exp.png" alt="Image" className="w-50px h-50px" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default AboutPage;
