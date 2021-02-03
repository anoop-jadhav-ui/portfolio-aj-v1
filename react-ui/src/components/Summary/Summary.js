import React, { useState } from "react";
import MainLogo from '../../assets/main-logo.svg'
import MainLogoDark from '../../assets/main-logo-dark.svg'
import "./Summary.css";

class Summary extends React.Component {
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
       
        {
          <img className="mainlogo" src={MainLogo} alt="main logo" />
        }
      
       
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
