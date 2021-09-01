import React, { Component } from "react";
import myImage from "../../assets/AnoopJadhav.png";
import "./Summary.css";

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = { imageStatus: "loading", mainLogoUrl: "" };
  }

  handleImageLoaded() {
    this.setState({ imageStatus: "loaded" });
  }

  handleImageErrored() {
    this.setState({ imageStatus: "failed to load" });
  }

  render() {
    return (
      <div
        className={
          "show-on-scroll col-md-7 page-1 text-center " + this.props.class
        }
      >
        <div className="mainlogo-wrapper">
        <img
          src={myImage}
          className={`mainlogo ${this.state.imageStatus}`}
          alt="mi Baburao"
          loading="eager"
          onLoad={this.handleImageLoaded.bind(this)}
          onError={this.handleImageErrored.bind(this)}
        />
        </div>

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
