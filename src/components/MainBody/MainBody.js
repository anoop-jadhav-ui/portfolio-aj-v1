import React from 'react';

import './MainBody.css';
import Summary from '../Summary/Summary'
import Education from '../Education/Education'

function MainBody() {
  return (
    <div className="main-body col-md-8">
      <Summary/>
      <Education/>
    </div>
  );
}
export default MainBody;
