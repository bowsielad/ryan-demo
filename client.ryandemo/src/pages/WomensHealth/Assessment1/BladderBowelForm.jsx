import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../css/custom.css";
import TimePicker from "../../../components/TimePicker";
import useLoaclTimeDate from "../../../hooks/useLoaclTimeDate";

import { questions } from "./BladderBowelQuestions";

const BladderBowelForm = () => {
  const { formattedDate } = useLoaclTimeDate();
  const [isForm, setForm] = useState({});

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  // Initialize form state
  useEffect(() => {
    const initialFormState = questions.reduce((acc, question) => {
      if (question.name) {
        acc[question.name] = "";
      }
      if (question.fields) {
        question.fields.forEach((field) => {
          acc[field.name] = "";
        });
      }
      return acc;
    }, {});
    setForm(initialFormState);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleTimeChange = (newTime) => {
    setForm((prevForm) => ({ ...prevForm, time: newTime, date: formattedDate }));
  };

  let handleNumberChange = (e) => {
    const { name, value } = e.target;

    // Define ranges for specific questions
    const ranges = {
      bowel_movement: [1, 5], // For "bowel_movement", valid range is 1-5
      leaking_amount: [0, 5],
      pelvic_pain: [0, 10],
    };

    const [min, max] = ranges[name] || [0, 10];

    // Validate input based on the range
    if (value === "" || (value >= min && value <= max)) {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    }
  };

  const updateForm = (e) => {
    e.preventDefault();
    //console.log(isForm);
    navigate("/bladderbowelresult", { state: { result: isForm } });
  };

  return (
    <section>
      <form className="form" onSubmit={updateForm}>

      <div className="page-header">
              <nav>
                <Link to={-1}>Back</Link>
              </nav>
              <h2>Bladder and Bowel Diary</h2>
              <p>Please try to answer all questions.</p>
       </div>

        {questions.map((question, index) => (
          <div key={question.id} className="control">
            <p>
              Question {index + 1} of {questions.length}
            </p>
            <h3>{question.question}</h3>
            {question.note && <p>{question.note}</p>}

            {question.type === "radio" &&
              question.options.map((option, idx) => (
                <div key={`${question.id}-${idx}`} className="radioControl">
                <label key={idx} >
                  <input
                    type="radio"
                    name={question.name}
                    value={option}
                    checked={isForm[question.name] === option}
                    onChange={handleChange}
                  />
                  {option}
                </label>
                </div>
              ))}

            {question.type === "time" && (
              <div>
                <TimePicker onTimeChange={handleTimeChange} />
                <p>Selected Time: {isForm.time}</p>
              </div>
            )}

            {question.type === "text" &&
              question.fields.map((field) => (
                <div key={`${question.id}-${field.name}`}>
                  <label htmlFor={field.name}>{field.label}</label>
                  <input
                    id={field.name}
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={isForm[field.name] || ""}
                    onChange={handleChange}
                    maxLength={field.max}
                  />
                </div>
              ))}

            {question.type === "number" && (
              <div>
                <label htmlFor={question.name}>{question.question}</label>
                <input
                  id={question.name}
                  type="number"
                  name={question.name}
                  placeholder={question.placeholder}
                  value={isForm[question.name] || ""}
                  onChange={handleNumberChange}
                  min={question.min}
                  max={question.max}
                />
              </div>
            )}
          </div>
        ))}

        <div className="bottomNav">
          <div>
          <Link to={-1}>Back</Link>
          </div>
          <div className="actions">
            <button type="submit">Finish</button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default BladderBowelForm;
