import React, { useState, useEffect } from "react";
import H1 from "./pictures/Html1.png";
import C1 from "./pictures/Css1.png";
import J1 from "./pictures/Javascript1.png";
import T1 from "./pictures/Tailwind1.jpeg";
import R1 from "./pictures/React1.jpeg";
import CVDownloadButton from "./CVDownloadbutton";
import About from "./About.js";
import Advanceflex from "./Advanceflex.js";

const AboutMe = () => {
  const [age, setAge] = useState(0);
  const [theme, setTheme] = useState("light"); // Default theme is light

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const birthYear = 1997;
    const currentYear = new Date().getFullYear();
    const calculatedAge = currentYear - birthYear;

    setAge(calculatedAge);

    const intervalId = setInterval(() => {
      const updatedAge = new Date().getFullYear() - birthYear;
      setAge(updatedAge);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const images = [
    { image: H1, skill: "HTML5" },
    { image: C1, skill: "CSS3" },
    { image: J1, skill: "JavaScript (ES6+)" },
    { image: T1, skill: "Tailwind CSS" },
    { image: R1, skill: "React.js" },
  ];

  return (
    <>
      <div
        id="AboutMe"
        className={`bg-${theme === "light" ? "white" : "black"} text-${
          theme === "light" ? "black" : "white"
        }`}
      >
        <h1 className="ml-8 mt-4 text-gray-800 font-bold font-mono h-8 text-5xl hover:font-sans hover:text-gray-600">
          DATA
        </h1>
        <div className="about-me-container  flex flex-col md:flex-row items-center md:divide-x md:divide-gray-300 p-8 justify-content: space-between">
          {/* Personal Information Section */}
          <div
            className={`personal-info-section md:mr-8 w-full md:w-1/2 lg:max-w-md p-6 border rounded-lg ${
              theme === "light" ? "bg-white-300" : "bg-gray-800"
            } shadow-md`}
          >
            <h2
              className={`text-2xl font-bold mb-2 text-center ${
                theme === "light" ? "text-black" : "text-gray-800"
              }`}
            >
              Personal
            </h2>
            <div className="border-4 border-gray-500 rounded-lg p-4 shadow-md mb-4 end">
              <div id="sparko">
                <p
                  className={`text-lg ${
                    theme === "light" ? "text-gray-700" : "text-gray-300"
                  } mb-4 font-mono hover:font-sans`}
                >
                  Hi, I'm Omobolarinwa Quadri, a passionate front-end developer
                  dedicated to creating engaging and user-friendly web
                  experiences.
                </p>
              </div>
              <div id="lighto">
                {/* Content for the lighto section (if any) */}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4" id="brighto">
              <div className="border-4 border-gray-500 rounded-lg p-4 shadow-md mb-4">
                <p
                  className={`text-lg ${
                    theme === "light" ? "text-gray-600" : "text-gray-300"
                  }`}
                >
                  <span className="font-bold text-black">Age:</span> {age}
                </p>
                <p className="text-sm text-green-600">
                  <span className="font-bold text-black">Freelance:</span>{" "}
                  Available
                </p>
                <p className="text-sm text-green-600">
                  <span className="font-bold text-black">Remote:</span>{" "}
                  Available
                </p>
                <p className="text-sm text-green-600">
                  <span className="font-bold text-black">Hybrid:</span>{" "}
                  Available
                </p>
              </div>
              <div className="border-4 border-gray-500 rounded-lg p-2 shadow-md mb-4">
                <p
                  className={`text-sm ${
                    theme === "light" ? "text-green-600" : "text-gray-300"
                  }`}
                >
                  <span className="font-bold text-black">Phone:</span>{" "}
                  +2349058824643
                </p>
                <p className="text-sm text-green-600">
                  <span className="font-bold text-black">Nationality:</span>{" "}
                  Nigerian
                </p>
                <p className="text-sm text-green-600">
                  <span className="font-bold text-black">Languages:</span>{" "}
                  English
                </p>
              </div>
            </div>
            <div>
              <CVDownloadButton />
            </div>
          </div>

          {/* Experience and Education Section */}
          <div
            className={`experience-education-section w-full md:w-1/2 justify-center mt-10 mr-10 lg:max-w-md p-6 border rounded-lg shadow-md ml-20 ${
              theme === "light" ? "bg-white" : "bg-gray-800"
            }`}
          >
            <About />
          </div>
        </div>
      </div>
      <Advanceflex />
    </>
  );
};

export default AboutMe;
