import React, { Component } from "react";
import internship from "./imgs/projects/internship.png";
import nb from "./imgs/projects/nb.png";
import tr from "./imgs/projects/tr.png";
import ttt from "./imgs/projects/ttt.png";
import c4 from "./imgs/projects/c4.png";

export default class Project extends Component {
  render() {
    return (
      <div>
        <p
          style={{
            margin: 0,
            paddingTop: 30,
            fontSize: 30,
            fontFamily: "amaranth-extended-bold ,sans-serif",
            fontWeight: 100,
            color: "gray"
          }}
        >
          Projects I worked on
        </p>
        <div>
          <img style={{ height: "33vh", float: "left" }} src={nb} />
          <img style={{ height: "33vh", float: "right" }} src={tr} />
          <img style={{ height: "33vh", float: "left" }} src={c4} />
          <img style={{ height: "33vh", float: "right" }} src={ttt} />
        </div>
      </div>
    );
  }
}
