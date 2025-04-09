import React, { useState } from "react";
import "./lifestyle.css";

export const Card5 = ({ onResponse }) => {
  const [intakeVape, setIntakeVape] = useState("");
  const [vape, setVape] = useState("");

  const questionId = 5;

  const intakeOptions = ["Yes", "No"];
  const Options = ["Daily", "Weekly", "Monthly"];

  const handleVapeIntakeChange = (e) => {
    const value = e.target.value;
    setIntakeVape(value);
    onResponse({ questionId, response1: value, response2: "" }); // Reset treats when intake changes
  };

  const handleVapeChange = (e) => {
    const value = e.target.value;
    setVape(value);
    onResponse({ questionId, response1: intakeVape, response2: value });
  };

  return (
    <div className="lifestyle-control">
      <p> Question {questionId} of 5</p>
      <h4>I vape</h4>
      <div className="lifestyle-main-control">
      {intakeOptions.map((option) => (
        <label key={option} className="lifestyle-radio-control">
          <input
            type="radio"
            name="intakeVape"
            value={option}
            checked={intakeVape === option}
            onChange={handleVapeIntakeChange}
            className="lifestyle-radio"
          />
          {option}
        </label>
      ))}
      </div>

      {intakeVape && (
        <div className="lifestyle-sub-control">
          <p>On average, I vape</p>
          {Options.map((option) => (
            <label key={option} className="lifestyle-radio-control">
              <input
                type="radio"
                name="vape"
                value={option}
                checked={vape === option}
                onChange={handleVapeChange}
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

