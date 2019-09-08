import React from 'react'
import './WorkExperience.css'
import KnowMoreButton from '../../assets/arrow-icon.svg'

class WorkExperience extends React.Component {
    render() {
        return <div className="col-md-7 page-1 text-left section work-experience">
            <div className="section-title grey4 h2 bold">Work Experience</div>
            <div className="subsection">
                <div className="subsection-data">
                    <span className="h3 grey1 bold">Deloitte</span>
                    <div className="label grey3 light mt-1 letterspacing-2 row no-gutters align-items-center">
                            <span className="pr-3">2016-Present</span><span className="dot"></span><span className="pl-3">3 Years</span>
                    </div>
                    <div className="mt-3 grey-1 body-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque malesuada sed malesuada viverra facilisis. Vestibulum mattis mi fames quisque. Felis maecenas ultricies eu sagittis ornare diam felis lacus. Feugiat porta risus mus at tellus faucibus est. Pretium vel, risus sit eget.
                    </div>
                    <a className="know-more-button mt-4"><span className="red pr-2">Know more</span> <img src={KnowMoreButton} alt="know more buton" /></a>
                </div>
                <div className="subsection-data">
                    <span className="h3 grey1 bold">Cognizant</span>
                    <div className="label grey3 light mt-1 letterspacing-2 row no-gutters align-items-center">
                            <span className="pr-3">2014-2016</span><span className="dot"></span><span className="pl-3">2 Years</span>
                    </div>
                    <div className="mt-3 grey-1 body-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque malesuada sed malesuada viverra facilisis. Vestibulum mattis mi fames quisque. Felis maecenas ultricies eu sagittis ornare diam felis lacus. Feugiat porta risus mus at tellus faucibus est. Pretium vel, risus sit eget.
                    </div>
                    <a  className="know-more-button mt-4"><span className="red pr-2">Know more</span> <img src={KnowMoreButton} alt="know more buton" /></a>
                </div>
            </div>
        </div>
    }
}

export default WorkExperience;