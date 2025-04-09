import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../css/custom.css";

import { Questions } from "./HealthCheckQuestions";

function HealthCheckForm() {
  const [page, setPage] = useState(1);
  const [isForm, setForm] = useState({});
  const postPerPage = 5;

  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const topRef = useRef(null);

  // Pagination calculations
  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const filterPosts = Questions.slice(indexOfFirstPost, indexOfLastPost);

  // Initialize form state
  useEffect(() => {
    const initialFormState = Questions.reduce((acc, question) => {
      acc[`${question.name}`] = question.name === "additional_comments" ? "" : [];
      return acc;
    }, {});
    setForm(initialFormState);
  }, []);

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setForm((prevForm) => {
      const currentValues = prevForm[name] || [];
      if (checked) {
        // Add the selected value to the array
        return { ...prevForm, [name]: [...currentValues, value] };
      } else {
        // Remove the unselected value from the array
        return {
          ...prevForm,
          [name]: currentValues.filter((v) => v !== value),
        };
      }
    });
  };

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value, // Set the selected value for radio buttons
    }));
  };

  const totalPages = Math.ceil(Questions.length / postPerPage);
  let pages = [];
  for (let p = 1; p <= totalPages; p++) {
    pages.push(p);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isForm);
    navigate("/healthcheckresult", { state: { result: isForm } });
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    topRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section>

          <form onSubmit={handleSubmit}>

             <div className="page-header" ref={topRef}>
                <nav>
                <Link to={-1}>Back</Link>
                </nav>
                  <h2>Womens Health Checklist</h2>
                   <p>Do you or have you experienced the following symptoms you need to speak to a health
                   professional about?</p>
              </div>

              <div>
              {filterPosts.map((post) => (
                <div key={post.id} className="control">
                  <p>Question {post.id} of 20</p>
                  <h4>{post.question}</h4>
                  <p>{post.note}</p>

                  {post.type === "text" ? (
                    <div className="text-input">
                      <label htmlFor={`${post.name}`}>
                        <textarea
                          id={`${post.name}`}
                          name={`${post.name}`}
                          value={isForm[`${post.name}`] || ""}
                          onChange={handleTextChange}
                          rows="4"
                          placeholder="Write your comments here..."
                        />
                      </label>
                    </div>
                  ) : post.type === "checkbox" ? (
                    post.options.map((option, index) => (
                      <div key={index} className="radioControl">
                        <label htmlFor={`${post.name}_${index}`}>
                          <input
                            type="checkbox"
                            name={`${post.name}`}
                            value={option}
                            onChange={handleCheckboxChange}
                            checked={(isForm[`${post.name}`] || []).includes(option)}
                            id={`${post.name}_${index}`}
                            className="checkboxControl"
                          />
                          {option}
                        </label>
                      </div>
                    ))
                  ) : post.type === "radio" ? (
                    post.options.map((option, index) => (
                      <div key={index} className="radioControl">
                        <label htmlFor={`${post.name}_${index}`}>
                          <input
                            type="radio"
                            name={`${post.name}`} // Radio buttons share the same name to allow single selection
                            value={option}
                            onChange={handleRadioChange}
                            checked={isForm[`${post.name}`] === option}
                            id={`${post.name}_${index}`}
                          />
                          {option}
                        </label>
                      </div>
                    ))
                  ) : null}
                </div>
              ))}
            </div>


            <div className="bottomNav">
              <div className="pagination">
                <button
                  type="button" // Prevent form submission
                  onClick={() => handlePageChange(page - 1)}
                  disabled={page === 1}
                  className="page-link"
                >
                  Prev
                </button>
                {pages.map((pageNumber) => (
                  <button
                    type="button" // Prevent form submission
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`page-item ${pageNumber === page ? "active" : ""}`}
                  >
                    {pageNumber}
                  </button>
                ))}
                <button
                  type="button" // Prevent form submission
                  onClick={() => handlePageChange(page + 1)}
                  disabled={page === totalPages}
                  className="page-link"
                >
                  Next
                </button>
              </div>

              <div className="actions">
                {page === totalPages && <button type="submit">Submit</button>}
              </div>
            </div>
          </form>
    </section>
  );
}

export default HealthCheckForm;
