import React, { useState } from "react";

const About = ({ theme }) => {
  const initialExperiences = [
    {
      title: "Alart Academy Maryland LA Nigeria 2023",
      content:
        "Information & Communication Technology / Data Processing Instructor",
    },
    {
      title: "Ministry of Agriculture Secretariat Alausa 2016-2017",
      content: "Industrial Training (IT) Ikeja, Lagos. IT office",
    },
    {
      title: "Bimum Concept Cyber Café LA Nigeria. 2014 – 2016",
      content: "IT Support",
    },
    // Add more experiences as needed
  ];

  const [experiences, setExperiences] = useState(
    initialExperiences.map((exp) => ({ ...exp, isOpen: false }))
  );
  const [isEducationOpen, setEducationOpen] = useState(false);

  const toggleExperience = (index) => {
    const updatedExperiences = experiences.map((exp, i) => ({
      ...exp,
      isOpen: i === index ? !exp.isOpen : false,
    }));
    setExperiences(updatedExperiences);
    setEducationOpen(false); // Close education section when experience section is clicked
  };

  const educationContent = (
    <div className={`bg-${theme === "light" ? "white" : "black"} p-4`}>
      <p className={`font-bold text-${theme === "light" ? "black" : "white"}`}>
        BSC.Ed Computer Science (2019)
      </p>
    </div>
  );

  const icon = (
    <span className="shrink-0 rounded-full bg-green-900 p-4">
      <svg
        className="h-5 w-5 bg-white rounded-full"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ... (unchanged) */}
      </svg>
    </span>
  );

  return (
    <div className={`mx-auto bg-${theme === "light" ? "red-300" : "gray-800"}`}>
      <h1 className="mb-6 ml-8 font-bold text-2xl text-white justify-center text-center">
        Experience & Education Background
      </h1>

      {experiences.map((experience, index) => (
        <div key={index} className="relative">
          <button
            className={`w-full bg-gray-500 p-1 text-left mb-2 flex items-center justify-between text-${
              theme === "light" ? "white" : "black"
            }`}
            onClick={() => toggleExperience(index)}
          >
            {icon}
            <span
              className={`font-bold ${
                theme === "light" ? "text-white" : "text-black"
              } text-lg`}
            >
              {experience.title}
            </span>
            <span
              className={`ml-2 ${
                experience.isOpen ? "transform rotate-180" : ""
              }`}
            >
              &#9660;
            </span>
          </button>
          {experience.isOpen && (
            <div className={`bg-${theme === "light" ? "white" : "black"} p-4`}>
              <p
                className={`font-bold text-${
                  theme === "light" ? "black" : "white"
                }`}
              >
                {experience.content}
              </p>
            </div>
          )}
        </div>
      ))}

      {/* Education Section */}
      <div className="relative">
        <button
          className={`w-full bg-gray-500 p-1 text-left mb-2 flex items-center justify-between text-${
            theme === "light" ? "white" : "black"
          }`}
          onClick={() => setEducationOpen(!isEducationOpen)}
        >
          {icon}
          <span
            className={`font-bold ${
              theme === "light" ? "text-white" : "text-black"
            } text-lg`}
          >
            Tai Solarin University of Education
          </span>
          <span
            className={`ml-2 ${isEducationOpen ? "transform rotate-180" : ""}`}
          >
            &#9660;
          </span>
        </button>
        {isEducationOpen && educationContent}
      </div>
    </div>
  );
};

export default About;
