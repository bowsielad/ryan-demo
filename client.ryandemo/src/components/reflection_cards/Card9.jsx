import React, { useState } from "react";
import "./reflection.css";

export const Card9 = ({ onResponse }) => {
  const questionId = 9;

  const handleCardClick = (response) => {
    onResponse({ questionId, response });
  };



  return (
    <div>
      <p>Complete</p>
      <h4>Congrats! You are done.</h4>
      <p>View your results</p>
      <button
        className="complete-Btn"
        onClick={() => handleCardClick("complete")}
      >
        Finish
      </button>
    </div>
  );
};

