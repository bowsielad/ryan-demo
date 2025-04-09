import React, { useState } from "react";
import "./lifestyle.css";

export const Card6 = ({ onResponse }) => {
  const [intakeCannabis, setIntakeCannabis] = useState("");
  const [cannabis, setCannabis] = useState("");

  const questionId = 6;

  const intakeOptions = ["Yes", "No"];
  const Options = ["Daily", "Weekly", "Monthly"];

  const handleCannabisIntakeChange = (e) => {
    const value = e.target.value;
    setIntakeCannabis(value);
    onResponse({ questionId, response1: value, response2: "" }); // Reset treats when intake changes
  };

  const handleCannabisChange = (e) => {
    const value = e.target.value;
    setCannabis(value);
    onResponse({ questionId, response1: intakeCannabis, response2: value });
  };

  return (
    <div className="lifestyle-control">
      <p> Question {questionId} of 5</p>
      <h4>I use cannabis</h4>
      <div className="lifestyle-main-control">
      {intakeOptions.map((option) => (
        <label key={option} className="lifestyle-radio-control">
          <input
            type="radio"
            name="intakeCannabis"
            value={option}
            checked={intakeCannabis === option}
            onChange={handleCannabisIntakeChange}
            className="lifestyle-radio"
          />
          {option}
        </label>
      ))}
      </div>

      {intakeCannabis && (
        <div className="lifestyle-sub-control">
          <p>On average, I use cannabis</p>
          {Options.map((option) => (
            <label key={option} className="lifestyle-radio-control">
              <input
                type="radio"
                name="cannabis"
                value={option}
                checked={cannabis === option}
                onChange={handleCannabisChange}
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

