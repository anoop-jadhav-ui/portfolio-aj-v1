import React from 'react'
import './Certifications.css'

function Certifications(props){
    
        return <div className={"show-on-scroll col-md-7 page-1 text-left section certifications "+ props.class}>

            <div className="section-title grey4 h2 bold">Certifications</div>
            <div className="subsection">
                <div className="subsection-title uppercase body-text grey3 letterspacing-1">Development</div>
                <div className="subsection-data">
                    <span className="h3 grey1 bold">Microsoft Technology Associate - Web Development Fundamentals</span>
                    <div className="red default-text mt-1"><a href="https://www.linkedin.com/in/anoop-jadhav-44528258/" target="_Blank">View LinkedIn profile</a></div>
                    <div className="mt-2 grey-1 body-text">
                        Started my journey as a UI developer in my college days where I opted for this certification which involved learning HTML, CSS, JavaScript and .Net Fundamentals.
                    </div>

                </div>
                <div className="subsection-data">
                    <span className="h3 grey1 bold">HTML5: Structure, Syntax, and Semantics</span>
                    <div className="red default-text mt-1"><a href="https://www.linkedin.com/in/anoop-jadhav-44528258/" target="_Blank">View LinkedIn profile</a></div>
                    <div className="mt-2 grey-1 body-text">
                        Lynda.com
                    </div>

                </div>
                <div className="subsection-data">
                    <span className="h3 grey1 bold">Learning Git and GitHub</span>
                    <div className="red default-text mt-1"><a href="https://www.linkedin.com/in/anoop-jadhav-44528258/" target="_Blank">View LinkedIn profile</a></div>
                    <div className="mt-2 grey-1 body-text">
                        Lynda.com
                    </div>

                </div>
                <div className="subsection-data">
                    <span className="h3 grey1 bold">Shaping up with Angular.js</span>
                    <div className="red default-text mt-1"><a href="https://www.linkedin.com/in/anoop-jadhav-44528258/" target="_Blank">View LinkedIn profile</a></div>
                    <div className="mt-2 grey-1 body-text">
                       Code School
                    </div>

                </div>
            </div>
            <div className="subsection">
                <div className="subsection-title uppercase body-text grey3 letterspacing-1">Design</div>
                <div className="subsection-data">
                    <span className="h3 grey1 bold">Drawing Vector Graphics: Iconography</span>
                    <div className="red default-text mt-1"><a href="https://www.linkedin.com/in/anoop-jadhav-44528258/" target="_Blank">View LinkedIn profile</a></div>
                    <div className="mt-2 grey-1 body-text">
                        Lynda.com -  Deke McClelland
                    </div>

                </div>
                <div className="subsection-data">
                    <span className="h3 grey1 bold">Illustrator CC 2017 One-on-One Fundamentals</span>
                    <div className="red default-text mt-1"><a href="https://www.linkedin.com/in/anoop-jadhav-44528258/" target="_Blank">View LinkedIn profile</a></div>
                    <div className="mt-2 grey-1 body-text">
                        Lynda.com -  Deke McClelland
                    </div>

                </div>
                <div className="subsection-data">
                    <span className="h3 grey1 bold">Creating a Design System with Sketch</span>
                    <div className="red default-text mt-1"><a href="https://www.linkedin.com/in/anoop-jadhav-44528258/" target="_Blank">View LinkedIn profile</a></div>
                    <div className="mt-2 grey-1 body-text">
                        Lynda.com - Anne Grundhoefer
                    </div>

                </div>
            </div>
        </div>
    
}

export default Certifications;