import React from "react";
import { IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import "./ChartDataTable.css";

function ChartDataTable({ data, removeData }) {
  return (
    <div className="chartDataTable">
      <table cellSpacing="0">
        <thead>
          <tr>
            <th>No.</th>
            <th>Key</th>
            <th>Value</th>
            <th>Action</th>
          </tr>
        </thead>
        {/* fetch all label-value pairs from Data and show in table rows */}
        <tbody>
          {data[0] ? (
            data?.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td onClick={() => removeData(index)}>
                  <IconButton>
                    <Close fontSize="small" />
                  </IconButton>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ padding: "15px" }}>
                No Data Inserted
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ChartDataTable;
