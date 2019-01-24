import React, { Component } from 'react';
import dcb from './imgs/darkCoffeeBeans.jpg'

export default class Home extends Component {
    render() {
        return (
            <div>
                {/* <div style={{ position: 'absolute' }}>
                    <img src={dcb} style={{ opacity: 0.7, }} />
                </div> */}
                <div className="backDiv">
                    <p className="headPara">Hello! Want to know something about Nithin kumar Alladi?
                    <br />Well I'll take you through this weird experience of knowing this guy.
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