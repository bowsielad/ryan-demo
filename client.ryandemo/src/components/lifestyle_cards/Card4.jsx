import React, { useState } from "react";
import "./lifestyle.css";

export const Card4 = ({ onResponse }) => {
  const [intakeDine, setIntakeDine] = useState("");
  const [dine, setDine] = useState("");

  const questionId = 4;

  const intakeOptions = ["Daily", "Weekly", "Monthly"];
  const Options = ["1", "2 - 3", "4 - 5", "6 or more"];

  const handleDineIntakeChange = (e) => {
    const value = e.target.value;
    setIntakeDine(value);
    onResponse({ questionId, response1: value, response2: "" });
  };

  const handleDineChange = (e) => {
    const value = e.target.value;
    setDine(value);
    onResponse({ questionId, response1: intakeDine, response2: value });
  };

  return (
    <div className="lifestyle-control">
      <p> Question {questionId} of 5</p>
      <h4>Dining Out</h4>
      <p>On average, I dine out (i.e. fast food, take out, restaurants, drive-thru, etc.) ___</p>
      <div className="lifestyle-sub-control">

      {intakeOptions.map((option) => (
        <label key={option} className="lifestyle-radio-control">
          <input
            type="radio"
            name="intakeDine"
            value={option}
            checked={intakeDine === option}
            onChange={handleDineIntakeChange }
            className="lifestyle-radio"
          />
          {option}
        </label>
      ))}
      </div>

      {intakeDine && (
        <div className="lifestyle-sub-control">
          <p>Within this period, I usually dine out __ time(s)</p>
          {Options.map((option) => (
            <label key={option} className="lifestyle-radio-control">
              <input
                type="radio"
                name="dine"
                value={option}
                checked={dine === option}
                onChange={handleDineChange}
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

