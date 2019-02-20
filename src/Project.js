import React, { Component } from "react";
import internship from "./imgs/projects/internship.png";
import nb from "./imgs/projects/nb.png";
import ttts from "./imgs/projects/ttts.png";
import ttt from "./imgs/projects/ttt.png";
import c4 from "./imgs/projects/c4.png";
import nbs from "./imgs/projects/nbs.png";
import c4s from "./imgs/projects/c4s.png";

export default class Project extends Component {
  render() {
    const nbc = window.innerWidth < 1200 ? nbs : nb;
    const c4c = window.innerWidth < 1200 ? c4s : c4;
    const tttc = window.innerWidth < 1200 ? ttts : ttt;

    return (
      <div className="projects" >
        <p className="heading" >
          Some of my work
        </p>
        <section className="workSections" >
          <img className="workImgs internship " src={internship} />
          <p className="discription" > Developed a module from the scratch where people can buy and sell new and used products. integrated in mobile application called as NYBO. </p>
        </section>
        <section className="workSections" >
          <img className="workImgs" src={nbc} />
          <p className="discription" >A complete Web application developed in ReactJS (^16.3.2) which could creat a new Note.
             we can view,edit and also delete the previous notes. All your notes will be stored in the web browser.
             Redux(^4.0.0) is used to magae the state of the application. It restores the previous notes from the browser and updates them.
          </p>
          <a className="viewCode" target="_blank"  href="https://github.com/NithinKumarAlladi/noted.git" >VIEW CODE</a>
        </section>
        <section className="workSections" >
          <img className="workImgs" src={c4c} />
          <p className="discription" > Game where two players each drop their respective coloured tiles into a 7*4 matrix where tiles can be droped only from the top.
          When a player connects any 4 of his tiles, either horzontally or vertically or diagonally, he wins.
          </p>
          <a className="viewCode" target="_blank"  href="https://github.com/NithinKumarAlladi/ConnectFour.git" >VIEW CODE</a>
        </section>
        <section className="workSections" >
          <img className="workImgs" src={tttc} />
          <p className="discription" >Game where two players try to connect three of their symbols by placeing them horizontally or vertically or diagonally in a 3*3 matrix.
          who connects first, he wins.
          </p>
          <a className="viewCode" target="_blank"  href="https://github.com/NithinKumarAlladi/TicTacToe.git" >VIEW CODE</a>
        </section>
      </div>
    );
  }
}
