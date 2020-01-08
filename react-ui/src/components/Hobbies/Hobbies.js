import React from 'react'
import './Hobbies.css'

function Hobbies(props) {

    return <div className={"show-on-scroll col-md-7 page-1 text-left section hobbies-interests " + props.class}>
        <div className="section-title grey4 h2 bold">Hobbies & Interests</div>
        <div className="subsection">

        {
            props.dbData.hobbies.map((ele)=>{
                return <div className="subsection-data">
                            <span className="h3 grey1 bold">{ele.name}</span>
                            <div className="mt-2 grey-1 body-text">
                                {ele.summary}
                            </div>
                        </div>
                
            })
        }
        </div>
    </div >

}

export default Hobbies;