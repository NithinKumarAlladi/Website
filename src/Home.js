import React, { Component } from "react";
import Project from "./Project.js";
import shortMe from "./imgs/shortMe.jpg";
import "./Project.css";
import End from "./End.js";
import "./End.css";
import Logo from "./Logo";
import "./Logo.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="intro" >
          <div className="imgDiv" >
            <img className="myImg" alt="Sorry for the broken img" src={shortMe} />
          </div>
          <p className="name" >NITHIN KUMAR ALLADI</p>
          <div className="vertiLine" ></div>
          <p className="prof" >SOFTWARE DEVELOPER</p>
          <p className="address" >I'm currently based in Hyderabad, India.</p>
        </div>
        <div className="aboutDiv" >
          <p className="aboutP" > I'm a self taught software developer able to produce robust and readable code.<br /><br /> As a software or web developer,
            I enjoy the power it gives me to do anything with code. I also enjoy build something from scratch.<br /> <br /> <br />
            Out of this enjoyment, in building anything you want, I have learned and developed in few languages such as
            HTML, CSS, JavaScript,ReactJs and Angular which are web developing languages,
            frameworks or libraries and React Native and Ionic which are mobile application developing frameworks.  </p>
        </div>
        <div className="currDiv" >
          <div className="back" >
            <p className="currP" >
              <span className="currTitle" >Currently Working </span>
              as Salesforce developer <br /> at NTT DATA Global Delivery Services, Hyderabad, India.
            <br /> <br />  Designated as Software Developer Senior Associate. Since September,2018.</p>
            <a className="viewCert sd" title="Click to view certificate" href="https://trailhead.salesforce.com/credentials/certification-detail-print?searchString=0034A00002zy5IhQAI" target="_blank" rel="noopener noreferrer">
              SPD l Certificate</a>
            <a className="viewCert tb" title="Click to navigate to my trailhead account" href="https://trailhead.salesforce.com/en/me/00550000007iYEbAAM" target="_blank" rel="noopener noreferrer" >
              TrailBlazer</a>
          </div>
        </div>
        <div className="projects" >
          <Project />
        </div>
        <div>
          <End />
        </div>
        <div>
          <Logo className="logo" color="red" />
        </div>
      </div>
    );
  }
}
