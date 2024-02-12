import React, { useEffect, useRef, useState } from "react";
import pic from "./ProfilePic.jpg";
import AboutMe from "./AboutMe";
import SkillsCard from "./Advanceflex";
import Stories from "./Stories";
import Articles from "./Articles";
import ProjectsPage from "./ProjectsPage";
import Contact from "./Contact";

export default function Content({ blog }) {
  const blogNameRef = useRef(null);
  const blogTitleRef = useRef(null);
  const projectRef = useRef(null);
  const contentRef = useRef(null);

  const [theme, setTheme] = useState("light"); // Default theme is light

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const changeStyle = (elementRef) => {
      if (elementRef.current) {
        const colors = [
          "#FF0000",
          "#00FF00",
          "#0000FF",
          "#FFFF00",
          "#FF00FF",
          "#00FFFF",
          "#FFA500",
          "#008000",
          "#800080",
          "#808080",
        ];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        elementRef.current.style.color = randomColor;

        setTimeout(() => {
          changeStyle(elementRef);
        }, 2500);
      }
    };

    const toggleVisibility = () => {
      if (projectRef.current) {
        const projectElement = projectRef.current;
        if (projectElement.style) {
          projectElement.style.opacity =
            projectElement.style.opacity === "0" ? "1" : "0";
        }
      }
    };

    changeStyle(blogNameRef);
    changeStyle(blogTitleRef);
    toggleVisibility();

    // Apply scrolling animation to contentRef
    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.style.animation = "flowingMotion 5s linear infinite";
    }

    // Toggle visibility at an interval
    const intervalId = setInterval(() => {
      toggleVisibility();
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes flowingMotion {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20%);
            }
            100% {
              transform: translateY(0);
            }
          }
        `}
      </style>

      <div
        className={`bg-${
          theme === "light" ? "white" : "black"
        } p-6 md:p-8 rounded-lg mb-6`}
        id="Home"
      >
        <div className="relative block overflow-hidden rounded-lg border border-gray-100 mt-8 p-4 lg:p-6 transition-transform hover:transform-hover hover:animate-background rounded-xl bg-gradient-to-r from-white-100 via-gray-400 to-white p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
          {/* Toggle Button */}

          <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
          <div className="flex flex-col md:flex-col md:justify-between items-center md:items-center">
            <div className="mb-4 md:mb-0 text-center md:text-center">
              <p
                ref={blogNameRef}
                className={`mt-1 font-medium text-3xl md:text-6xl text-${
                  theme === "light" ? "gray-600" : "gray-300"
                } transition-colors hover:text-green-500`}
              >
                {blog.name}
              </p>
              <h3
                ref={blogTitleRef}
                className={`text-3xl md:text-4xl font-bold text-${
                  theme === "light" ? "gray-900" : "gray-200"
                } transition-colors hover:text-green-500`}
              >
                {blog.title}
              </h3>
            </div>

            <div className="md:ml-4 overflow-hidden">
              <div className="border border-gray-300 rounded-lg shadow-md">
                <img
                  alt="Paul Clapton"
                  src={pic}
                  className="h-40 w-40 md:h-55 md:w-55 hover:h-70 hover:w-70 hover:md:h-80 hover:md:w-80 rounded-md object-cover shadow-sm transform-hover"
                />
              </div>
            </div>
          </div>

          <div className="mt-4 mb-12 group border-s-4 border-gray-700 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
            <p
              ref={contentRef}
              className={`text-lg text-${
                theme === "light" ? "black" : "white"
              } font-bold font-mono hover:font-serif hover:text-${
                theme === "light" ? "gray-800" : "gray-400"
              }`}
            >
              {blog.content}
            </p>
          </div>
          <div
            ref={projectRef}
            className={`mt-15 mb-8 font-bold text-lg md:text-5xl text-${
              theme === "light" ? "blue-500" : "blue-300"
            } font-mono`}
          >
            <p>{blog.project}</p>
          </div>
        </div>
      </div>

      {/* ... rest of your code ... */}
      <AboutMe />
      <SkillsCard />
      <Articles />
      <ProjectsPage />
      <Contact />
    </>
  );
}
