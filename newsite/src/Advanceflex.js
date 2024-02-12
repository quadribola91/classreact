import React, { useState, useRef } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(0);
  const imageRef = useRef(null);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].clientX;
    if (startX - x > 50) {
      // Swiped left
      handleNext();
    } else if (startX - x < -50) {
      // Swiped right
      handlePrev();
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === skillsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? skillsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="relative w-full max-w-3xl">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
          ref={imageRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0"
              style={{ minWidth: "100%", maxWidth: "300px", height: "400px" }}
            >
              <img
                src={currentIndex === index ? skill.image1 : skill.image2}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
          {skillsData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2.5 w-2.5 rounded-full mx-1 focus:outline-none ${
                currentIndex === index ? "bg-gray-800" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
