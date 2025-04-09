import React, { useState, useRef, useEffect } from "react";
import "./widget.css";

import { QuickLink1 } from "./QuickLink1";
import { QuickLink2 } from "./QuickLink2";
import { QuickLink3 } from "./QuickLink3";
import { QuickLink4 } from "./QuickLink4";

const linkList = [
  { id: 1, name: "Question 1", Component: QuickLink1},
  { id: 2, name: "Question 2", Component: QuickLink2 },
  { id: 3, name: "Question 3", Component: QuickLink3 },
  { id: 4, name: "Question 4", Component: QuickLink4 },
];

export const QuickLinkWidget = () => {
  const scrollableRef = useRef(null);
  const [isScrollVisible, setIsScrollVisible] = useState(false);

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const checkScroll = () => {
    if (
      scrollableRef.current &&
      scrollableRef.current.scrollWidth > scrollableRef.current.clientWidth
    ) {
      setIsScrollVisible(true);
    } else {
      setIsScrollVisible(false);
    }
  };

  const onScroll = (offset) => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <div className="quicklink-container">
      <div className="quicklink-contorller">
        {isScrollVisible && <ArrowLeft onClick={() => onScroll(-220)} />}

        <div
          ref={scrollableRef}
          className="quicklink-card"
        >
          {linkList.map(({ id, Component }) => (
            <Component key={id}/>
          ))}
        </div>

        {isScrollVisible && <ArrowRight onClick={() => onScroll(220)} />}
      </div>
    </div>
  );
}


export const ArrowLeft = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: "pointer",
        position: "absolute",
        left: "-10px",
        top: "50%",
        transform: "translateY(-50%)",
        background: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
        padding: "10px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#fff"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="#fff"
        width="30"
        height="30"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
        />
      </svg>
    </div>
  );
};

export const ArrowRight = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: "pointer",
        position: "absolute",
        right: "-10px",
        top: "50%",
        transform: "translateY(-50%)",
        background: "rgba(0, 0, 0, 0.5)",
        padding: "10px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#fff"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="#fff"
        width="30"
        height="30"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12h15m0 0l-6.75 6.75M19.5 12l-6.75-6.75"
        />
      </svg>
    </div>
  );
};

