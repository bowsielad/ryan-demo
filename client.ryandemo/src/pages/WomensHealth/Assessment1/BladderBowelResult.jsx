import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../../css/custom.css";

const BladderBowelResult = () => {
  const [isResult, setResult] = useState(null);

  const { state } = useLocation();

  useEffect(() => {
    if (!state) {
      console.log("this is an error");
    } else {
      // Mock multiple columns for testing
      const { result } = state;
      const mockResults = [{ ...result }];
      setResult(mockResults);
    }
  }, [state]);

  const handlePrint = () => {
    console.log("print table");
  };

  return (
    <section>
      <div className="result-container">
      <div className="page-header">
        <nav>
          <Link to="/womenshealthassessment">Home</Link>
        </nav>
        <h2>Bladder and Bowel Result</h2>
      </div>

      {isResult && (
        <div className="responsive-table">
          <div className="static-column">
            {Object.keys(isResult[0]).map((key) => (
              <div
                className={`row ${
                  key === "urine_reason" || key === "stool_reason" ? "multi-line-static" : ""
                }`}
                key={key}
              >
                <span className="key">{key.replace(/_/g, " ")}:</span>
              </div>
            ))}
          </div>
          <div className="scrollable-columns">
            {isResult.map((dayResult, columnIndex) => (
              <div className="scroll-content" key={columnIndex}>
                {Object.entries(dayResult).map(([key, value], rowIndex) => (
                  <div
                    className={`row ${
                      key === "urine_reason" || key === "stool_reason" ? "multi-line-static" : ""
                    }`}
                    key={rowIndex}
                  >
                    <span className="key-value">{value}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
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

export default BladderBowelResult;
