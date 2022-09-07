import React from "react";

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
import { useGlobalContext } from "../../context/GlobalContext";

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
