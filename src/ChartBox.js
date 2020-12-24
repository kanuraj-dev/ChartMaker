import React from "react";
import GetChart from "./GetChart";
import "./ChartBox.css";

function ChartBox({ data, chartType, setChartType }) {
  return (
    <div className="chartBox">
      <div className="chartBox__chartHeading">
        <h2>Your Chart :</h2>
        <select
          name="chartType"
          onChange={(e) => setChartType(e.target.value)}
          value={chartType}
        >
          <option value="PieChart">PieChart</option>
          <option value="LineChart">LineChart</option>
          <option value="ColumnChart">ColumnChart</option>
          <option value="BarChart">BarChart</option>
        </select>
      </div>
      <div className="chartBox__chartContainer">
        <div className="chartBox__chartCard">
          {data[0] ? (
            <GetChart type={chartType} data={data} />
          ) : (
            <h1>Please Enter some Data First</h1>
          )}
        </div>
      </div>
      <div className="chartBox__graphDownloadNote">
        <p>
          Note : To download the the Chart, click on the Chart and a small
          download button will appear in the top-right corner of the chart.
        </p>
      </div>
    </div>
  );
}

export default ChartBox;
