import React from 'react';
import KnowMoreButton from '../../assets/arrow-icon.svg'
import BarGraph from '../BarGraph/BarGraph'
import './Education.css';


function Education() {

  return (
    <div class="col-md-8 page-1 text-left">
     <div class="section-title grey4 h2 bold">Education</div>
     <div class="subsection">
       <div class="subsection-title uppercase body-text grey3 letterspacing-1">Higher Secondary</div>
        <div class="subsection-data">
          <span class="h3 grey1 bold">Army Public School</span><span class="h3 grey3 light">, Kirkee</span>
          <div className="education-bars">
            <BarGraph value="76" />
          </div>
          <a href="javascript:void(0)" class="know-more-button"><span class="red pr-2">Know more</span> <img src={KnowMoreButton} alt="know more buton"/></a>
       </div>
       <div class="subsection-data">
          <span class="h3 grey1 bold">MIT Academy of Engineering</span><span class="h3 grey3 light">, Alandi</span>
          <div className="education-bars">
            <BarGraph value="64" />
          </div>
          <a href="javascript:void(0)" class="know-more-button"><span class="red pr-2">Know more</span> <img src={KnowMoreButton} alt="know more buton"/></a>
       </div>
      
     </div> 
    </div>
  );
}

export default Education;
