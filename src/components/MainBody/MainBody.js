import React from 'react';

import './MainBody.css';
import Summary from '../Summary/Summary'
import Education from '../Education/Education'
import WorkExperience from '../WorkExperience/WorkExperience'


function MainBody() {
  return (
    <div className="main-body row justify-content-center">
      <Summary/>
      <Education/>
      <WorkExperience/>
    </div>
  );
}
export default MainBody;
