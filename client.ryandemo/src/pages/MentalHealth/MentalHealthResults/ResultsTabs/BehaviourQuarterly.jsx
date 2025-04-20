import React, { useState, useEffect } from "react";
import useCircleData from "../../../../hooks/useCircleData";

// fully charged: 0 - 22 = 32%, partially charged: 23 - 45 = between 33% and 66% , low charge: 46 - 68 = 67% and up

function BehaviourQuarterly() {
  const { circleData, chartDetail } = useCircleData("behaviour");

  const circleStyle = {
    width: `${circleData.size}px`,
    height: `${circleData.size}px`,
    overflow: "hidden",
    position: "relative",
    borderRadius: "50%",
    backgroundColor: circleData.overlayColor,
    outline: `10px solid ${circleData.overlayColor}`,
    animation: circleData.pct <= 32 ? "flashOutline 1s 5" : "none",
    "--outline-color": circleData.color, // Pass overlayColor dynamically
  };

  const circleFillStyle = {
    background: `linear-gradient(transparent ${100 - circleData.pct}%, ${circleData.color} ${
      100 - circleData.pct
    }%)`,
  };

  const circleOverlayStyle = {
    backgroundColor: circleData.overlayColor,
  };

  return (
    <div className="chart-wrapper">

  <div>

      <div className="chart-title">
            <div>My Behaviour</div>

            <div>Tip [icon]</div>
      </div>

        <div>
          <div
            style={{
              backgroundColor: circleData.overlayColor,
              padding: "8px",
              borderRadius: "4px",
              fontSize: "12px",
              marginTop: "8px",
            }}
          >
            {circleData.pct <= 32 ? (
              <div>
                Low charge : {chartDetail.result} / {chartDetail.total}
              </div>
            ) : circleData.pct >= 67 ? (
              <div>
                Fully charged : {chartDetail.result} / {chartDetail.total}
              </div>
            ) : (
              <div>
                Partially charged : {chartDetail.result} / {chartDetail.total}
              </div>
            )}
          </div>
        </div>

  </div>


      <div className="circleContainer">
        <div style={circleStyle}>
          <div className="circle-fill" style={circleFillStyle} />
          <div className="circle-overlay" style={circleOverlayStyle} />
          <div className="circle-fill-text">{circleData.pct}%</div>
        </div>
      </div>

      <div className="chart-info">
        <div>
          <p>Legend</p>
        </div>
      </div>

      <div
        style={{
          backgroundColor: circleData.overlayColor,
          padding: "8px",
          borderRadius: "4px",
          fontSize: "12px",
        }}
      >
        {circleData.pct <= 32 ? (
          <div>
            <h3>Need to Recharge!</h3>
            <p>
            This area’s result is at Low Charge. This indicate’s that this area is not being managed for optimal performance.
            </p>
          </div>
        ) : circleData.pct >= 67 ? (
          <div>
            <h3>Peak Performance Mode!</h3>
            <p>
            This area’s result is Fully Charged. This indicates that this area is well-managed and supporting optimal performance.
            </p>
          </div>
        ) : (
          <div>
            <h3>Charging...</h3>
            <p>
            This area’s result is Partially Charged. This indicates that there is some effort being made, but there’s room for improvement.
            </p>
          </div>
        )}
  </div>
    </div>
  );
}

export default BehaviourQuarterly;
