import React from 'react'
import LeftPane from '../LeftPane/LeftPane'
import './App.css'
import MainBody from '../MainBody/MainBody'
import Portfolio from '../Portfolio/Portfolio'
import leftPaneData from '../LeftPane/leftPaneData'

console.log(leftPaneData)

class App extends React.Component {

  state = {
    currentStep: 0,

    /*Variables used for transitions*/
    showPortfolio: true,
    mainPage: false,
    leftPaneItems: leftPaneData
  }

  changeStep = (newStep) => {
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
            mainPage: true
          }
        })

        if (true) {
          var leftPaneItemClass = this.state.leftPaneItems[newStep].class
          var ele = document.getElementsByClassName(leftPaneItemClass)
          if (ele)
            ele[0].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
          else
            alert('scroll class not found')
        }
      }, 400)
    } else {
      //portfolio - fade In, Summary - fade out
      this.setState(() => {
        return {
          mainPage: false
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
            <div className={this.state.mainPage ? 'App summary row no-gutters fade show' : 'App summary row no-gutters fadeOut hide'}>
              <LeftPane currentStep={this.state.currentStep} changeStep={this.changeStep} leftPaneItems={this.state.leftPaneItems}></LeftPane>
              <MainBody currentStep={this.state.currentStep} changeStep={this.changeStep} ></MainBody>
            </div>
        }
      </div>
    );
  }

}

export default App;
