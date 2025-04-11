import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../css/custom.css";

import { Card1 } from "../../components/lifestyle_cards/Card1";
import { Card2 } from "../../components/lifestyle_cards/Card2";
import { Card3 } from "../../components/lifestyle_cards/Card3";
import { Card4 } from "../../components/lifestyle_cards/Card4";
import { Card5 } from "../../components/lifestyle_cards/Card5";
import { Card6 } from "../../components/lifestyle_cards/Card6";
import { Card7 } from "../../components/lifestyle_cards/Card7";

const cardList = [
  { id: 1, name: "Question 1", Component: Card1},
  { id: 2, name: "Question 2", Component: Card2 },
  { id: 3, name: "Question 3", Component: Card3 },
  { id: 4, name: "Question 4", Component: Card4 },
  { id: 5, name: "Question 5", Component: Card5 },
  { id: 6, name: "Question 6", Component: Card6 },
  { id: 7, name: "Question 7", Component: Card7 }
];

export default function LifestyleHabitsPage() {
  const scrollableRef = useRef(null);
  const [isScrollVisible, setIsScrollVisible] = useState(false);
  const navigate = useNavigate();

  const [isForm, setForm] = useState([
    { questionId: 1, response1: "", response2: "" },
    { questionId: 2, response1: "", response2: "" },
    { questionId: 3, response1: "", response2: "", response3: "" },
    { questionId: 4, response1: "", response2: "" },
    { questionId: 5, response1: "", response2: "" },
    { questionId: 6, response1: "", response2: "" },
    { questionId: 7, response1: "", }
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

  const handleResponse = ({ questionId, response1, response2, response3 }) => {
    setForm((prevForm) => {
      return prevForm.map((item) =>
        item.questionId === questionId
          ? { ...item, response1, response2, ...(response3 !== undefined && { response3 }) }
          : item
      );
    });
  
    // Perform navigation outside of setState
    if (questionId === 7) {
      //navigate(`/lifestylehabitscomplete`);
      console.log("Final form submission:", isForm);
    }
  };

  return (
    <section>
       <article>

        <div className="card-Container">
          <h3>Lifestyle Habits Assessment</h3>

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


