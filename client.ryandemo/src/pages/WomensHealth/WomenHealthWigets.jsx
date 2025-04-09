import { useNavigate, Link } from "react-router-dom";
import "../../css/custom.css";

export const BladderBowelWigetComplete = () => {
  return (
    <div className="widgetWrapper">
      <h3>Dairy 1</h3>

      <div className="widgetContainer">
        <div className="widgetCardRight">
          <p>[date] : Completed</p>

          <Link to="/bladderbowelresults">View Results</Link>
        </div>
      </div>
    </div>
  );
};

export const BladderBowelWigetInprogress = () => {
  return (
    <div className="widgetWrapper">
      <h3>Dairy 2</h3>

      <div className="widgetContainer">
        <div className="widgetCardRight">
        <div>
          <p>[date] : In-Progress</p>
          <p>Day [X] of 3</p>
        </div>

          <Link to="/bladderbowelform">Log Results</Link>
        </div>
      </div>
    </div>
  );
};

export const HealthCheckListWigetComplete = () => {
  return (
    <div className="widgetWrapper">
      <h3>Check List 1</h3>

      <div className="widgetContainer">
        <div className="widgetCardRight">
          <p>[date] : Completed</p>

          <Link to="/healthcheckresults">View Results</Link>
        </div>
      </div>
    </div>
  );
};

export const HealthCheckListWidgetInprogress = () => {
  return (
    <div className="widgetWrapper">
      <h3>Check List 2</h3>

      <div className="widgetContainer">
        <div className="widgetCardRight">
          <p>[date] : In-Progress</p>

          <Link to="/healthcheckform">Log Results</Link>
        </div>
      </div>
    </div>
  );
};
