import React from "react";

import ChartBars from "./ChartBars";
import "./Chart.css";

const Chart = (props) => {

    const dataPointValues = props.dataPoints.map((dataPoint) => {
        return dataPoint.value;
    });
    const totalMaxium = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBars
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaxium}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
