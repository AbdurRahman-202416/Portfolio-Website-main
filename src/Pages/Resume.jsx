
import Navbar from '../Component/Navbar';
import React, { useState } from "react";
import Experience from '../Component/Resume Component/Experience';
import Education from '../Component/Resume Component/Education';
import Skills from '../Component/Resume Component/Skills';
import AboutMe from '../Component/Resume Component/AboutMe';

const Resume = () => {
  const portfolioItem = [
    { id: "Experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About Me" },
  ];

  const [activeTab, setActiveTab] = useState("Experience");
  return (
    <div className='bg-[#0A2647] px-0   sm:px-4 h-full'>
      <div>
        <Navbar />
      </div>
      <div className="flex flex-col w-full py-4  xl:flex-row gap-1 sm:gap-10">

        <div
          role="tablist"
          aria-orientation="horizontal"
          className="h-auto rounded-md  flex flex-col w-full max-w-sm sm:max-w-md mx-auto xl:mx-0 gap-4 sm:gap-6"
          tabIndex={0}
        >
          {portfolioItem.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex shadow-lg border opacity-85 transform duration-300 hover:text-[#0A2647] hover:bg-[#00ff88] border-[#00ff99] font-semibold items-center w-full justify-center whitespace-nowrap rounded-lg p-3 text-sm sm:text-base  transition-all ${activeTab === tab.id
                ? "bg-[#00ff99] text-[#0A2647] border border-white"
                : "bg-gray-800 text-gray-300"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-4 sm:p-6 rounded-xl h-auto shadow-lg bg-gradient-to-r from-gray-800 to-gray-700 w-full">
          {activeTab === "Experience" && (
            <div>
              <Experience />
            </div>
          )}

          {activeTab === "education" && (
            <div>
              <Education />
            </div>
          )}

          {activeTab === "skills" && (
            <div>
              <Skills />
            </div>
          )}


          {activeTab === "about" && (
            <div className=' '>
              <AboutMe />
            </div>
          )}
        </div>
      </div>
      <p className='h-[20vh]'></p>
    </div>
  );
};

export default Resume;
