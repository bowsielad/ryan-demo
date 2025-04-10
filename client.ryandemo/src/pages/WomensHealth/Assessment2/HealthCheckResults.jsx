import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../css/custom.css";

import { healthCheck_result } from "../../../data/DummyData";

import { Questions } from "./HealthCheckQuestions";

const baseUrl = "https://ryan-demo-1.onrender.com";
const localUrl = "http://localhost:5177";

console.log(baseUrl);

const HealthCheckResults = () => {
  const [isResult, setResult] = useState(null);


  useEffect(() => {
    if (!healthCheck_result) {
      console.log("this is an error");
    } else {
      console.log(healthCheck_result);
      setResult([healthCheck_result]);
    }
  }, [healthCheck_result]);

  const handlePrint = () => {
    console.log("print table");
  };

  const handleDownload = async () => {
    const pageUrl = "healthcheckresults";
    try {
      const response = await fetch(`${baseUrl}/api/pdfgenerator/generate-report?pageUrl=${pageUrl}`, {
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
      link.setAttribute("download", "AssessmentPageReport.pdf"); // File name
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
      <div>
      <div className="result-container">

      <div className="pdf-content">

      <div className="page-header">
        <nav>
          <Link to={-1}>Back</Link>
        </nav>
        <h2>Health Check Results : [DATE]</h2>
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
                      <div className="text-value" key={rowIndex}>
                        {value}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
      </div>

      <div className="page-header">
        <nav>
        <div className="actions">
        <button onClick={handleDownload}> Print </button>
        <p>Printing available on Chrome desktop.</p>
        </div>
        </nav>
      </div>
      
      </div>
      </div>
    </section>
  );
};

export default HealthCheckResults;
