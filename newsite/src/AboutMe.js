import React, { useState, useEffect } from "react";
import H1 from "./pictures/Html1.png";
import C1 from "./pictures/Css1.png";
import J1 from "./pictures/Javascript1.png";
import T1 from "./pictures/Tailwind1.jpeg";
import R1 from "./pictures/React1.jpeg";
import CVDownloadButton from "./CVDownloadbutton";
import Advanceflex from "./Advanceflex.js";

import { FiPhoneCall, FiGlobe, FiMapPin } from "react-icons/fi"; // Import icons from react-icons

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

  return (
    <>
      <div
        id="aboutMe"
        className={`bg-${
          theme === "light" ? "white" : "black"
        } hover:animate-background rounded-xl bg-gradient-to-r from-white-100 via-gray-400 to-white p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] text-${
          theme === "light" ? "black" : "white"
        }`}
      >
        <div className="about-me-container  flex flex-col md:flex-row items-center md:divide-x md:divide-gray-300 p-8 justify-content: space-between">
          {/* Personal Information Section */}
          <div
            className={`personal-info-section md:mr-8 w-full md:w-1/2 lg:max-w-md p-6 border rounded-lg ${
              theme === "light" ? "bg-white-300" : "bg-gray-800"
            } shadow-md`}
          >
            <h2
              className={`text-2xl font-bold mb-2 text-center ${
                theme === "light" ? "text-pink-800" : "text-pink-800"
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
              {/* Replace the border divs with icon divs */}
              <a
                href="tel:+2349058824643"
                className="flex items-center justify-center"
              >
                <FiPhoneCall size={24} className="mr-2" /> {/* Phone icon */}
                <p
                  className={`text-sm ${
                    theme === "light" ? "text-green-600" : "text-gray-300"
                  }`}
                >
                  +2349058824643
                </p>
              </a>
              <div className="flex items-center justify-center">
                <FiMapPin size={24} className="mr-2" /> {/* Nationality icon */}
                <p className="text-sm text-green-600">Nigerian</p>
              </div>
              <div className="flex items-center justify-center">
                <FiGlobe size={24} className="mr-2" /> {/* Language icon */}
                <p className="text-sm text-green-600">English</p>
              </div>
            </div>
            <div className="flex justify-center">
              {" "}
              {/* Center the button */}
              <CVDownloadButton />
            </div>
          </div>

          {/* Experience and Education Section */}
        </div>
      </div>
    </>
  );
};

export default AboutMe;
