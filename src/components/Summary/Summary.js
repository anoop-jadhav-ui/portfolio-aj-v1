import React from 'react';
import MainLogo from '../../assets/main-logo.svg'
import './Summary.css';

function Summary() {
  return (
    <div class="col-md-7 page-1 text-center">
      <img src={MainLogo} alt="main logo" />
      <div class="h1 bold main-title grey-1">
        Anoop Jadhav
          </div>
      <div class="h4 uppercase letterspacing-1 red bold">
        UI Developer | Designer
          </div>
      <div class="body-text summary-text">
        5 years of experience in UI Development and Design using tools and technologies like HTML, CSS, JavaScript, Vue Js, Salesforce Lightning, Adobe Illustrator, Figma, Sketch and Invision.
          </div>
      <div class="default-text red scroll-text thin">
        Scroll to Know more
          </div>
    </div>
  );
}

export default Summary;
