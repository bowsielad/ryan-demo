import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/custom.css";

import { Card1 } from "../../components/reflection_cards/Card1";
import { Card2 } from "../../components/reflection_cards/Card2";
import { Card3 } from "../../components/reflection_cards/Card3";
import { Card9 } from "../../components/reflection_cards/Card9";

const cardList = [
  { id: 1, name: "Question 1", Component: Card1},
  { id: 2, name: "Question 2", Component: Card2 },
  { id: 3, name: "Question 3", Component: Card3 },
  { id: 4, name: "Question 4", Component: Card1 },
  { id: 5, name: "Question 5", Component: Card1 },
  { id: 6, name: "Question 6", Component: Card1 },
  { id: 7, name: "Question 7", Component: Card1 },
  { id: 8, name: "Question 8", Component: Card1 },
  { id: 9, name: "Question 9", Component: Card9 }
];

export default function DailyReflectionPage() {
  const scrollableRef = useRef(null);
  const [isScrollVisible, setIsScrollVisible] = useState(false);

  const [isForm, setForm] = useState([
    { questionId: 1, response: "" },
    { questionId: 2, response: "" },
    { questionId: 3, response: "" },
    { questionId: 4, response: "" },
    { questionId: 5, response: "" },
    { questionId: 6, response: "" },
    { questionId: 7, response: "" },
    { questionId: 8, response: "" },
    { questionId: 9, response: "" },
  ]);

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const checkScroll = () => {
    if (scrollableRef.current && scrollableRef.current.scrollWidth > scrollableRef.current.clientWidth) {
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

  const scrollToEnd = () => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollTo({
        left: scrollableRef.current.scrollWidth,
        behavior: "smooth"
      });
    }
  };

  const handleResponse = ({ questionId, response }) => {
    setForm((prevForm) => {
      const updatedForm = prevForm.map((item) =>
        item.questionId === questionId ? { ...item, response } : item
      );
  
      // If the last question is answered, submit the form
      if (questionId === 9) {
        console.log("Final form submission:", updatedForm);
      }
  
      return updatedForm;
    });
  };


  return (
    <section>
       <article>

        <div className="card-Container">
          
        <div className="card-Header">
        <div className="Btn2">
           <button >Turn Tracking Off</button>
         </div>
         <div className="card-Date">[XX-XXX-2025]</div>
       </div>    


          {/* Scrollable Question List */}
          <div
            ref={scrollableRef}
            className="card-List"
          >
            {cardList.map(({ id, Component }, index) => (
            <div key={id} className="card-Box">
              
              <Component onResponse={handleResponse} />
              
              {index < cardList.length - 1 && (
                <div className="Btn3">
                <button onClick={() => onScroll(340)}>Scroll Next</button>
              </div>
              )}
                
            </div>
            ))}
          </div>

      {/* Scroll Buttons Below the Scrollbar */}
      {isScrollVisible && (
         <div className="bottomNav">
         <div className="pagination">
           <ArrowLeft onClick={() => onScroll(-340)} />
           <ArrowRight onClick={() => onScroll(340)} />
         </div>
       
         <div className="actions">
           <button onClick={scrollToEnd}>End</button>
         </div>
       </div>         
        )}
    </div>
    </article>
    </section>
  );
}


const ArrowLeft = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      cursor: "pointer",
      background: "#333",
      color: "#fff",
      border: "none",
      padding: "10px 15px",
      borderRadius: "5px",
    }}
  >
    <span className="font-link">&#8592;</span>
  </button>
);

const ArrowRight = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      cursor: "pointer",
      background: "#333",
      color: "#fff",
      border: "none",
      padding: "10px 15px",
      borderRadius: "5px",
    }}
  >
    <span className="font-link">&#8594;</span>
  </button>
);


