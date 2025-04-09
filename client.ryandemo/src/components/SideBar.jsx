import { ArrowLeft, ChatIcon } from "./icons";
import "../css/custom.css";

import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import useWindowSize from "../hooks/useWindowSize";

export const SideBar = () => {
  const { width } = useWindowSize();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState();
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (width < 800) {
      //console.log(width);
      setIsOpen(false);
    } else {
      setIsOpen(false);
    }
  }, [width]);


    // Define forms based on URL paths
    const formUrls = {
      "/dailyreflections": "https://forms.office.com/r/TYnVg8kg8W?embed=true",
      "/bladderbowelform": "https://forms.office.com/r/r0TL3DnUjg?embed=true",
    };
  
    // Get the form URL based on the current path (default to null if not found)
    const formUrl = formUrls[location.pathname] || null;

  const MicrosoftForm = () => {
    return (

        <iframe
          width="640px"
          height="600px"
          src={formUrl}
          frameBorder="0"
          marginWidth="0"
          marginHeight="0"
          style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }}
          allowFullScreen
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          msallowfullscreen="true"
          title="Microsoft Form"
        />

    );
  };


  return (
    <>
      <div className="sidebar">
        <div className={isOpen ? "sidebarOpen" : "sidebarClosed"}>
          <div className="sidebar_header">
            <div style={{ display: isOpen ? "block" : "none" }} className="sidebar_logo">
              <p>Feedback Form</p>
            </div>
            <div className="sidebar_bars">
              <div className="sidebar_icon" onClick={toggle}>
              <ChatIcon />
              </div>
            </div>
          </div>

          <div>
          {isOpen ? (
            formUrl ? (
              <MicrosoftForm />
            ) : (
              <p style={{ padding: "10px", color: "red" }}>
                No feedback form exists for this page!
              </p>
            )
          ) : null}


          </div>

          
        </div>
      </div>
    </>
  );
};

export default SideBar;
