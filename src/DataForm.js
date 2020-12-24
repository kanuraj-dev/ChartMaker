import React from "react";
import "./DataForm.css";

function DataForm({
  handleFormSubmit,
  setLabelInput,
  setValueInput,
  valueInput,
  labelInput,
}) {
  return (
    <div className="dataForm">
      <form onSubmit={handleFormSubmit} autoComplete="off">
        <div className="dataForm__InputGroup">
          <input
            type="text"
            name="labelInput"
            placeholder="Label"
            onChange={(e) => setLabelInput(e.target.value)}
            value={labelInput}
          />
          <input
            type="number"
            name="valueInput"
            placeholder="Value"
            onChange={(e) => setValueInput(e.target.value)}
            value={valueInput}
          />
        </div>
        <button type="submit">Add Data</button>
      </form>
    </div>
  );
}

export default DataForm;
