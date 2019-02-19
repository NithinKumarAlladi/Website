import React, { Component } from "react";
import internship from "./imgs/projects/internship.png";
import nb from "./imgs/projects/nb.png";
import tr from "./imgs/projects/tr.png";
import ttt from "./imgs/projects/ttt.png";
import c4 from "./imgs/projects/c4.png";

export default class Project extends Component {
  render() {
    return (
      <div className="projects" >
        <p className="heading" >
          Some of my work
        </p>
        <section className="workSections" >
          <img className="workImgs" src={nb} />
          <p className="discription" >A complete Web application developed in ReactJS (^16.3.2) which could creat a new Note.
             we can view,edit and also delete the previous notes. All your notes will be stored in the web browser.
             Redux(^4.0.0) is used to magae the state of the application. It restores the previous notes from the browser and updates them.
          </p>
          <a className="viewCode" target="_blank"  href="https://github.com/NithinKumarAlladi/noted.git" >VIEW CODE</a>
        </section>
        <div>
          {/* 
          <section>
            <img
              style={{ height: "33vh", minHeight: "200px", float: "right" }}
              src={tr}
            />
          </section>
          <section>
            <img
              style={{ height: "33vh", minHeight: "200px", float: "left" }}
              src={c4}
            />
          </section>
          <section>
            <img
              style={{ height: "33vh", minHeight: "200px", float: "right" }}
              src={ttt}
            />
          </section> */}
        </div>
      </div>
    );
  }
}
