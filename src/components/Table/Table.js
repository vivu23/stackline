import React from "react";
import './Table.css'
const Table = props => {
  return (
    <div id="table">
      <table>
        <thead>
          <tr>
            <th scope="col" onClick={() => props.sortBy("weekEnding")}>
              <div>
                WEEK ENDING <span>▼</span>
              </div>
            </th>
            <th scope="col" onClick={() => props.sortBy("retailSales")}>
              <div>
                RETAIL SALES <span>▼</span>
              </div>
            </th>
            <th scope="col" onClick={() => props.sortBy("wholesaleSales")}>
              <div>
                WHOLESALE SALES <span>▼</span>
              </div>
            </th>
            <th scope="col" onClick={() => props.sortBy("unitsSold")}>
              <div>
                UNITS SOLD <span>▼</span>
              </div>
            </th>
            <th scope="col" onClick={() => props.sortBy("retailerMargin")}>
              <div>
                RETAILER MARGIN <span>▼</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>{props.rows}</tbody>
      </table>
    </div>
  );
};

export default Table;
