import React, { Component } from "react";
import raksBG from "./imgs/projects/raksBG2.jpg";
import nyboBG1 from "./imgs/projects/nyboBG1.jpg";
import notebook1 from './imgs/projects/notebook1.png'
import "./Project.css";
import {NavLink } from "react-router-dom";


export default class Project extends Component {
  render() {
    const projects = [
      {
        name : 'RAKSGROUP',
        tagline : 'Static website',
        imgSrc : raksBG,
        id:1,
      },
      {
        name : 'NYBO',
        id:2,
        tagline : 'Connect with your neighbourhood',
        imgSrc : nyboBG1
        // link : 'https://play.google.com/store/apps/details?id=in.nybo.www',
      },
      {
        name : 'NOTEBOOK',
        id:3,
        tagline : 'Store your thoughts here',
        imgSrc : notebook1
      }
    ];

    return (
      <div className="projects" >
        <p className="heading" >
          Here's some of my work
        </p>
        <div className='projectWrap' >
          {
            projects.map((project)=>{
              return(
                <div className='project' id = {'project' + project.id} >
                  <div className = 'projectBGShade' >
                    <div className = 'tagline' >{project.tagline}</div>
                    <div className='projectName' >{project.name}</div>
                    <NavLink to={"/"+project.name} exact className="viewButton" >VIEW PROJECT</NavLink>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}
