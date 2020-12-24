import { Grid } from "@material-ui/core";
import { Equalizer } from "@material-ui/icons";
import { useState } from "react";
import ChartDataTable from "./ChartDataTable";
import ChartBox from "./ChartBox";
import DataForm from "./DataForm";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [chartType, setChartType] = useState("PieChart");
  const [labelInput, setLabelInput] = useState("");
  const [valueInput, setValueInput] = useState("");

  const handleFormSubmit = (e) => {
    // Prevent Default Behaviour Of Form
    e.preventDefault();

    // check if data is not more than 10 sets
    let isLimitReached = data.length < 10;

    let isDuplicate = false;
    data.map((item) => {
      if (item.includes(labelInput) && !isDuplicate) {
        alert("Duplicate labels not allowed.");
        isDuplicate = true;
      }
    });
    // Check if label & value input are not empty
    // add new data to the array
    if (labelInput && valueInput && isLimitReached && !isDuplicate) {
      setData([...data, [labelInput, valueInput]]);
      setLabelInput("");
      setValueInput("");
    } else if (!isLimitReached) {
      alert("Max Limit reached... You can only put 10 sets of data");
    }
  };

  const removeData = (index) => {
    let tempArray = [...data];
    tempArray.splice(index, 1);
    setData(tempArray);
  };

  return (
    <div className="app">
      <Grid container>
        <Grid item xs={12} md={6}>
          <h1 className="app__name">
            Chart Maker <Equalizer style={{ fontsize: "100px !important" }} />
          </h1>
          <DataForm
            handleFormSubmit={handleFormSubmit}
            setLabelInput={setLabelInput}
            setValueInput={setValueInput}
            labelInput={labelInput}
            valueInput={valueInput}
          />
          <ChartDataTable data={data} removeData={removeData} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ChartBox
            data={data}
            chartType={chartType}
            setChartType={setChartType}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
