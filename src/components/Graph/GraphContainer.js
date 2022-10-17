import React, { Component } from "react";
import { connect } from "react-redux";
import { LineChart, Line, XAxis, Tooltip } from "recharts";

class ChartContainer extends Component {
  
  render() {
    return (
      <div id="graph">
        <LineChart width={900} height={400} data={this.props.data.sales}>
          <XAxis dataKey="weekEnding" />
          <Tooltip />
          <Line type="basis" dataKey="retailSales" stroke="#40a8ef" dot={false}/>
          <Line type="basis" dataKey="wholesaleSales" stroke="#3c4858" dot={false} />
        </LineChart>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data
  };
}

export default connect(
  mapStateToProps,
  null
)(ChartContainer);
