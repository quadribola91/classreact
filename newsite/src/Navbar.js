import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "./ProfilePic.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white top-0 left-0 z-50 fixed  lg:w-full">
      <div
        className={`max-w-7xl mx-auto px-4 ${
          isOpen ? "block" : "hidden"
        } lg:block`}
      >
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-white">
                <img
                  src={logo1}
                  alt="Logo"
                  className="w-12 h-12 rounded-full"
                />
              </Link>
            </div>
            <div>
              <h1 className="hidden:text-sm md:text-2xl font-bold text-black mt-2 ml-4">
                Omobolarinwa.dev
              </h1>
            </div>
          </div>
          <div className="hidden lg:block mt-4">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-gray-800 font-bold hover:text-gray-300"
              >
                Home
              </Link>
              <Link
                to="/Home"
                className="text-gray-800 font-bold hover:text-gray-300"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-800 font-bold hover:text-gray-300"
              >
                Contact
              </Link>
              <button className="bg-blue-500 hover:bg-blue-200 ml-10 p-2 rounded-full ">
                <Link
                  to="/projects"
                  className="text-white hover:text-white font-bold text-mono"
                >
                  Projects
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="lg:hidden">
        <button
          onClick={handleToggle}
          className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {/* Icon when menu is closed */}
          {!isOpen ? (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          ) : (
            // Icon when menu is open
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
        {isOpen && (
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 w-1/2 lg:w-full">
            <Link
              to="/"
              className="text-gray-600 font-bold hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base"
            >
              Home
            </Link>

            <Link
              to="/Home"
              className="text-gray-600 font-bold hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-gray-600 font-bold hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base"
            >
              Contact
            </Link>
            <button className="bg-blue-700 mt-6 p-2 rounded-full hover:bg-blue-300 px-3 py-2">
              <Link
                to="/projects"
                className=" text-white hover:text-white font-bold block text-mono "
              >
                Projects
              </Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
