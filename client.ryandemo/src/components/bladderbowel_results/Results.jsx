import React, { useState, useEffect } from "react";
import "../../css/custom.css";

import { bladderbowel_result } from "../../data/DummyData";

export const Results = () => {
  const [isResult, setResult] = useState(null);
  
    useEffect(() => {
      if (!bladderbowel_result) {
        console.log("this is an error");
      } else {
        const mockResults = [
          { ...bladderbowel_result, time: "9:00 AM" },
          { ...bladderbowel_result, time: "12:00 PM" },
          { ...bladderbowel_result, time: "3:00 PM" },
          { ...bladderbowel_result, time: "5:00 PM" },
          { ...bladderbowel_result, time: "6:00 PM" },
          { ...bladderbowel_result, time: "10:00 PM" },
        ];
        //console.log(mockResults);
        setResult(mockResults);
      }
    }, [bladderbowel_result]);
    
  
    return (
  
      <div className="table-container">
  
        <div className="page-header">
          <h3>Day [x]</h3>
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
  
        </div>
    );
  };