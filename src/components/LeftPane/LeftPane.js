import React from 'react';
import LightLogo from '../../assets/leftpane-logo.svg'
import './LeftPane.css';

const LeftPane = (props) => {

  return <div className="left-pane position-fixed  d-none d-md-block">
    <img src={LightLogo} alt="logo" />
    <ul class="menu body-text grey4">
      <li className={props.currentStep === 0 ? 'bold grey2' : 'grey4'}><a onClick={(e)=>props.changeStep(0,e)}>Work</a></li>
      <li className={props.currentStep === 1 ? 'bold grey2' : 'grey4'}><a  onClick={(e)=>props.changeStep(1,e)}>Summary</a></li>
      <li className={props.currentStep === 2 ? 'bold grey2' : 'grey4'}><a onClick={(e)=>props.changeStep(2,e)}>Education</a></li>
      <li className={props.currentStep === 3 ? 'bold grey2' : 'grey4'}><a onClick={(e)=>props.changeStep(3,e)}>Work Experience</a></li>
      <li className={props.currentStep === 4 ? 'bold grey2' : 'grey4'}><a onClick={(e)=>props.changeStep(4,e)}>Certifications</a></li>
      <li className={props.currentStep === 5 ? 'bold grey2' : 'grey4'}><a onClick={(e)=>props.changeStep(5,e)}>Skills</a></li>
      <li className={props.currentStep === 6 ? 'bold grey2' : 'grey4'}><a  onClick={(e)=>props.changeStep(6,e)}>Hobbies & Interests</a></li>
      <li className={props.currentStep === 7 ? 'bold grey2' : 'grey4'}><a  onClick={(e)=>props.changeStep(7,e)}>Location</a></li>
      <li className={props.currentStep === 8 ? 'bold grey2' : 'grey4'}><a  onClick={(e)=>props.changeStep(8,e)}>Contact</a></li>
    </ul>
  </div>

}

export default LeftPane;
