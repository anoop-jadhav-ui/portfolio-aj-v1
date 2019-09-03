import React from 'react';
import LightLogo from '../../assets/leftpane-logo.svg'
import './LeftPane.css';

function LeftPane() {
  return (
    <div className="left-pane  col-md-4">
       <img src={LightLogo} alt="logo"/>
       <ul class="menu body-text grey4">
         <li class="bold grey2"><a class="grey2" href="javascript:void(0)">Work</a></li>
         <li><a class="grey4" href="javascript:void(0)">Summary</a></li>
         <li><a class="grey4" href="javascript:void(0)">Education</a></li>
         <li><a class="grey4" href="javascript:void(0)">Certifications</a></li>
         <li><a class="grey4" href="javascript:void(0)">Skills</a></li>
         <li><a class="grey4" href="javascript:void(0)">Hobbies & Interests</a></li>
         <li><a class="grey4" href="javascript:void(0)">Location</a></li>
         <li><a class="grey4" href="javascript:void(0)">Contact</a>s</li>
       </ul>
    </div>
  );
}

export default LeftPane;
