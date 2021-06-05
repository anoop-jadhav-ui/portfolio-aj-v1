import { Component } from "react";
import "./Portfolio.css";
import headerLogo from "../../assets/leftpane-logo-dark.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import insta from "../../assets/insta.svg";
import linkedIn from "../../assets/linkedin.svg";

import closeButtonImage from "../../assets/cross-icon.svg";

// import { Link } from "react-router-dom";

class Portfolio extends Component {
  state = {
    currentImage: "",
    currentStep: this.props.currentStep,
    portfolio: [],
    imageData: this.props.imageData,
    showSkipButton: true,
  };
  componentDidMount() {
    var portfolioImageData = this.props.imageData.portfolio;
    var thumbnailImageData = this.props.imageData.thumbnail;
    var portfolioData = this.props.dbData.portfolioData;

    let portfolioTemp = [];
    portfolioImageData.forEach((p, index) => {
      portfolioTemp.push({
        id: index,
        thumbnail: thumbnailImageData[index].fileUrl,
        portfolioImage: p.fileUrl,
        portfolioData: portfolioData[index] ? portfolioData[index] : "",
      });
    });

    this.setState(() => {
      return {
        portfolio: portfolioTemp,
      };
    });
  }
  setCurrentImage(number) {
    this.setState(() => {
      return {
        currentImage: this.state.portfolio[number]["portfolioImage"].i,
      };
    });

    this.props.toggleLoader(true);

    setTimeout(() => {
      this.props.toggleLoader(false);
    }, 1500);
  }
  closeImage() {
    this.setState(() => {
      return {
        currentImage: "",
      };
    });
  }
  scrollTop() {
    var ele = document.querySelector(".portfolio.row");
    if (ele)
      ele.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
  }
  // imageOnScroll(event) {
  //   // var ele = document.querySelector(".portfolio-image-wrapper");
  //   // console.log("scrolling...");
  // }

  render() {
    return (
      <div className="portfolio-wrapper row no-gutters col-md-12  justify-content-center portfolio ">
        {this.state.currentImage !== "" && (
          <div className="portfolio-image-wrapper">
            <div className="">
              <img className="current-image" src={this.state.currentImage} />
            </div>
          </div>
        )}

        {this.state.currentImage !== "" && (
          <div className="close-button" onClick={() => this.closeImage()}>
            <img src={closeButtonImage} alt="close button" />
          </div>
        )}

        {this.state.showSkipButton && this.state.currentImage !== "" && (
          <div className="skip-button" onClick={() => this.scrollTop()}>
            <div className="arrow"></div>
          </div>
        )}

        {this.state.currentImage === "" && (
          <div className="row no-gutters col-md-12  justify-content-center">
            <div className="portfolio-header col-md-12  text-center">
              <img src={headerLogo} alt="header logo" />

              <ul className="portfolio-menu label grey4 justify-content-center uppercase">
                <li className="bold grey2">
                  <a
                    className="grey2"
                    onClick={(e) =>
                      this.props.changeStep(this.state.currentStep, e)
                    }
                  >
                    Work
                  </a>
                </li>
                <li>
                  <Link
                    to="/profile"
                    className="grey4"
                    onClick={(e) => this.props.setClickedItem("Profile", e)}
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profile"
                    className="grey4"
                    onClick={(e) => this.props.setClickedItem("Contacts", e)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="portfolio-body row col-md-12 justify-content-center">
              {this.state.portfolio.map((ele, index) => {
                return (
                  <div className="thumbnail col-md-4" key={index}>
                    {!ele.thumbnail.i ? (
                      <div className="thumbnail-image thumbnail thumbnail-stencil" />
                    ) : (
                      <div
                        className={"thumbnail-image thumbnail" + index + 1}
                        style={{
                          backgroundImage: "url(" + ele.thumbnail.i + ")",
                        }}
                        onClick={() => this.setCurrentImage(index)}
                      >
                        <div className="portfolio-details pt-3 pb-3 pr-3 pl-3">
                          <div className="details-header row no-gutters align-items-center">
                            <span className="pr-3 h6 grey1 bold">{ele.portfolioData.title}</span>
                            <span className="dot"></span>
                            <span className="pl-3 grey3 label">{ele.portfolioData.type}</span>
                          </div>
                          <div className="details-body pt-2 pb-3 label">
                            {ele.portfolioData.description}
                          </div>
                          <div className="red label">Click to view more</div>

                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="portfolio-footer col-md-12 row no-gutters justify-content-center text-center">
              <a
                className="social-icon"
                href="https://www.facebook.com/anoop.jadhav"
                target="_blank"
              >
                <img src={facebook} />
              </a>
              <a className="social-icon" target="_blank">
                <img src={twitter} />
              </a>
              <a
                className="social-icon"
                href="https://www.instagram.com/anoop.designs/"
                target="_blank"
              >
                <img src={insta} />
              </a>
              <a
                className="social-icon"
                href="https://www.linkedin.com/in/anoop-jadhav-44528258/"
                target="_blank"
              >
                <img src={linkedIn} />
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Portfolio;
