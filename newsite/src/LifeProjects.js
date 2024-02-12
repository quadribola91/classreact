// LifeProjects.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import projectImage1 from "./pictures/TodoApp.png";
import projectImage1Hover from "./pictures/TodoApp2.png";
import projectImage2 from "./pictures/muchit3.webp";
import projectImage2Hover from "./pictures/muchit5.jpg";
import projectImage3 from "./pictures/Abis.jpg";
import projectImage3Hover from "./pictures/Abis.jpg";
import projectImage4 from "./pictures/weather1.png";
import projectImage4Hover from "./pictures/weather2.jpeg";
import projectImage5 from "./pictures/temp1.jpeg";
import projectImage5Hover from "./pictures/temp2.png";

const LifeProjects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Todo App",
      defaultImage: projectImage1,
      hoverImage: projectImage1Hover,
      link: "https://todo-project-f7aa.vercel.app/", // Provide the full URL
    },
    {
      id: 2,
      title: "HighCloud Weather",
      defaultImage: projectImage4,
      hoverImage: projectImage4Hover,
      link: "https://weather-p-xi.vercel.app/",
    },
    {
      id: 3,
      title: "Abis",
      defaultImage: projectImage3,
      hoverImage: projectImage3Hover,
      link: "/project2",
    },
    {
      id: 4,
      title: "Receipe",
      defaultImage: projectImage2,
      hoverImage: projectImage2Hover,
      link: "/project4",
    },
    {
      id: 5,
      title: "Temperature Converter",
      defaultImage: projectImage5,
      hoverImage: projectImage5Hover,
      link: "/project2",
    },
    // Add more projects as needed
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Link
          key={project.id}
          to={project.link}
          onMouseOver={() => setHoveredProject(project.id)}
          onMouseOut={() => setHoveredProject(null)}
          className="hover:no-underline"
        >
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={
                hoveredProject === project.id
                  ? project.hoverImage
                  : project.defaultImage
              }
              alt={project.title}
              className="mb-4 h-32 w-full object-cover rounded-md transition-all duration-300"
            />
            <h3 className="text-xl font-bold">{project.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default LifeProjects;
