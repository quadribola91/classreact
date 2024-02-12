// ProjectsPage.js
import React from "react";
import Navbar2 from "./Navbar2"; // Update the import path based on your file structure
import LifeProjects from "./LifeProjects"; // Replace with the actual component for your life projects
import Footer from "./Footer"; // Replace with the actual Footer component

const ProjectsPage = () => {
  return (
    <div id="projects">
      <div className="container mx-auto mt-12">
        <h1 className="text-3xl font-bold mb-6 mt-8 p-4">Live Projects</h1>
        <LifeProjects />
        {/* Add other content or components as needed */}
      </div>
    </div>
  );
};

export default ProjectsPage;
