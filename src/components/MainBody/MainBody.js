import React from 'react';

import './MainBody.css';
import Summary from '../Summary/Summary'
import Education from '../Education/Education'
import WorkExperience from '../WorkExperience/WorkExperience'
import Certifications from '../Certifications/Certifications'

function MainBody() {
  return (
    <div className="main-body row justify-content-center">
      <Summary/>
      <Education/>
      <WorkExperience/>
      <Certifications/>
    </div>
  );
}
export default MainBody;
