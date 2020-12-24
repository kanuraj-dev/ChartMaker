import React from "react";
import { BarChart, ColumnChart, LineChart, PieChart } from "react-chartkick";
import "chart.js";

function GetChart({ type, data }) {
  switch (type) {
    case "LineChart":
      return <LineChart id="chart" download={true} data={data} />;
      break;
    case "PieChart":
      return <PieChart id="chart" download={true} data={data} />;
      break;
    case "ColumnChart":
      return <ColumnChart id="chart" download={true} data={data} />;
      break;
    case "BarChart":
      return <BarChart id="chart" download={true} data={data} />;
      break;

    default:
      return <LineChart id="chart" download={true} data={data} />;
      break;
  }
}

export default GetChart;
