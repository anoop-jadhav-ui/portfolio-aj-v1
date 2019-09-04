import React from 'react'
import './Contacts.css'

class Contacts extends React.Component {
    render() {
        return <div class="col-md-7 page-1 text-left section">
            <div class="section-title grey4 h2 bold">Contacts</div>
            <div class="subsection">
                
                <div class="subsection-data">
                    <span class="h3 grey1 bold">Email Id</span>
                   <div class="red body-text mt-2"><a href = "mailto: anoopjadhav@gmail.com">anoopjadhav@gmail.com</a></div>
                </div>
                
                <div class="subsection-data">
                    <span class="h3 grey1 bold">Instagram</span>
                   <div class="red body-text mt-2"><a href="https://www.instagram.com/mi_baburao/" target="_blank">mi_baburao</a></div>
                </div>
                <div class="subsection-data">
                    <span class="h3 grey1 bold">Contact Number</span>
                   <div class="body-text mt-2">9028665267</div>
                </div>
               
            </div>
        </div>

    }
}

export default Contacts
