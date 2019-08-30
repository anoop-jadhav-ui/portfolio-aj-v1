import React from 'react';
import './BarGraph.css';
import posed, { PoseGroup } from 'react-pose'



const Filled = posed.div({
  hidden: { width: 0 },
  visible: { 
    width : ({ i }) => ( i + '%' ) ,
    transition: { 
      duration: 900,
      ease:'easeInOut'
     }
  }
})

class BarGraph extends React.Component {
  state = { isVisible: false };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 500);
  }

  render() {
    const { isVisible } = this.state;
    return  <div class="bar-graph">
            <Filled className="filled" pose={isVisible ? 'visible' : 'hidden'} i={this.props.value}/>
        </div>
  }
}

export default BarGraph;
