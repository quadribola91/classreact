import React from "react";
import "./Advanceflex.css";
import H1 from "./pictures/Html1.png";
import H2 from "./pictures/Html2.png";
import C1 from "./pictures/Css1.png";
import C2 from "./pictures/Css2.png";
import J1 from "./pictures/Javascript1.png";
import J2 from "./pictures/Javascript2.png";
import T1 from "./pictures/Tailwind1.jpeg";
import T2 from "./pictures/Tailwind2.png";
import R1 from "./pictures/React1.jpeg";
import R2 from "./pictures/React2.png";

const skillsData = [
  { name: "HTML", image1: H1, image2: H2 },
  { name: "CSS", image1: C1, image2: C2 },
  { name: "JavaScript", image1: J1, image2: J2 },
  { name: "Tailwind CSS", image1: T1, image2: T2 },
  { name: "React", image1: R1, image2: R2 },
];

export default function SkillsCard() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div
        className="sm:flex sm:flex-wrap lg:flex lg:flex-wrap justify-center gap-6 bg-white p-6"
        id="skills"
      >
        {skillsData.map((skill, index) => (
          <div key={index} className="bg-300 mt-4 hexagon mb-6 lg:mr-6">
            <a href="#" className="group block overflow-hidden">
              <div className="relative h-[500px] sm:h-[450px]">
                {/* Adjust the height value for the desired card height */}
                <img
                  src={skill.image1}
                  alt=""
                  className="absolute inset-0 h-100% w-100% object-cover opacity-100 group-hover:opacity-0 rounded-2xl justify-center"
                />

                <img
                  src={skill.image2}
                  alt=""
                  className="absolute inset-0 h-100% w-100% object-cover opacity-0 group-hover:opacity-100 rounded-2xl justify-center"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                {/* Add additional information about the skill if needed */}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
