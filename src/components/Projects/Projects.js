import React, { useState, useEffect }from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

import "./Projects.css";

function Projects(props) {
    
    let [viewAll, setViewAll] = useState();
    useEffect(()=>{
        setViewAll(false);
    },[])
    
    function viewAllHandler(){
        if(viewAll){
            setViewAll(false);
        }else{
            setViewAll(true);
        }
       
    }

  return (
    <div
      className={
        "show-on-scroll col-md-7 page-1 text-left section projects " +
        props.class
      }
    >
      <div className="section-title grey4 h2 bold">Recent Projects</div>
      
      <div className={ `subsection projectsectionbody ${viewAll ? 'showall' : 'showsome'}`}>
          {
              props.projects && props.projects.map((ele,index) => {
                  return (
                      <ProjectCard key={index} data={ele}/>
                  )
              })
          }
      </div>
      <div className="default-text red scroll-text thin" onClick={viewAllHandler}>
          {
              viewAll ? 'Collapse Section' : 'View All Projects'
          }
        </div>

    </div>
  );
}

export default Projects;
