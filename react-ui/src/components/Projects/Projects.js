import React, { useState, useEffect }from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

import "./Projects.css";

function Projects(props) {
    
    let [viewAll, setViewAll] = useState();
    useEffect(()=>{
        setViewAll(false);
    },[])
    let projectData = [
        {
            "projectName" : "Guest Tracker App",
            "tags" : ['React Js', "Firebase"],
            "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque malesuada sed malesuada viverra facilisis. Vestibulum mattis mi fames quisque. Felis maecenas ultricies eu sagittis ornare diam felis lacus. Feugiat porta risus mus at tellus faucibus est. Pretium vel, risus sit eget.",
            "github" : '',
            "url" : ''
        },
        {
            "projectName" : "Guest Tracker App",
            "tags" : ['React Js', "Firebase"],
            "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque malesuada sed malesuada viverra facilisis. Vestibulum mattis mi fames quisque. Felis maecenas ultricies eu sagittis ornare diam felis lacus. Feugiat porta risus mus at tellus faucibus est. Pretium vel, risus sit eget.",
            "github" : '',
            "url" : ''
        },
        {
            "projectName" : "Guest Tracker App",
            "tags" : ['React Js', "Firebase"],
            "description" : " Vestibulum mattis mi fames quisque. Felis maecenas ultricies eu sagittis ornare diam felis lacus. Feugiat porta risus mus at tellus faucibus est. Pretium vel, risus sit eget.",
            "github" : '',
            "url" : ''
        },
        {
            "projectName" : "Guest Tracker App",
            "tags" : ['React Js', "Firebase"],
            "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque malesuada sed malesuada viverra facilisis. Vestibulum mattis mi fames quisque. Felis maecenas ultricies eu sagittis ornare diam felis lacus. Feugiat porta risus mus at tellus faucibus est. Pretium vel, risus sit eget.",
            "github" : '',
            "url" : ''
        },
        {
            "projectName" : "Guest Tracker App",
            "tags" : ['React Js', "Firebase"],
            "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque malesuada sed malesuada viverra facilisis. Vestibulum mattis mi fames quisque. Felis maecenas ultricies eu sagittis ornare diam felis lacus. Feugiat porta risus mus at tellus faucibus est. Pretium vel, risus sit eget.",
            "github" : '',
            "url" : ''
        },
        {
            "projectName" : "Guest Tracker App",
            "tags" : ['React Js', "Firebase"],
            "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque malesuada sed malesuada viverra facilisis. Vestibulum mattis mi fames quisque. Felis maecenas ultricies eu sagittis ornare diam felis lacus. Feugiat porta risus mus at tellus faucibus est. Pretium vel, risus sit eget.",
            "github" : '',
            "url" : ''
        }
    ]


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
              projectData && projectData.map((ele,index) => {
                  return (
                      <ProjectCard data={ele}/>
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
