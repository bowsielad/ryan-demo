import React, { useState } from "react";
import "./lifestyle.css";

export const Card1 = ({ onResponse }) => {
  const [intakeTreats, setIntakeTreats] = useState("");
  const [treats, setTreats] = useState("");

  const questionId = 1;

  const intakeOptions = ["Daily", "Weekly", "Monthly", "Never"];
  const Options = ["1", "2 - 3", "4 - 5", "6 or more"];

  const handleTreatIntakeChange = (e) => {
    const value = e.target.value;
    setIntakeTreats(value);
    onResponse({ questionId, response1: value, response2: "" }); // Reset treats when intake changes
  };

  const handleTreatsChange = (e) => {
    const value = e.target.value;
    setTreats(value);
    onResponse({ questionId, response1: intakeTreats, response2: value });
  };

  return (
    <div className="lifestyle-control">
      <p> Question {questionId} of 5</p>
      <h4>Treat Intake</h4>
      <p>On average, I eat treats</p>
      <div className="lifestyle-sub-control">
      {intakeOptions.map((option) => (
        <label key={option} className="lifestyle-radio-control">
          <input
            type="radio"
            name="intakeTreats"
            value={option}
            checked={intakeTreats === option}
            onChange={handleTreatIntakeChange}
            className="lifestyle-radio"
          />
          {option}
        </label>
      ))}
      </div>

      {intakeTreats && (
        <div className="lifestyle-sub-control">
          <p>Within this period, I usually have ___ treat(s)</p>
          {Options.map((option) => (
            <label key={option} className="lifestyle-radio-control">
              <input
                type="radio"
                name="treats"
                value={option}
                checked={treats === option}
                onChange={handleTreatsChange}
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



