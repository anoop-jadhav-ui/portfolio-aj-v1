import React from 'react'
import './Certifications.css'

function Certifications(props){
    
        return <div className={"show-on-scroll col-md-7 page-1 text-left section certifications "+ props.class}>

            <div className="section-title grey4 h2 bold">Certifications</div>
            <div className="subsection">
                <div className="subsection-title uppercase body-text grey3 letterspacing-1">Development</div>
                <div className="subsection-data">
                    <span className="h3 grey1 bold">Web Development Fundamentals</span>
                    <div className="red default-text mt-1"><a >Certification Number/Link to Certificate</a></div>
                    <div className="mt-2 grey-1 body-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque malesuada sed malesuada viverra facilisis. Vestibulum mattis mi fames quisque. Felis maecenas ultricies eu sagittis ornare diam felis lacus. Feugiat porta risus mus at tellus faucibus est. Pretium vel, risus sit eget.
                    </div>

                </div>
            </div>
            <div className="subsection">
                <div className="subsection-title uppercase body-text grey3 letterspacing-1">Design</div>
                <div className="subsection-data">
                    <span className="h3 grey1 bold">Drawing Vector Graphics: Iconography</span>
                    <div className="red default-text mt-1"><a >Certification Number/Link to Certificate</a></div>
                    <div className="mt-2 grey-1 body-text">
                        Lynda.com -  Deke McClelland
                    </div>

                </div>
                <div className="subsection-data">
                    <span className="h3 grey1 bold">Illustrator CC 2017 One-on-One Fundamentals</span>
                    <div className="red default-text mt-1"><a >Certification Number/Link to Certificate</a></div>
                    <div className="mt-2 grey-1 body-text">
                        Lynda.com -  Deke McClelland
                    </div>

                </div>
                <div className="subsection-data">
                    <span className="h3 grey1 bold">Creating a Design System with Sketch</span>
                    <div className="red default-text mt-1"><a >Certification Number/Link to Certificate</a></div>
                    <div className="mt-2 grey-1 body-text">
                        Lynda.com - Anne Grundhoefer
                    </div>

                </div>
            </div>
        </div>
    
}

export default Certifications;