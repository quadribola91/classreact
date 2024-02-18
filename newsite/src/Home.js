import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./Home.css";
import Articles from "./Articles";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="home-container" id="home">
      {/* Loader */}
      <div className="loader"></div>

      {/* Content */}
      <div className={`content ${isVisible ? "visible" : ""} p-28`}>
        <div className="intro-section">
          <h1 className="text-3xl text-blue-500 md:text-6xl font-bold mb-10 text-center hover:text-red-500">
            Welcome to My Portfolio
          </h1>
          <p className="font-bold text-2xl md:text-5xl text-black text-center mb-4 font-mono">
            FRONT END DEVELOPER
          </p>
        </div>

        <div className="cta-section text-center mb-6">
          <p className="font-bold text-lg mb-2 mt-8 font-serif text-blue-500 hover:text-red-500">
            Ready to bring your ideas to life!
          </p>
          <Link
            to="/Home"
            className="btn-primary font-bold bg-black text-white p-4 md:p-4 mb-4 rounded-full hover:bg-gray-400 hover:text-black hover:font-bold flex items-center justify-center"
          >
            Explore <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
      <Articles />
    </div>
  );
};

export default Home;
