import React from 'react';
import MainLogo from '../../assets/main-logo.svg'
import './Summary.css';

function Summary(props) {
  return (
    <div className={'show-on-scroll col-md-7 page-1 text-center ' + props.class}>
      <img src={MainLogo} alt="main logo" />
      <div className="h1 bold main-title grey-1">
       {props.dbData.overview.name}
      </div>
      <div className="h4 uppercase letterspacing-1 red bold">
      {props.dbData.overview.title}
          </div>
      <div className="body-text summary-text">
      {props.dbData.overview.summary}
          </div>
      <div className="default-text red scroll-text thin">
        Scroll to Know more
          </div>
    </div>
  );
}

export default Summary;
