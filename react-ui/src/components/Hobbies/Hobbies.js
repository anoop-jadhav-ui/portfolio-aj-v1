import React from 'react'
import './Hobbies.css'

function Hobbies(props) {

    return <div className={"show-on-scroll col-md-7 page-1 text-left section hobbies-interests " + props.class}>
        <div className="section-title grey4 h2 bold">Hobbies & Interests</div>
        <div className="subsection">


            <div className="subsection-data">
                <span className="h3 grey1 bold">Drawing</span>
                <div className="mt-2 grey-1 body-text">
                    Since my childhood I was always passionate about drawing. I really enjoyed Art & Crafts classes in my school. I loved drawing Pokemon characters, cars and bikes. Later I was lost in the world of competition but still managed to keep my interest as we had engineering drawing, AutoCAD in the curriculum. Now I have started learning digital drawing. Please check my <a href="https://www.instagram.com/anoop.design/" class="red"  target="_blank">instagram profile</a>  for some of my work. 
                </div>
            </div>

            <div className="subsection-data">
                <span className="h3 grey1 bold">Trekking</span>
                <div className="mt-2 grey-1 body-text">
                I prefer going for small treks to take a break from work and the daily routine. I have completed various treks in the Western ghats/Sahyadri region like Torna, Rajmachi, Sudhagad, Korigad, Kalsubai, Vikat Gad, Mahuli Gad, Visapur, Sihagad, Vasota jungle trek, Tung & Tikona,  Tadiandamol trek and the mighty Katraj to Sihagad night trek.  
                </div>
            </div>





            <div className="subsection-data">
                <span className="h3 grey1 bold">Bike Riding</span>
                <div className="mt-2 grey-1 body-text">
                From the day I have bought the RE classic 350 I have developed this weird interest of going to places without any reason. I love riding my bike. I usually travel Mumbai - Pune on bike. The Most memorable bike trip would be Leh Ladakh - The stunning view, endless empty roads full of twist and turns.
                </div>

            </div>
        </div>
    </div >

}

export default Hobbies;