import React, { useState } from "react";
import "./lifestyle.css";

export const Card2 = ({ onResponse }) => {
  const [intakeFruits, setIntakeFruits] = useState("");
  const [fruits, setTreats] = useState("");

  const questionId = 2;

  const intakeOptions = ["Daily", "Weekly", "Monthly", "Never"];
  const Options = ["1", "2 - 3", "4 - 5", "6 or more"];

  const handleFruitIntakeChange = (e) => {
    const value = e.target.value;
    setIntakeFruits(value);
    onResponse({ questionId, response1: value, response2: "" }); // Reset treats when intake changes
  };

  const handleFruitChange = (e) => {
    const value = e.target.value;
    setTreats(value);
    onResponse({ questionId, response1: intakeFruits, response2: value });
  };

  return (
    <div className="lifestyle-control">
      <p> Question {questionId} of 5</p>
      <h4>Fruit Intake</h4>
      <p>On average, I eat fruit</p>

      <div className="lifestyle-sub-control">
      {intakeOptions.map((option) => (
        <label key={option} className="lifestyle-radio-control">
          <input
            type="radio"
            name="intakeFruits"
            value={option}
            checked={intakeFruits === option}
            onChange={handleFruitIntakeChange }
            className="lifestyle-radio"
          />
          {option}
        </label>
      ))}
      </div>

      {intakeFruits && (
        <div className="lifestyle-sub-control">
          <p>Within this period, I usually have __ servings</p>
          {Options.map((option) => (
            <label key={option} className="lifestyle-radio-control">
              <input
                type="radio"
                name="fruits"
                value={option}
                checked={fruits === option}
                onChange={handleFruitChange}
                className="lifestyle-radio"
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

