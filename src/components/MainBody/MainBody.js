import React, { Component } from "react";

import "./MainBody.css";
import Summary from "../Summary/Summary";
import Education from "../Education/Education";
import WorkExperience from "../WorkExperience/WorkExperience";
import Certifications from "../Certifications/Certifications";
import Skills from "../Skills/Skills";
import Hobbies from "../Hobbies/Hobbies";
import Feedback from "../Feedback/Feedback";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";

class MainBody extends Component {
  componentDidMount() {
    window.addEventListener(
      "scroll",
      this.props.changeCurrentStepBasedOnScrollCalculation
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "scroll",
      this.props.changeCurrentStepBasedOnScrollCalculation
    );
  }
  render() {
    return (
      <div className="main-body row justify-content-center text">
        <Summary
          currentStep={this.props.currentStep}
          dbData={this.props.dbData}
          imageData={this.props.imageData}
          darkMode={this.props.darkMode}
          leftPaneData={this.props.leftPaneData}
        />
        {this.props.dbData.appFeatureAvailability.projects && (
          <Projects
            currentStep={this.props.currentStep}
            projects={this.props.dbData.projects}
            leftPaneData={this.props.leftPaneData}
          />
        )}
        {this.props.dbData.appFeatureAvailability.experience && (
          <WorkExperience
            currentStep={this.props.currentStep}
            dbData={this.props.dbData}
            imageData={this.props.imageData}
            leftPaneData={this.props.leftPaneData}
          />
        )}
        {this.props.dbData.appFeatureAvailability.education && (
          <Education
            currentStep={this.props.currentStep}
            dbData={this.props.dbData}
            imageData={this.props.imageData}
            leftPaneData={this.props.leftPaneData}
          />
        )}
        {this.props.dbData.appFeatureAvailability.certifications && (
          <Certifications
            currentStep={this.props.currentStep}
            certifications={this.props.dbData.certifications}
          />
        )}
        {this.props.dbData.appFeatureAvailability.skills && (
          <Skills
            currentStep={this.props.currentStep}
            dbData={this.props.dbData}
            imageData={this.props.imageData}
            leftPaneData={this.props.leftPaneData}
          />
        )}
        {this.props.dbData.appFeatureAvailability.hobbies && (
          <Hobbies
            currentStep={this.props.currentStep}
            dbData={this.props.dbData}
            imageData={this.props.imageData}
            leftPaneData={this.props.leftPaneData}
          />
        )}
        {this.props.dbData.appFeatureAvailability.feedback && (
          <Feedback
            currentStep={this.props.currentStep}
            dbData={this.props.dbData}
            imageData={this.props.imageData}
            leftPaneData={this.props.leftPaneData}
          />
        )}
        {this.props.dbData.appFeatureAvailability.contactDetails && (
          <Contact
            currentStep={this.props.currentStep}
            contactDetails={this.props.dbData.contactDetails}
          />
        )}
      </div>
    );
  }
}
export default MainBody;
