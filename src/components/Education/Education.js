import React from 'react';
import KnowMoreButton from '../../assets/arrow-icon.svg'
import BarGraph from '../BarGraph/BarGraph'
import './Education.css';


function Education() {

  return (
    <div className="col-md-7 page-1 text-left section education">
     <div className="section-title grey4 h2 bold">Education</div>
     <div className="subsection">
       <div className="subsection-title uppercase body-text grey3 letterspacing-1">Higher Secondary</div>
        <div className="subsection-data">
          <span className="h3 grey1 bold">Army Public School</span><span className="h3 grey3 light">, Kirkee</span>
          <div className="education-bars">
            <BarGraph value="76" />
          </div>
          <a className="know-more-button"><span className="red pr-2">Know more</span> <img src={KnowMoreButton} alt="know more buton"/></a>
       </div>
       <div className="subsection-title uppercase body-text grey3 letterspacing-1">Graduation</div>
       <div className="subsection-data">
          <span className="h3 grey1 bold">MIT Academy of Engineering</span><span className="h3 grey3 light">, Alandi</span>
          <div className="education-bars">
            <BarGraph value="64" />
          </div>
          <a className="know-more-button"><span className="red pr-2">Know more</span> <img src={KnowMoreButton} alt="know more buton"/></a>
       </div>
     </div> 
    </div>
  );
}

export default Education;
