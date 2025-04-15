import { useState, useEffect } from "react";
import { scale, data, dataYearly } from "../data/MentalHealthData";

const useCircleData = (area) => {
  const [circleData, setCircleData] = useState({
    size: 200,
    pct: 0, // Initial percentage
    color: "#FFD8A4",
    overlayColor: "#FFF6E9", // Default overlay color
  });
  const [chartDetail, setChartDetail] = useState({});
  const [chartDetailYearly, setChartDetailYearly] = useState({});

  useEffect(() => {
    const selectedData = data[area];
    const selectedDataYearly = dataYearly[area];

    setChartDetail(selectedData);
    setChartDetailYearly(selectedDataYearly);

    const percentage = (selectedData.result / selectedData.total) * 100;
    const invertedPercentage = 100 - percentage;

    const newColor =
      invertedPercentage <= 32
        ? scale.lowCharge.color
        : invertedPercentage > 32 && invertedPercentage <= 67
        ? scale.partiallyCharge.color
        : scale.fullyCharge.color;

    const newOverlayColor =
      invertedPercentage <= 32
        ? scale.lowCharge.overlay
        : invertedPercentage > 32 && invertedPercentage <= 67
        ? scale.partiallyCharge.overlay
        : scale.fullyCharge.overlay;

    setCircleData({
      size: 200,
      pct: invertedPercentage.toFixed(0),
      color: newColor,
      overlayColor: newOverlayColor,
    });
  }, [area]);

  return { circleData, chartDetail, chartDetailYearly };
};

export default useCircleData;
