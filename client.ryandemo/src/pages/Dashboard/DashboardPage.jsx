import { Link } from "react-router-dom";
import "./dashboard.css";

import { QuickLinkWidget } from "../../components/dashboard_widgets/QuickLinkWidget";


export default function DashboardPage() {
  return (
    <section>
    <div className="dashboard-container">
      <div className="grid-container">
        <div className="grid-item grid1">profile / biometrics</div>
        <div className="grid-item grid2">
          <div className="half">reflection widget</div>
          <div className="half">wellness widget</div>
        </div>
        <div className="grid-item grid3"><QuickLinkWidget/></div>
        <div className="grid-item grid4">quote</div>
        <div className="grid-item grid5">assessment 1</div>
        <div className="grid-item grid5">assessment 2</div>
        <div className="grid-item grid5">my report</div>
      </div>
    </div>
  </section>
  )
}
