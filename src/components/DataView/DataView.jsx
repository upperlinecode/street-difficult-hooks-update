import React from "react";
import "./DataView.css";

const DataView = (props) => {
  return (
    <div className="view">
      {/* left side of card */}
      <div className="view-column">
        <div className="borough">
          <h1 className="borough-text">{props.borough}</h1>
        </div>
      </div>
      {/* right side of card */}
      <div className="view-column">
        <table className="data-view">
          <tr className="data-view-row">
            <th className="text">
              <h3 className="text-header">Renters</h3>
            </th>
            <th className="text">
              <h3 className="text-header">Homeowners</h3>
            </th>
          </tr>
          <tr className="data-view-row">
            <td className="text">
              <h2 className="text-data">{props.renterCost}</h2>
              <h3 className="text-label">Annual Housing Cost</h3>
            </td>
            <td className="text">
              <h2 className="text-data">{}</h2>
              <h3 className="text-label">Annual Housing Cost</h3>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default DataView;
