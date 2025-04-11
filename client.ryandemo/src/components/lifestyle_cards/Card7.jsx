import React, { useState } from "react";


export const Card7 = ({ onResponse }) => {
  const questionId = 7;

  const handleCardClick = (response) => {
    onResponse({ questionId, response1: response });
  };

  return (
    <div className="cardWrapper">
      <p>Complete</p>
      <h4>Congrats! You are done.</h4>
      <p>View your results</p>
      <button
        className="complete-Btn" onClick={() => handleCardClick("complete")}
      >
        Finish
      </button>
    </div>
  );
};

