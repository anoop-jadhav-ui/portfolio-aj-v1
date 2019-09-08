import React from 'react'
import './Contacts.css'

function Contacts(props){
    
        return <div className={"show-on-scroll col-md-7 page-1 text-left section contacts "+ props.class}>
            <div className="section-title grey4 h2 bold">Contacts</div>
            <div className="subsection">
                
                <div className="subsection-data">
                    <span className="h3 grey1 bold">Email Id</span>
                   <div className="red body-text mt-2"><a href = "mailto: anoopjadhav@gmail.com">anoopjadhav@gmail.com</a></div>
                </div>
                
                <div className="subsection-data">
                    <span className="h3 grey1 bold">Instagram</span>
                   <div className="red body-text mt-2"><a href="https://www.instagram.com/mi_baburao/" target="_blank">mi_baburao</a></div>
                </div>
                <div className="subsection-data">
                    <span className="h3 grey1 bold">Contact Number</span>
                   <div className="body-text mt-2">9028665267</div>
                </div>
               
            </div>
        </div>

    
}

export default Contacts
