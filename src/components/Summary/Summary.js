import { Component } from "react";
// import MainLogo from '../../assets/main-logo.svg'
// import MainLogoDark from '../../assets/main-logo-dark.svg'
import myImage from '../../assets/AnoopJadhav.png'
import "./Summary.css";

class Summary extends Component {
  state = {
    mainLogoUrl: ""
  };

  render() {
    return (
      <div
        className={
          "show-on-scroll col-md-7 page-1 text-center " + this.props.class
        }
      >

        {/* {
          MainLogo && <img className="mainlogo" src={MainLogo} alt="main logo" />
        } */}

        {/* <svg className="mainlogo" width="196" height="313" viewBox="0 0 196 313" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M188.971 175.237L196 145.949V102.018L169.446 56.6225L167.493 36.3165L161.831 41.9788L139.573 9.86013L137.425 20.7941L110.383 4.00262L108.528 14.9366L87.7339 0L82.9502 18.6464L49.953 14.9366L54.1509 23.0395L39.8 24.6015V35.8284L30.5256 41.8811L35.6997 46.7624L23.3014 51.1555L28.2803 56.7201L0.75 102.116V148.292L8.36475 173.87L12.465 165.474V141.361L22.2275 127.986V94.7939L40.6786 70.29H98.8631L156.852 69.8019L175.499 94.9891V127.694L185.261 142.825V165.084L188.971 175.237Z" fill="#333333" />
          <path className="eyebrow right" d="M175.01 147.999L171.203 141.166L159.293 134.43L125.124 137.651L120.243 146.828L128.639 147.999L165.638 143.704L175.01 147.999Z" fill="#333333" />
          <path className="eyebrow left" d="M22.8134 147.999L26.6208 141.166L38.531 134.43L72.6022 137.651L77.4834 146.828L69.0877 147.999L32.1854 143.704L22.8134 147.999Z" fill="#333333" />
          <path d="M140.256 245.039L111.262 235.179L102.28 240.646V221.609L114.776 224.44L146.895 232.445L153.631 250.603L140.256 245.039ZM57.5679 245.039L86.4649 235.179L95.4464 240.646V221.609L82.9504 224.44L50.8317 232.445L44.0956 250.603L57.5679 245.039Z" fill="#333333" />
          <path d="M161.831 229.614L149.921 259.975L132.739 277.255H64.9873L48.7816 260.952L35.8951 229.614L10.7078 202.572L12.1722 229.614L23.3991 265.735L53.4676 296.097V296.389L69.5757 312.009L99.5466 312.4L129.42 312.009L174.23 265.735L185.554 229.614L187.116 202.572L161.831 229.614Z" fill="#333333" />
        </svg> */}

        <img src={myImage} className="mainlogo" alt="mi Baburao" />


        <div className="h1 bold main-title grey-1">
          {this.props.dbData.overview.name}
        </div>
        <div className="h4 uppercase letterspacing-1 red bold">
          {this.props.dbData.overview.title}
        </div>
        <div className="body-text summary-text">
          {this.props.dbData.overview.summary}
        </div>
        <div className="default-text red scroll-text thin">
          Scroll to Know more
        </div>
      </div>
    );
  }
}

export default Summary;
