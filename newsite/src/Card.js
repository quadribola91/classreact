import React from "react";
import "./Card.css"; // Import CSS file for styling

export default function Card() {
  return (
    <div className="card" id="card">
      <div className="image-container">
        <img
          src="https://via.placeholder.com/150" // Placeholder image URL for display
          alt="Skill 1"
          className="image"
        />
        <img
          src="https://via.placeholder.com/150" // Placeholder image URL for hover
          alt="Skill 2"
          className="image hidden" // Hide this image by default
        />
      </div>
      <div className="line"></div> {/* Border line */}
      <div className="image-container">
        <img
          src="https://via.placeholder.com/150" // Placeholder image URL for display
          alt="Skill 3"
          className="image"
        />
        <img
          src="https://via.placeholder.com/150" // Placeholder image URL for hover
          alt="Skill 4"
          className="image hidden" // Hide this image by default
        />
      </div>
      <div className="line"></div> {/* Border line */}
      <div className="image-container">
        <img
          src="https://via.placeholder.com/150" // Placeholder image URL for display
          alt="Skill 5"
          className="image"
        />
        <img
          src="https://via.placeholder.com/150" // Placeholder image URL for hover
          alt="Skill 6"
          className="image hidden" // Hide this image by default
        />
      </div>
    </div>
  );
}
