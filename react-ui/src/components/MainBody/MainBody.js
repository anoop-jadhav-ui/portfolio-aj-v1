import React from 'react';

import './MainBody.css';
import Summary from '../Summary/Summary'
import Education from '../Education/Education'
import WorkExperience from '../WorkExperience/WorkExperience'
import Certifications from '../Certifications/Certifications'
import Skills from '../Skills/Skills'
import Hobbies from '../Hobbies/Hobbies'
import Feedback from '../Feedback/Feedback'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'


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

      <Summary currentStep={this.props.currentStep} dbData={this.props.dbData}  imageData={this.props.imageData} darkMode={this.props.darkMode} class=""/>
      <Projects currentStep={this.props.currentStep} projects={this.props.dbData.projects} class=""/>
      <Education currentStep={this.props.currentStep} dbData={this.props.dbData} imageData={this.props.imageData} class=""/>
      <WorkExperience currentStep={this.props.currentStep} dbData={this.props.dbData} imageData={this.props.imageData} class=""/>
      <Certifications currentStep={this.props.currentStep} dbData={this.props.dbData} imageData={this.props.imageData} class=""/>
      <Skills currentStep={this.props.currentStep} dbData={this.props.dbData} imageData={this.props.imageData} class=""/>
      <Hobbies currentStep={this.props.currentStep} dbData={this.props.dbData} imageData={this.props.imageData} class=""/>
      <Feedback currentStep={this.props.currentStep} dbData={this.props.dbData} imageData={this.props.imageData} class=""/>
      <Contact currentStep={this.props.currentStep} dbData={this.props.dbData} imageData={this.props.imageData} class=""/>

    </div>
  );
}
}
export default MainBody;
