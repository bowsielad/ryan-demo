import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./widget.css";

export const QuickLink2 = () => {

  const linkId = 2;
  const linkArea = "Nutrition";

  const colorMapping = {
    Mind: { tagBg: "#FFECD1", tagText: "#804F0E", cardBg: "#FFF6E9", cardColor: "#804F0E" },
    Nutrition: { tagBg: "#D9EFD4", tagText: "#225815", cardBg: "#ECFDF3", cardColor: "#225815"  },
    Fitness: { tagBg: "#D4EEF9", tagText: "#155571", cardBg: "#EAF7FD", cardColor: "#155571"  },
    Coaching: { tagBg: "#F7E0E1", tagText: "#6C3336", cardBg: "#FCF0F1", cardColor: "#6C3336" },
  };

  const styles = colorMapping[linkArea] || colorMapping["Mind"]; // Default to "Mind" if not found


  return (
    <div 
        className="quicklink-card-content"
        style={{ backgroundColor: styles.cardBg, color: styles.cardColor }}
        >
          <div className="quicklink-Header">
            <h3>{linkArea}</h3>
             <div 
             className="quicklink-Badge"
             style={{ backgroundColor: styles.tagBg, color: styles.tagText }}>
              Review
              </div>
           </div>
    
           <div className="quicklink-Goal">
           <p>I will use the Let Us Build Your Meal Plan option to plan my week</p>
           </div>
    
           <div className="quicklink-action">
              <p>View today’s Meal Plan</p>
              <Link to="/" className="quicklink-link">View <span>&#8594;</span></Link>
            </div>
            
          
        </div>
  );
};



