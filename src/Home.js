import React, { Component } from "react";
import Project from "./Project.js";
import me from "./imgs/me.jpg";
import tb from "./imgs/tb.jpg";
import sd from "./imgs/sdp1.jpg";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="introDiv">
          <div
            style={{ marginTop: 100, marginLeft: 850, position: "absolute" }}
          >
            <img
              style={{ borderWidth: 50, borderColor: "white" }}
              className="img"
              src={me}
            />
          </div>
          <p
            className="headPara"
            style={{
              fontSize: 20,
              fontStyle: "italic",
              fontFamily: "permanent-marker, sans-serif",
              paddingTop: 250,
              paddingRight: 450
            }}
          >
            Hey! I'm
          </p>
          <p
            className="headPara"
            style={{
              fontSize: 50,
              fontFamily: "amaranth-extended-bold, sans-serif",
              fontWeight: 100,
              paddingRight: 450
            }}
          >
            Nithin kumar Alladi
          </p>
          {/* <p>Well, I'll take you through this weird experience knowing me.</p> */}
        </div>
        <div className="currDiv">
          <p
            style={{
              margin: 0,
              paddingTop: 30,
              fontSize: 30,
              fontFamily: "amaranth-extended-bold ,sans-serif",
              fontWeight: 100
            }}
          >
            Current work
            <img className="sdIcon" src={sd} />
            <img className="tbIcon" src={tb} />
          </p>
          <p
            style={{
              paddingTop: 20,
              fontFamily: "amaranth-extended-bold ,sans-serif",
              fontWeight: 100,
              fontSize: 20
            }}
          >
            Salesforce Developer at NTT DATA Global Delivery Services designated
            as Software Developer Senior Associate.
          </p>
          <p
            style={{
              paddingTop: 20,
              fontFamily: "amaranth-extended-bold ,sans-serif",
              fontWeight: 100,
              fontSize: 20
            }}
          >
            September,2018 - Present
          </p>
        </div>
        <Project />
      </div>
    );
  }
}
