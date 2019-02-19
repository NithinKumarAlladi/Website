import React, { Component } from "react";
import Project from "./Project.js";
import tb from "./imgs/tb.jpg";
import sd from "./imgs/sdp1.jpg";
import shortMe from "./imgs/shortMe.jpg";
import internship from "./imgs/projects/internship.png";
import aboutImg from "./imgs/about.png";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="intro" >
          <div className="imgDiv" >
            <img className="myImg" src={shortMe} />
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
          <p className="currP" >
            <span style={{ fontSize: "1.5em", }} >Currently Working </span>
            as Salesforce developer at NTT DATA Global Delivery Services, Hyderabad, India.
            <br />  Designated as Software Developer Senior Associate. Since September,2018.</p>
          <a title="Click to view certificate" href="https://trailhead.salesforce.com/credentials/certification-detail-print?searchString=0034A00002zy5IhQAI" target="_blank" >
            <img className="sdImg" src={sd} />
          </a>
          <a title="Click to navigate to my trailhead account" href="https://trailhead.salesforce.com/en/me/00550000007iYEbAAM" target="_blank" >
            <img className="tbImg" src={tb} />
          </a>
        </div>
      </div>

      //   <div>
      //     <p
      //       style={{
      //         margin: 0,
      //         paddingTop: 30,
      //         fontSize: 30,
      //         fontFamily: "amaranth-extended-bold ,sans-serif",
      //         fontWeight: 100,
      //         color: "gray"
      //       }}
      //     >
      //       Internship
      //     </p>
      //     <img style={{ height: "33vh" }} src={internship} />
      //   </div>
      //   <Project />
      // </div>
    );
  }
}
