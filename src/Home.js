import React, { Component } from 'react';
import me from './imgs/me.jpg';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="introDiv">
                    <div style={{marginTop: 100,marginLeft:850, position:"absolute",}}>
                        <img style={{borderWidth:50, borderColor:"white"}} className="img" src={me} />
                    </div>
                    <p className="headPara" style={{fontSize:20, fontStyle:"italic",fontFamily:"permanent-marker, sans-serif",paddingTop: 250, paddingRight:450}}>Hey! I'm</p>
                    <p className="headPara" style={{fontSize:50, fontFamily:  "amaranth-extended-bold, sans-serif", fontWeight:100,paddingRight:450,}}>Nithin kumar Alladi</p>
                    {/* <p>Well, I'll take you through this weird experience knowing me.</p> */}
                </div>
                <div className="currDiv">
                    <p style={{margin:0,paddingTop:30,fontSize:30 ,fontFamily:"amaranth-extended-bold ,sans-serif", fontWeight:100,}}>Current work</p>
                </div>
                <div>
                    <p>
                    <br />This guy knows how to develop web applications as well as mobile applications as he is good at the technologies like JavaScript, Angular, React, React Native and Node.js. 
                    <br />But I advise you to look at his work.
                    <br />He's got 3 months of experience in mobile application development at iCriya digital technologies and developed a module of their product in Ionic. 
                    <br />This guy works as a salesforce developer for NTT DATA global delivery services designated as SOFTWARE DEVELOPMENT SENIOR ASSOCIATE since september, 2018.
                    <br />He got certified as "Salesforce Platform Developer I" by Salesforce.                    
                    
                    </p>
                </div>
            </div>
        )
    }
}