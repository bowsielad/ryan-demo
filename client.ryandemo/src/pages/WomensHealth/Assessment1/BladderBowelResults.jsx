import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../../css/custom.css";

import { Results } from "../../../components/bladderbowel_results/Results";

const baseUrl = "https://ryan-demo-1.onrender.com";
const localUrl = "http://localhost:5177";


const BladderBowelResults = () => {
  const [isSelected, setSelected] = useState(true);

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const handleDownload = async () => {
    const pageUrl = "bladderbowelresults";
    setSelected(false);
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

      setSelected(true);
    } catch (error) {
      console.error("Error downloading the PDF:", error);
    }
  };

  return (
    <section>
    <div className="result-container">
     
      <div className="pdf-content avoid">

      <div className="page-header">
        <nav>
          <Link to={-1}>Back</Link>
        </nav>
        <h2>Bladder and Bowel Diary : [DATE]</h2>
      </div>

        <div id="pdf-content-1">
          <Results />
        </div>
  
        <div id="pdf-content-2" className="pageBreak avoid">
          <Results />
        </div>
  
        <div id="pdf-content-3" className="avoid">
          <Results />
        </div>
  
      </div>
  
      <div className="page-header">
        <nav>
          <div className="actions">
            <button onClick={handleDownload}>{isSelected ? "Print" : "Downloading"}</button>
            <p>Printing available on Chrome desktop.</p>
          </div>
        </nav>
      </div>
    </div>
  </section>
  
  );
};

export default BladderBowelResults;
