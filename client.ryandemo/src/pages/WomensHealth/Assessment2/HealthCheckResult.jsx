import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../../css/custom.css";

import { Questions } from "./HealthCheckQuestions";

const HealthCheckResult = () => {
  const [isResult, setResult] = useState(null);

  const { state } = useLocation();

  useEffect(() => {
    if (!state) {
      console.log("this is an error");
    } else {
      const { result } = state;
  
      // Convert each key's value to an array except "additional_comments"
      const transformedResult = Object.entries(result).reduce((acc, [key, value]) => {
        acc[key] = key === "additional_comments" ? value : Array.isArray(value) ? value : [value];
        return acc;
      }, {});
  
      setResult([transformedResult]);
    }
  }, [state]);

  const handlePrint = () => {
    console.log("print table");
  };

  const handleDownload = async () => {
    try {
      const response = await fetch("http://localhost:5177/api/pdfgenerator/generate-report", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to download PDF");
      }

      // Convert the response into a blob
      const blob = await response.blob();

      // Create a link element, and trigger a download
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "ReactPageReport.pdf"); // File name
      document.body.appendChild(link);
      link.click();

      // Cleanup the link
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error("Error downloading the PDF:", error);
    }
  };

  return (
    <section>
      <div className="result-container">
      <div className="page-header">
        <nav>
          <Link to="/womenshealthassessment">Home</Link>
        </nav>
        <h2>Health Check Result</h2>
      </div>

      {isResult && (
        <div className="qa-table">
          {Object.keys(isResult[0]).map((key, index) => {
            // Find the question associated with the current key
            const question = Questions.find((q) => `${q.name}` === key);

            return (
              <div className="qa-row" key={index}>
                {/* Question */}
                <div className="qa-question">
                  <span className="key">
                    {question ? question.question : key.replace(/_/g, " ")}:
                  </span>
                </div>

                {/* Answer */}
                <div className="qa-answer">
                  {isResult.map((dayResult, rowIndex) => {
                    const value = dayResult[key];
                    return Array.isArray(value) ? (
                      <div className="multi-value" key={rowIndex}>
                        {value.map((item, idx) => (
                          <span key={idx}>{item}</span>
                        ))}
                      </div>
                    ) : (
                      <span className="text-value" key={rowIndex}>
                        {value}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="page-header">
        <nav>
        <div className="actions">
            <button onClick={handlePrint}> Button </button>
        </div>
        </nav>
      </div>
      </div>

      
    </section>
  );
};

export default HealthCheckResult;
