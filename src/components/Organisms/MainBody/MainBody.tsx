import React from "react";

import "./MainBody.css";
import Summary from "../../Screens/Summary/Summary";
import Education from "../../Screens/Education/Education";
import WorkExperience from "../../Screens/WorkExperience/WorkExperience";
import Certifications from "../../Screens/Certifications/Certifications";
import Skills from "../../Screens/Skills/Skills";
import Hobbies from "../../Screens/Hobbies/Hobbies";
import Feedback from "../../Screens/Feedback/Feedback";
import Contact from "../../Screens/Contact/Contact";
import Projects from "../../Screens/Projects/Projects";
import { useGlobalContext } from "../../../context/GlobalContext";

export interface SectionProps {
  sectionRef: HTMLDivElement;
}

const MainBody = () => {
  const { profileData } = useGlobalContext();
  const { appFeatureAvailability } = profileData;

  const {
    projects,
    experience,
    education,
    certifications,
    skills,
    hobbies,
    feedback,
    contactDetails,
  } = appFeatureAvailability;
  return (
    <div className="main-body row justify-content-center text">
      <Summary />
      {projects && <Projects />}
      {experience && <WorkExperience />}
      {education && <Education />}
      {certifications && <Certifications />}
      {skills && <Skills />}
      {hobbies && <Hobbies />}
      {feedback && <Feedback />}
      {contactDetails && <Contact />}
    </div>
  );
};

export default MainBody;
