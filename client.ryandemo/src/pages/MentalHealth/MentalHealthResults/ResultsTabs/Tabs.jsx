import { useState} from "react"
import "./tabs.css";

import YearlyPage from "./YearlyPage";
import QuarterlyPage from "./QuarterlyPage";


const Tabs = () => {

  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };

  return (
    <div>
    <div className="tabs">
      {/* Tab nav */}
      <ul className="nav">
        <li className={activeTab === "tab1" ? "active-tab" : ""} onClick={handleTab1}>Quarterly</li>
        <li className={activeTab === "tab2" ? "active-tab"  : ""} onClick={handleTab2}>Yearly</li>
      </ul>
    </div>

      <div className="tab-content">

      {activeTab === "tab1" ? <QuarterlyPage/> 
      : <YearlyPage/>}

      </div>
    
    </div>
  );
};
export default Tabs;
