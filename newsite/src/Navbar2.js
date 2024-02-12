// Navbar2.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo1 from "./pictures/highC.jpeg";
import "./Navbar2.css"; // Import the CSS file for styling

function Navbar2() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      const scrollPosition = window.scrollY;
      const threshold = 200;

      if (scrollPosition > threshold) {
        navbar.classList.add("fixed-bottom");
      } else {
        navbar.classList.remove("fixed-bottom");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`bg-white ${isNavOpen ? "md:hidden" : ""}`} id="navbar">
      <div className="bg-white container fixed top-0 z-50 overflow-hidden mt-0 mb-12 mx-auto top-0 flex items-center  justify-between p-1">
        {/* Container for logo */}
        <div className="flex items-center">
          <img src={logo1} className="rounded-full h-12" alt="Logo" />
        </div>

        {/* Container for middle components */}
        <div
          className={`hidden md:flex items-center space-x-4  ${
            isNavOpen ? "block" : "hidden"
          }`}
        >
          <div className="nav-center bg-white p-4 rounded-full shadow-lg">
            <Link
              to="/home"
              className={`text-black hover:text-gray-700 font-mono hover:font-sans font-bold m-2 ${
                location.pathname === "/Home" ? "hover:text-green-500" : ""
              } transition`}
            >
              Home
            </Link>
            <Link
              to="/AboutMe"
              className={`text-black hover:text-gray-700 font-mono hover:font-sans font-bold m-2 ${
                location.pathname === "/AboutMe" ? "hover:text-green-500" : ""
              } transition`}
            >
              AboutMe
            </Link>
            <Link
              to="/contact"
              className={`text-black hover:text-gray-700 font-mono hover:font-sans font-bold m-2 ${
                location.pathname === "/contact" ? "hover:text-green-500" : ""
              } transition`}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Container for Sign Agreement */}
        <div
          className={`hidden md:flex items-center space-x-4 ${
            isNavOpen ? "hidden" : "block"
          }`}
        >
          <div className="nav-center bg-red p-2 rounded-full shadow-lg">
            <Link
              to="/projects"
              className={`text-black hover:text-red-800 text-xl font-mono hover:font-sans font-bold m-2 font-bold m-2 ${
                location.pathname === "/projects" ? "hover:text-red-500" : ""
              } transition`}
            >
              Projects
            </Link>
            {/* Add other navigation links as needed */}
          </div>
        </div>

        {/* Toggle button for mobile */}
        <div className="md:hidden">
          <button onClick={toggleNav} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${isNavOpen ? "hidden" : "block"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${isNavOpen ? "block" : "hidden"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Adjusted styles for more space, increased width, and reduced padding */}
      <div className={`md:hidden ${isNavOpen ? "block" : "hidden"} px-6`}>
        <div className="flex flex-col items-center space-y-4 mt-8 p-4">
          <Link
            to="/Home"
            className={`text-black hover:text-gray-700 text-xl font-mono hover:font-sans font-bold m-2 transition ${
              location.pathname === "/Home" ? "active" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/AboutMe"
            className={`text-black hover:text-gray-700 text-xl font-mono hover:font-sans font-bold m-2 transition ${
              location.pathname === "/AboutMe" ? "active" : ""
            }`}
          >
            AboutMe
          </Link>
          <Link
            to="/contact"
            className={`text-black hover:text-gray-700 text-xl font-mono hover:font-sans font-bold m-2 transition ${
              location.pathname === "/contact" ? "active" : ""
            }`}
          >
            Contact
          </Link>
          <Link
            to="/projects"
            className={`bg-blue-800 hover:bg-blue-200 text-xl hover:text-green-800 text-white rounded-full px-2 py-2 font-medium ${
              location.pathname === "/projects" ? "active" : ""
            }`}
          >
            Projects
          </Link>
          {/* Sign Agreement button is intentionally omitted in mobile view */}
        </div>
      </div>
    </header>
  );
}

export default Navbar2;
