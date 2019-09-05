import React from 'react';
import LeftPane from '../LeftPane/LeftPane';
import './App.css';
import MainBody from '../MainBody/MainBody';
import Portfolio from '../Portfolio/Portfolio'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentStep: 0
    }
    this.changeStep = this.changeStep.bind(this);
  }

  changeStep(newStep) {
    this.setState(prevState => {
      return {
        currentStep: prevState.currentStep + 1
      }
    })
  }

  render() {
    return (
      <div>
        {
          this.state.currentStep === 0 ?
            <div className='portfolio row no-gutters '>
              <Portfolio currentStep={this.state.currentStep} changeStep={()=>this.changeStep} />
            </div>
            :
            <div className='App row no-gutters'>
              {'current step ' + this.state.currentStep}
              <LeftPane></LeftPane>
              <MainBody></MainBody>
            </div>
        }
      </div>
    );
  }
}

export default App;
