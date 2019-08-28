import React from 'react';
import './BarGraph.css';
import posed, { PoseGroup } from 'react-pose'



const Filled = posed.div({
  hidden: { width: 0 },
  visible: { 
    width : `100%` ,
    transition: { duration: 300 }
  }
})

class BarGraph extends React.Component {
  state = { isVisible: false };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1000);
  }

  render() {
    const { isVisible } = this.state;
    return  <div class="bar-graph">
            <Filled className="filled" pose={isVisible ? 'visible' : 'hidden'} />
        </div>
  }
}

export default BarGraph;
