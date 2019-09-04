import React from 'react'
import './WorkExperience.css'
import KnowMoreButton from '../../assets/arrow-icon.svg'

class WorkExperience extends React.Component {
    render() {
        return <div class="col-md-7 page-1 text-left section">
            <div class="section-title grey4 h2 bold">Work Experience</div>
            <div class="subsection">
                <div class="subsection-data">
                    <span class="h3 grey1 bold">Deloitte</span>
                    <div class="label grey3 light mt-1 letterspacing-2 row no-gutters align-items-center">
                            <span class="pr-3">2016-Present</span><span class="dot"></span><span class="pl-3">3 Years</span>
                    </div>
                    <div class="mt-3 grey-1 body-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque malesuada sed malesuada viverra facilisis. Vestibulum mattis mi fames quisque. Felis maecenas ultricies eu sagittis ornare diam felis lacus. Feugiat porta risus mus at tellus faucibus est. Pretium vel, risus sit eget.
                    </div>
                    <a href="javascript:void(0)" class="know-more-button mt-4"><span class="red pr-2">Know more</span> <img src={KnowMoreButton} alt="know more buton" /></a>
                </div>
                <div class="subsection-data">
                    <span class="h3 grey1 bold">Cognizant</span>
                    <div class="label grey3 light mt-1 letterspacing-2 row no-gutters align-items-center">
                            <span class="pr-3">2014-2016</span><span class="dot"></span><span class="pl-3">2 Years</span>
                    </div>
                    <div class="mt-3 grey-1 body-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque malesuada sed malesuada viverra facilisis. Vestibulum mattis mi fames quisque. Felis maecenas ultricies eu sagittis ornare diam felis lacus. Feugiat porta risus mus at tellus faucibus est. Pretium vel, risus sit eget.
                    </div>
                    <a href="javascript:void(0)" class="know-more-button mt-4"><span class="red pr-2">Know more</span> <img src={KnowMoreButton} alt="know more buton" /></a>
                </div>
            </div>
        </div>
    }
}

export default WorkExperience;