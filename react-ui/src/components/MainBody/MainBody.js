import React from 'react';

import './MainBody.css';
import Summary from '../Summary/Summary'
import Education from '../Education/Education'
import WorkExperience from '../WorkExperience/WorkExperience'
import Certifications from '../Certifications/Certifications'
import Skills from '../Skills/Skills'
import Hobbies from '../Hobbies/Hobbies'
import Contacts from '../Contacts/Contacts'


class MainBody extends React.Component {
componentDidMount(){
  window.addEventListener('scroll', this.props.changeCurrentStepBasedOnScrollCalculation);
}

componentWillUnmount(){
  window.removeEventListener('scroll',  this.props.changeCurrentStepBasedOnScrollCalculation);
}
render() {
  return (
    <div className="main-body row justify-content-center text" >
      <Summary currentStep={this.props.currentStep}/>
      <Education currentStep={this.props.currentStep}/>
      <WorkExperience currentStep={this.props.currentStep}/>
      <Certifications currentStep={this.props.currentStep}/>
      <Skills currentStep={this.props.currentStep}/>
      <Hobbies currentStep={this.props.currentStep}/>
      <Contacts currentStep={this.props.currentStep}/>

    </div>
  );
}
}
export default MainBody;
