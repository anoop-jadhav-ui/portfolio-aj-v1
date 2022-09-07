import React, { Component } from "react";
import "./BarGraph.css";

class BarGraph extends Component {
  render() {
    return (
      <div className={"bar-graph " + this.props.class} data-testid="bar-graph">
        {this.props.value ? (
          <div
            data-testid="bar"
            className="filled"
            title={this.props.value + "%"}
            style={
              this.props.currentStep === this.props.sectionStep ||
              this.props.currentStep === this.props.sectionStep + 1
                ? { width: this.props.value + "%" }
                : { width: 0 }
            }
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default BarGraph;
export { BarGraph };
