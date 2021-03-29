import React from 'react';
import './BarGraph.css';

class BarGraph extends React.Component {
  render() {
    return <div className={'bar-graph ' + this.props.class}>
    {
      this.props.value ? 
      <div className="filled" title={this.props.value + "%"} style={(this.props.currentStep === this.props.sectionStep || this.props.currentStep === this.props.sectionStep + 1) ? { width: this.props.value + '%' } : {width:0}}/> : ''
    }
      </div>
  }
}

export default BarGraph;
