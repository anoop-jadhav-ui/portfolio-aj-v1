import React from 'react';
import LeftPane from '../LeftPane/LeftPane';
import './App.css';
import MainBody from '../MainBody/MainBody';
import Portfolio from '../Portfolio/Portfolio'

class App extends React.Component {

  state = {
      currentStep: 0,
      showPortfolio: true
    }

  changeStep = (newStep) => {
    this.setState(() => {
      return {
        showPortfolio : false
      }
    })
    setTimeout( () => {
      this.setState(() => {
        return {
          currentStep: newStep
        }
      })
    }, 400)
  }

  render() {
    return (
      <div>
        {
          this.state.currentStep === 0 ?
            <div className={this.state.showPortfolio ? 'portfolio row no-gutters fade show' : 'portfolio row no-gutters fadeOut hide'}>
              <Portfolio currentStep={this.state.currentStep} changeStep={this.changeStep} />
            </div>
            :
            <div className={this.state.currentStep !== 0 ? 'App row no-gutters fade show' : 'App row no-gutters fadeOut hide'}>
              <LeftPane currentStep={this.state.currentStep}  changeStep={this.changeStep}></LeftPane>
              <MainBody currentStep={this.state.currentStep} changeStep={this.changeStep} ></MainBody>
            </div>
        }
      </div>
    );
  }
}

export default App;
