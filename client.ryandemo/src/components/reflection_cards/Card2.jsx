import React, { useState } from "react";
import "./reflection.css";

export const Card2 = ({ onResponse }) => {
  const questionId = 2;
  const questionArea = "Nutrition";

  const handleCardClick = (response) => {
    onResponse({ questionId, response });
  };

  // Define dynamic colors based on questionArea
  const colorMapping = {
    Mind: { tagBg: "#FFF4E5", tagText: "#A45B00", btnBg: "#FFF4E5", btnBorder: "#A45B00", btnColor: "#A45B00" },
    Nutrition: { tagBg: "#ECFDF3", tagText: "#027A48", btnBg: "#ECFDF3", btnBorder: "#225815", btnColor: "#225815"  },
    Fitness: { tagBg: "#EAF7FD", tagText: "#155571", btnBg: "#EAF7FD", btnBorder: "#155571", btnColor: "#155571"  },
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
      <h3>Nutrition Goals<span><p>Did my actions today support my goals?</p></span></h3>
      
      </div>

      <p>I will use the Let Us Build Your Meal Plan option to plan my week</p>

      <div className="reflection-Action">
      <button
        className="reflectionBtn"
        style={{ backgroundColor: styles.btnBg, borderColor: styles.btnBorder, color: styles.btnColor }}
        onClick={() => handleCardClick("Yes")}
      >
        Yes
      </button>
      <button
        className="reflectionBtn"
        style={{ backgroundColor: styles.btnBg, borderColor: styles.btnBorder, color: styles.btnColor }}
        onClick={() => handleCardClick("No")}
      >
        No
      </button>
      </div>
      
    </div>
  );
};

