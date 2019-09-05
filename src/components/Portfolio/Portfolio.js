import React from 'react'
import './Portfolio.css'
import headerLogo from '../../assets/leftpane-logo-dark.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import insta from '../../assets/insta.svg'
import linkedIn from '../../assets/linkedin.svg'

class Portfolio extends React.Component {
   
    render() {
        return <div className="portfolio-wrapper row no-gutters col-md-12  justify-content-center">
            <div className="portfolio-header col-md-12  text-center">
                <img src={headerLogo} alt="header logo" />
                <ul class="portfolio-menu label grey4 justify-content-center uppercase">
                    <li class="bold grey2"><a class="grey2" href="javascript:void(0)" onClick={this.props.changeStep(this.props.currentStep)}>Work</a></li>
                    <li><a class="grey4" href="javascript:void(0)" onClick={this.props.changeStep(this.props.currentStep + 1)}>Profile</a></li>
                    <li><a class="grey4" href="javascript:void(0)" onClick={this.props.changeStep(this.props.currentStep + 2)}>Contacts</a></li>
                </ul>
            </div>
            <div className="portfolio-body row col-md-12">
                <div class="thumbnail col-md-4"><div class="dummy-image"></div></div>
                <div class="thumbnail col-md-4"><div class="dummy-image"></div></div>
                <div class="thumbnail col-md-4"><div class="dummy-image"></div></div>
                <div class="thumbnail col-md-4"><div class="dummy-image"></div></div>
                <div class="thumbnail col-md-4"><div class="dummy-image"></div></div>
                <div class="thumbnail col-md-4"><div class="dummy-image"></div></div>
                <div class="thumbnail col-md-4"><div class="dummy-image"></div></div>
                <div class="thumbnail col-md-4"><div class="dummy-image"></div></div>
                <div class="thumbnail col-md-4"><div class="dummy-image"></div></div>
            </div>
            <div className="portfolio-footer col-md-12 row no-gutters justify-content-center text-center">
                <a class="social-icon" href="https://www.facebook.com/anoop.jadhav" target="_blank"><img src={facebook}/></a>
                <a class="social-icon" target="_blank"><img src={twitter}/></a>
                <a class="social-icon" href="https://www.instagram.com/mi_baburao/" target="_blank"><img src={insta}/></a>
                <a class="social-icon" href="https://www.linkedin.com/in/anoop-jadhav-44528258/" target="_blank"><img src={linkedIn}/></a>
            </div>
        </div>
    }
}

export default Portfolio;