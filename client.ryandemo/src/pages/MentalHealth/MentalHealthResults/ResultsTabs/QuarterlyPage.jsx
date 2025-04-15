import MindQuarterly from "./MindQuarterly";
import BodyQuarterly from "./BodyQuarterly";
import BehaviourQuarterly from "./BehaviourQuarterly";

import batteryGreen from '../../../../assets/battery_green.png';
import batteryBlue from '../../../../assets/battery_blue.png';
import batteryOrange from '../../../../assets/battery_Orange.png';

import "./chart-graph.css";

export default function QuarterlyPage() {


  return (
    <div>

<div className="chart-tag">
  <p>
    <img src={batteryGreen} alt="Fully Charged" style={{ width: '20px', verticalAlign: 'middle', marginRight: '4px' }} />
    Fully Charged
    <img src={batteryBlue} alt="Partially Charged" style={{ width: '20px', verticalAlign: 'middle', margin: '0 4px 0 8px' }} />
    Partially Charged
    <img src={batteryOrange} alt="Low Charge" style={{ width: '20px', verticalAlign: 'middle', margin: '0 4px 0 8px' }} />
    Low Charge
  </p>
  <p>
    Managing your Mental Health to achieve optimal performance is reflected by the 'Fully Charged' scale. This scale serves as a visual indicator of your overall mental well-being, showing whether you are operating at your best or may need to recharge in that area.
  </p>
</div>


    <div className="chart-container">
        <MindQuarterly />
        <BodyQuarterly />
        <BehaviourQuarterly />
    </div >
    <br />
    <div className="chart-container">
        <MindQuarterly />
        <MindQuarterly />
        <BehaviourQuarterly />
    </div >
</div>
  )
}
