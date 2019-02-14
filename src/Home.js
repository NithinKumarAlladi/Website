import React, { Component } from "react";
import Project from "./Project.js";
import me from "./imgs/me.jpg";
import alsoMe from "./imgs/alsoMe.jpg";
import tb from "./imgs/tb.jpg";
import sd from "./imgs/sdp1.jpg";
import shortMe from "./imgs/shortMe.jpg";
import internship from "./imgs/projects/internship.png";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="intro" >
          <div className="imgDiv" >
            <img className="myImg" src={shortMe} />
          </div>
        </div>
      </div>
      // <div>
      //   <div className="introDiv">
      //     <img className="img" src={me} />
      //     <p
      //       className="headPara"
      //       style={{
      //         fontSize: 20,
      //         fontStyle: "italic",
      //         fontFamily: "permanent-marker, sans-serif",
      //         paddingTop: 250,
      //         paddingRight: 450
      //       }}
      //     >
      //       Hey! I'm
      //     </p>
      //     <p
      //       className="headPara"
      //       style={{
      //         fontSize: 50,
      //         fontFamily: "amaranth-extended-bold, sans-serif",
      //         fontWeight: 100,
      //         paddingRight: 450
      //       }}
      //     >
      //       Nithin kumar Alladi
      //     </p>
      //     {/* <p>Well, I'll take you through this weird experience knowing me.</p> */}
      //   </div>
      //   <div className="currDiv">
      //     <p
      //       style={{
      //         margin: 0,
      //         paddingTop: 30,
      //         fontSize: 30,
      //         fontFamily: "amaranth-extended-bold ,sans-serif",
      //         fontWeight: 100
      //       }}
      //     >
      //       Current work
      //       <a
      //         href="https://trailhead.salesforce.com/credentials/certification-detail-print?searchString=0034A00002zy5IhQAI"
      //         target="_blank"
      //       >
      //         <img className="sdIcon" src={sd} />
      //       </a>
      //       <a
      //         href="https://trailhead.salesforce.com/en/me/00550000007iYEbAAM"
      //         target="_blank"
      //       >
      //         <img className="tbIcon" src={tb} />
      //       </a>
      //     </p>
      //     <p
      //       style={{
      //         paddingTop: 20,
      //         fontFamily: "amaranth-extended-bold ,sans-serif",
      //         fontWeight: 100,
      //         fontSize: 20
      //       }}
      //     >
      //       Salesforce Developer at NTT DATA Global Delivery Services designated
      //       as Software Developer Senior Associate.
      //     </p>
      //     <p
      //       style={{
      //         paddingTop: 20,
      //         fontFamily: "amaranth-extended-bold ,sans-serif",
      //         fontWeight: 100,
      //         fontSize: 20
      //       }}
      //     >
      //       September,2018 - Present
      //     </p>
      //   </div>
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
