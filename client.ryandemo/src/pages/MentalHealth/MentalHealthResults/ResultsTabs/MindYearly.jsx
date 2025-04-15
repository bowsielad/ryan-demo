import React, { useState, useEffect } from "react";
import useCircleData from "../../../../hooks/useCircleData";

import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
//import NoDataToDisplay from "highcharts/modules/no-data-to-display";
//import Accessibility from "highcharts/modules/accessibility";

//NoDataToDisplay(Highcharts);
//Accessibility(Highcharts); // Accessibility enhancements

function MindYearly() {
  const { chartDetailYearly } = useCircleData("mindset");

  const [baselineData, setBaselineData] = useState();
  const [processedData, setProcessedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Await the promise if chartDetail is asynchronous
        const data = await chartDetailYearly;
        //console.log(data);

        // Process data and set it to state
        setBaselineData(data.baseline);

        const quarterValues = getQuarterValues(data);
        setProcessedData(quarterValues);
      } catch (error) {
        console.error("Error fetching chart details:", error);
      }
    };

    // Call the async function
    fetchData();
  }, [chartDetailYearly]);

  const getQuarterValues = (data) => {
    const { q1, q2, q3, q4 } = data;
    return [q1, q2, q3, q4];
  };

  const chartOptions = {
    title: {
      text: "",
      align: "left",
    },
    chart: {
      type: "line",
    },
    lang: {
      noData: "no data tp display!", //the text to be displayed
    },
    noData: {
      position: {
        x: 0,
        y: 0,
        align: "center",
        verticalAlign: "middle",
      },
    },
    legend: {
      enabled: false,
    },
    accessibility: {
      description: "Yearly results of Assessments",
      enabled: true,
    },
    xAxis: {
      categories: ["Jan-2024", "Feb-2024", "Mar-2024", "Apr-2024"],
    },
    yAxis: {
      title: { text: "" },
      tickPositions: [0, 22, 45, 68, 80],
      reversed: true,
      labels: { enabled: false },
      gridLineColor: "#fff",
      plotBands: [
        {
          color: "rgba(237,248,234,0.5)",
          from: 0,
          to: 22,
          label: { text: "fully charged", align: "left", x: 10 },
        },
        {
          color: "rgba(230,242,249,0.5)",
          from: 22,
          to: 45,
          label: { text: "partially charged", align: "left", x: 10 },
        },
        {
          color: "rgba(255,246,233,0.5)",
          from: 45,
          to: 80,
          label: { text: "low charge", align: "left", x: 10 },
        },
      ],
      plotLines: [
        {
          color: "#101828", // Line color
          value: baselineData, // Position on the y-axis
          width: 2,
          dashStyle: "Dash",
          label: {
            text: "Baseline",
            align: "right",
            x: -10,
            style: {
              color: "#101828",
            },
          },
        },
      ],
    },
    exporting: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      useHTML: true,
      backgroundColor: "#fff",
      borderColor: "#fff",
      borderRadius: 8,
      shadow: false,
      padding: 20,
      shared: false, // To handle each point individually
      stickOnContact: false,
      enabled: true,
      followPointer: true,
      formatter: function () {
        const yValue = this.y;
        const xValue = this.key;
        let bandLabel = "";

        // Loop through plotBands to find the matching label
        this.series.chart.yAxis[0].options.plotBands.forEach((band) => {
          if (yValue >= band.from && yValue < band.to) {
            bandLabel = band.label.text;
          }
        });

        // Customize tooltip content
        return `<span >${xValue}</span><br/>
               <b> <span style="color:${this.color}">${bandLabel}</span><br/>`;
      },
    },

    series: [
      {
        name: "Mental Health Assessment",
        data: processedData,
        zones: [
          {
            value: 22,
            color: "#328420",
          },
          {
            value: 45,
            color: "#00568B",
          },
          {
            color: "#BF7714",
          },
        ],
      },
    ],
  };

  return (
    <div className="chart-wrapper">

      <div>
          <div className="chart-title">
                <div>My Mindset</div>

                <div>Tip [icon]</div>
          </div>
      </div>


      <div >
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
          containerProps={{ style: { height: '300px', width: '300px' } }}
        />
      </div>

      <div className="chart-info">
        <div>
          <p>Legend</p>
        </div>
      </div>
    </div>
  );
}

export default MindYearly;
