import React, { useState } from "react";
import "./reflection.css";

export const Card1 = ({ onResponse }) => {
  const questionId = 1;
  const questionArea = "Mind";

  const handleCardClick = (response) => {
    onResponse({ questionId, response });
  };

  // Define dynamic colors based on questionArea
  const colorMapping = {
    Mind: { tagBg: "#FFF4E5", tagText: "#A45B00", btnBg: "#FFF4E5", btnBorder: "#A45B00", btnColor: "#A45B00" },
    Nutrition: { tagBg: "#ECFDF3", tagText: "#027A48", btnBg: "#225815", btnBorder: "#225815", btnColor: "#225815"  },
    Fitness: { tagBg: "#EAF7FD", tagText: "#155571", btnBg: "#155571", btnBorder: "#155571", btnColor: "#155571"  },
  };

  const styles = colorMapping[questionArea] || colorMapping["Mind"]; // Default to "Mind" if not found

  return (
    <div className="reflection-Container">
      <div 
        className="reflectionTag" 
        style={{ backgroundColor: styles.tagBg, color: styles.tagText }}
      >
        {questionArea}
      </div>

      <div className="reflection-Title">
      <h3>Mind Goals<span><p>Did my actions today support my goals?</p></span></h3>
      
      </div>

      <p>Practice changing my thoughts before they turn into my feelings</p>

      <div className="reflection-Action">
      <button
        style={{ backgroundColor: styles.btnBg, borderColor: styles.btnBorder, color: styles.btnColor }}
        onClick={() => handleCardClick("Yes")}
      >
        Yes
      </button>
      <button
        style={{ backgroundColor: styles.btnBg, borderColor: styles.btnBorder, color: styles.btnColor }}
        onClick={() => handleCardClick("No")}
      >
        No
      </button>
      </div>
      
    </div>
  );
};