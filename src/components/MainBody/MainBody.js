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
      {/* <Summary class={props.currentStep === 1 ? 'show' : 'hide'} />
      <Education class={props.currentStep === 2 ? 'show' : 'hide'} />
      <WorkExperience class={props.currentStep === 3 ? 'show' : 'hide'} />
      <Certifications class={props.currentStep === 4 ? 'show' : 'hide'} />
      <Skills class={props.currentStep === 5 ? 'show' : 'hide'} />
      <Hobbies class={props.currentStep === 6 ? 'show' : 'hide'} />
      <Contacts class={props.currentStep === 7 ? 'show' : 'hide'} /> */}
      {/* {
        props.currentStep === 1 &&  <Summary/>
      }
      {
        props.currentStep === 2 &&  <Education/>
      }
      {
        props.currentStep === 3 &&  <WorkExperience/>
      }
      {
        props.currentStep === 4 &&  <Certifications/>
      }
      {
        props.currentStep === 5 &&  <Skills/>
      }
      {
        props.currentStep === 6 &&  <Hobbies/>
      }
      {
        props.currentStep === 7 &&  <Contacts/>
      } */}
      <Summary />
      <Education />
      <WorkExperience />
      <Certifications />
      <Skills />
      <Hobbies />
      <Contacts />

    </div>
  );
}
}
export default MainBody;
