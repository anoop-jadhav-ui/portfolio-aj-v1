import React from 'react';
import './BarGraph.css';

class BarGraph extends React.Component {
  state = {
    isVisible: false,
    sectionStep:this.props.sectionStep
  };
  render() {
   
    return <div className={'bar-graph ' + this.props.class}>
    {
      this.props.value ? 
      <div className="filled" style={this.props.currentStep == this.state.sectionStep ? { width: this.props.value + '%' } : {width:0}}/> : ''
    }
      </div>
  }
}

export default BarGraph;
