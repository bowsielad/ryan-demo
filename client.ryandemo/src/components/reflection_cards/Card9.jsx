import React, { useState } from "react";
import "./reflection.css";

export const Card9 = ({ onResponse }) => {
  const questionId = 9;
  const questionArea = "Complete";

  const handleCardClick = (response) => {
    onResponse({ questionId, response });
  };

  // Define dynamic colors based on questionArea
  const colorMapping = {
    Mind: { tagBg: "#FFF4E5", tagText: "#A45B00", btnBg: "#A45B00", btnBorder: "#A45B00" },
    Nutrition: { tagBg: "#ECFDF3", tagText: "#027A48", btnBg: "#225815", btnBorder: "#225815" },
    Fitness: { tagBg: "#EAF7FD", tagText: "#155571", btnBg: "#155571", btnBorder: "#155571" },
  };


  const styles = colorMapping[questionArea] || colorMapping["Mind"]; // Default to "Mind" if not found

  return (
    <div>
      <div 
        className="reflectionTag" 
        style={{ backgroundColor: styles.tagBg, color: styles.tagText }}
      >
        {questionArea}
      </div>
      <h4>Congrats! You are done.</h4>
      <p>View your results</p>
      <button
        className="reflectionBtn"
        style={{ backgroundColor: styles.btnBg, borderColor: styles.btnBorder }}
        onClick={() => handleCardClick("complete")}
      >
        Finish
      </button>
    </div>
  );
};

