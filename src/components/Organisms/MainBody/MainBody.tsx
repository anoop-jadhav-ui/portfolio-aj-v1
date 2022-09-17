import React from "react";

import "./MainBody.scss";
import SummaryMobile from "../../Screens/SummaryMobile/SummaryMobile";
import Education from "../../Screens/Education/Education";
import WorkExperience from "../../Screens/WorkExperience/WorkExperience";
import Certifications from "../../Screens/Certifications/Certifications";
import Skills from "../../Screens/Skills/Skills";
import Hobbies from "../../Screens/Hobbies/Hobbies";
import Feedback from "../../Screens/Feedback/Feedback";
import Contact from "../../Screens/Contact/Contact";
import Projects from "../../Screens/Projects/Projects";
import { useGlobalContext } from "../../../context/GlobalContext";
import { useTheme } from "../../../context/ThemeContext";
import SummaryDesktop from "../../Screens/SummaryDesktop/SummaryDesktop";

export interface SectionProps {
  sectionRef: HTMLDivElement;
}

const MainBody = () => {
  const { profileData } = useGlobalContext();
  const { appFeatureAvailability } = profileData;
  const { isMobile } = useTheme();

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
    <div className="main-body justify-content-center text">
      {isMobile && <SummaryMobile />}
      {!isMobile && <SummaryDesktop />}
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
