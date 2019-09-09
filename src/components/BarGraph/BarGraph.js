import React from 'react';
import './BarGraph.css';
// import posed, { PoseGroup } from 'react-pose'

// const Filled = posed.div({
//   hidden: { width: 0 },
//   visible: {
//     width: ({ i }) => (i + '%'),
//     transition: {
//       duration: 900,
//       ease: 'easeInOut'
//     }
//   }
// })

class BarGraph extends React.Component {
  state = {
    width: 0,
    isVisible: false,
    sectionStep:this.props.sectionStep
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isVisible: !this.state.isVisible });
      this.setState({ width: this.props.value })
    }, 500);

    // window.addEventListener('scroll', this.checkIfVisible());
  }

  componentWillUnmount() {
    // window.removeEventListener('scroll', this.checkIfVisible());
  }

  render() {
    const { isVisible } = this.state;
    return <div className={'bar-graph ' + this.props.class}>
      {/* <Filled className="filled" pose={isVisible ? 'visible' : 'hidden'} i={this.props.value} /> */}
      <div className="filled" style={this.props.currentStep == this.state.sectionStep ? { width: this.state.width + '%' }: {width:0}} />
    </div>
  }
}

export default BarGraph;
