import React from 'react'
import BarGraph from '../BarGraph/BarGraph'
import './Skills.css'


function Skills(props){
    
        return <div className={"show-on-scroll col-md-7 page-1 text-left section skills " + props.class} >
            <div className="section-title grey4 h2 bold">Skills</div>
            <div className="subsection">
                <div className="subsection-title uppercase body-text grey3 letterspacing-1">Development</div>
                <div className="subsection-data">
                    <div className="skill-bar-wrapper row no-gutters align-items-center">
                        <div className="skill-label grey-1 body-text bold col-md-2">HTML</div><BarGraph class="col-md-10" value="75" currentStep={props.currentStep} sectionStep={5}/>
                    </div>
                    <div className="skill-bar-wrapper row no-gutters align-items-center">
                        <div className="skill-label grey-1 body-text bold col-md-2">CSS</div><BarGraph class="col-md-10" value="80" currentStep={props.currentStep} sectionStep={5}/>
                    </div>
                    <div className="skill-bar-wrapper row no-gutters align-items-center">
                        <div className="skill-label grey-1 body-text bold col-md-2">JS</div><BarGraph class="col-md-10" value="50" currentStep={props.currentStep} sectionStep={5}/>
                    </div>
                    <div className="skill-bar-wrapper row no-gutters align-items-center">
                        <div className="skill-label grey-1 body-text bold col-md-2">React JS</div><BarGraph class="col-md-10" value="25" currentStep={props.currentStep} sectionStep={5}/>
                    </div>
                    <div className="skill-bar-wrapper row no-gutters align-items-center">
                        <div className="skill-label grey-1 body-text bold col-md-2">Vue JS</div><BarGraph class="col-md-10" value="50" currentStep={props.currentStep} sectionStep={5}/>
                    </div>
                    <div className="skill-bar-wrapper row no-gutters align-items-center">
                        <div className="skill-label grey-1 body-text bold col-md-2">Lightning</div><BarGraph class="col-md-10" value="80" currentStep={props.currentStep} sectionStep={5}/>
                    </div>
                    
                </div>
                
            </div>
            <div className="subsection">
                <div className="subsection-title uppercase body-text grey3 letterspacing-1">DESIGN</div>
                <div className="subsection-data">
                    <div className="skill-bar-wrapper row no-gutters align-items-center">
                        <div className="skill-label grey-1 body-text bold col-md-2">Adobe Illustrator</div><BarGraph class="col-md-10" value="75" currentStep={props.currentStep} sectionStep={5}/>
                    </div>
                    <div className="skill-bar-wrapper row no-gutters align-items-center">
                        <div className="skill-label grey-1 body-text bold col-md-2">Sketch</div><BarGraph class="col-md-10" value="80" currentStep={props.currentStep} sectionStep={5}/>
                    </div>
                    <div className="skill-bar-wrapper row no-gutters align-items-center">
                        <div className="skill-label grey-1 body-text bold col-md-2">Figma</div><BarGraph class="col-md-10" value="50" currentStep={props.currentStep} sectionStep={5}/>
                    </div>
                    <div className="skill-bar-wrapper row no-gutters align-items-center">
                        <div className="skill-label grey-1 body-text bold col-md-2">Invision</div><BarGraph class="col-md-10" value="25" currentStep={props.currentStep} sectionStep={5}/>
                    </div>
                    
                </div>
                
            </div>
        </div>
    
}

export default Skills