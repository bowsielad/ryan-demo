import { Link, useNavigate } from "react-router-dom";
import "../../css/custom.css";
import {
  BladderBowelWigetComplete,
  BladderBowelWigetInprogress,
  HealthCheckListWidgetInprogress,
  HealthCheckListWigetComplete,
} from "./WomenHealthWigets";

function WomensHealthAssessment() {

  const navigate = useNavigate();

  const handleBladderForm = () => {
    navigate(`/bladderbowelform`);
  };

  const handleHealthCheckForm = () => {
    navigate(`/healthcheckform`);
  };

  return (
    <section>
      <div className="landpg-widgets-container">
        <br />
        <div className="widget-header">
          <h2>Bladder and Bowel Diary</h2>
        </div>

        <div className="landpg-widgets">
          <BladderBowelWigetComplete />
          <BladderBowelWigetInprogress />
        </div>

        <div className="widget-space">
          <div>
            <button className="cardBtn" onClick={handleBladderForm }>
              Start a new dairy
            </button>
          </div>
        </div>

        <br />

        <div className="widget-header">
          <h2>Womens Health Check List</h2>
        </div>

        <div className="landpg-widgets">
          <HealthCheckListWigetComplete />
          <HealthCheckListWidgetInprogress />
        </div>

        <div className="widget-space">
          <div>
            <button className="cardBtn" onClick={handleHealthCheckForm}>
              Start a check list
            </button>
          </div>
        </div>

        <br />


      </div>
    </section>
  );
}

export default WomensHealthAssessment;
