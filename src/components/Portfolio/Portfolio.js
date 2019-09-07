import React from 'react'
import './Portfolio.css'
import headerLogo from '../../assets/leftpane-logo-dark.svg'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import insta from '../../assets/insta.svg'
import linkedIn from '../../assets/linkedin.svg'
import thumbnail1 from '../../assets/thumbnails/thumbnail1.svg'
import thumbnail2 from '../../assets/thumbnails/thumbnail2.svg'

import portfolio1 from '../../assets/portfolio/portfolio-1.png'
import portfolio2 from '../../assets/portfolio/portfolio-2.png'

class Portfolio extends React.Component {

    state = {
        currentImage: '',
        currentStep : this.props.currentStep,
        portfolio: [
            {
                'id': 1,
                'thumbnail': thumbnail1,
                'portfolioImage': portfolio1
            },
            {
                'id': 2,
                'thumbnail': thumbnail2,
                'portfolioImage': portfolio2
            }

        ]
    }

    setCurrentImage(number) {
        this.setState(() => {
            return {
                currentImage: this.state.portfolio[number - 1]['portfolioImage']
            }
        })
    }
    closeImage() {
        this.setState(() => {
            return {
                currentImage: ''
            }
        })
    }
    render() {
        return <div className="portfolio-wrapper row no-gutters col-md-12  justify-content-center">
            <img className="current-image" src={this.state.currentImage} onClick={() => this.closeImage()} />
            {
                this.state.currentImage === '' &&

                <div className="row no-gutters col-md-12  justify-content-center">
                    <div className="portfolio-header col-md-12  text-center">
                        <img src={headerLogo} alt="header logo" />
                        
                        <ul className="portfolio-menu label grey4 justify-content-center uppercase">
                            <li className="bold grey2"><a className="grey2" onClick={(e) => this.props.changeStep(this.state.currentStep,e)}>Work</a></li>
                            <li><a className="grey4" onClick={(e) => this.props.changeStep(this.state.currentStep + 1,e)}>Profile</a></li>
                            <li><a className="grey4" onClick={(e) => this.props.changeStep(this.state.currentStep + 2,e)}>Contacts</a></li>
                        </ul>
                    </div>
                    <div className="portfolio-body row col-md-12 justify-content-center">
                        <div className="thumbnail col-md-4"><div className="thumbnail-image thumbnail1" style={{ 'backgroundImage': 'url(' + thumbnail1 + ')' }} onClick={() => this.setCurrentImage(1)}></div></div>
                        <div className="thumbnail col-md-4"><div className="thumbnail-image thumbnail2" style={{ 'backgroundImage': 'url(' + thumbnail2 + ')' }} onClick={() => this.setCurrentImage(2)}></div></div>

                    </div>
                    <div className="portfolio-footer col-md-12 row no-gutters justify-content-center text-center">
                        <a className="social-icon" href="https://www.facebook.com/anoop.jadhav" target="_blank"><img src={facebook} /></a>
                        <a className="social-icon" target="_blank"><img src={twitter} /></a>
                        <a className="social-icon" href="https://www.instagram.com/mi_baburao/" target="_blank"><img src={insta} /></a>
                        <a className="social-icon" href="https://www.linkedin.com/in/anoop-jadhav-44528258/" target="_blank"><img src={linkedIn} /></a>
                    </div>
                </div>
            }
        </div>
    }
}

export default Portfolio;