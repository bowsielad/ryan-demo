import React, { useState } from "react";
import "./lifestyle.css";

export const Card3 = ({ onResponse }) => {
  const [drinksTea, setDrinksTea] = useState("");
  const [teaFrequency, setTeaFrequency] = useState("");
  const [teaCups, setTeaCups] = useState("");

  const questionId = 3;

  const frequencyOptions = ["Daily", "Weekly", "Monthly"];
  const quantityOptions = ["1 - 2", "3 - 4", "5 - 7", "8 - 14", "15 or more"];

  const handleDrinksTeaChange = (e) => {
    const value = e.target.value;
    setDrinksTea(value);
    setTeaFrequency(""); // Reset frequency when changing Yes/No
    setTeaCups(""); // Reset quantity as well
    onResponse({ questionId, response1: value, response2: "", response3: "" });
  };

  const handleTeaFrequencyChange = (e) => {
    const value = e.target.value;
    setTeaFrequency(value);
    setTeaCups(""); // Reset quantity when frequency changes
    onResponse({ questionId, response1: drinksTea, response2: value, response3: "" });
  };

  const handleTeaCupsChange = (e) => {
    const value = e.target.value;
    setTeaCups(value);
    onResponse({ questionId, response1: drinksTea, response2: teaFrequency, response3: value });
  };

  return (
    <div className="lifestyle-control">
      <p>Question {questionId} of 5</p>
      <h4>Caffeinated Tea Intake</h4>
      <p>I drink caffeinated tea:</p>

      <div className="lifestyle-main-control">
      <label className="lifestyle-radio-control">
        <input
          type="radio"
          name="drinksTea"
          value="Yes"
          checked={drinksTea === "Yes"}
          onChange={handleDrinksTeaChange}
          className="lifestyle-radio-top"
        />
        Yes
      </label>
      <label className="lifestyle-radio-control">
        <input
          type="radio"
          name="drinksTea"
          value="No"
          checked={drinksTea === "No"}
          onChange={handleDrinksTeaChange}
          className="lifestyle-radio"
        />
        No
      </label>

      </div>

      {drinksTea === "Yes" && (
        <div className="lifestyle-sub-control">
          <p>On average, I drink caffeinated tea:</p>
          {frequencyOptions.map((option) => (
            <label key={option} className="lifestyle-radio-control">
              <input
                type="radio"
                name="teaFrequency"
                value={option}
                checked={teaFrequency === option}
                onChange={handleTeaFrequencyChange}
                className="lifestyle-radio"
              />
              {option}
            </label>
          ))}
        </div>
      )}

      {drinksTea === "Yes" && teaFrequency && (
        <div className="lifestyle-sub-control">
          <p>Within this period, I usually have ___ cups:</p>
          {quantityOptions.map((option) => (
            <label key={option} className="lifestyle-radio-control">
              <input
                type="radio"
                name="teaCups"
                value={option}
                checked={teaCups === option}
                onChange={handleTeaCupsChange}
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


