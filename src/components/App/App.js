import React from 'react';
import LeftPane from '../LeftPane/LeftPane';
import './App.css';
import MainBody from '../MainBody/MainBody';
import Portfolio from '../Portfolio/Portfolio'

class App extends React.Component {

  state = {
    currentStep: 0,

    /*Variables used for transitions*/
    showPortfolio: true,
    mainPage:false
  }

  changeStep = (newStep) => {
    /*transition
    1. when portfolio appears by default fade in applies
    2. when currentStep > 0 then portfolio is set to false to start fadeIn of portfolio 
    3. when currentStep == 0 then summaryPages should fade and showPortfolio is true  
    */

    if (newStep !== 0) {
      //portfolio - fade out , summary - fade in
      this.setState(() => {
        return {
          showPortfolio: false
        }
      })
      setTimeout(() => {
        this.setState(() => {
          return {
            currentStep: newStep,
            mainPage : true
          }
        })
      }, 400)
    } else {
      //portfolio - fade In, Summary - fade out
      this.setState(() => {
        return {
          mainPage:false
        }
      })
      setTimeout(() => {
        this.setState(() => {
          return {
            showPortfolio: true,
            currentStep: newStep,
          }
        })
      }, 400)
    }
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
            <div className={this.state.mainPage ? 'App row no-gutters fade show' : 'App row no-gutters fadeOut hide'}>
              <LeftPane currentStep={this.state.currentStep} changeStep={this.changeStep}></LeftPane>
              <MainBody currentStep={this.state.currentStep} changeStep={this.changeStep} ></MainBody>
            </div>
        }
      </div>
    );
  }
}

export default App;
