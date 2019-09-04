import React from 'react';

import './MainBody.css';
import Summary from '../Summary/Summary'
import Education from '../Education/Education'
import WorkExperience from '../WorkExperience/WorkExperience'
import Certifications from '../Certifications/Certifications'
import Skills from '../Skills/Skills'
import Hobbies from '../Hobbies/Hobbies'
import Contacts from '../Contacts/Contacts'


function MainBody() {
  return (
    <div className="main-body row justify-content-center">
      <Summary/>
      <Education/>
      <WorkExperience/>
      <Certifications/>
      <Skills/>
      <Hobbies/>
      <Contacts/>
    </div>
  );
}
export default MainBody;
