import React, { Component } from "react";


export default class End extends Component {
    render() {
        return (
            <div className="main" >
                <p className="para" >Portfolio looks good? Want to say something? I'm available for that.
                <br /> Also If you have an idea and want me in it I'm available to freelance your work.
                <br /><br />Ping me and lets meet!
                </p>
                <div className="snIcons" >
                    <a href="https://www.instagram.com/nithin_alladi/" target="_blank" rel="noopener noreferrer" ><i className="fa fa-instagram insta icn " aria-hidden="true"></i></a>
                    <a href="https://twitter.com/NithinAlladi" target="_blank" rel="noopener noreferrer" ><i className="fa fa-twitter icn" aria-hidden="true"></i></a>
                    <a href="https://github.com/NithinKumarAlladi" target="_blank" rel="noopener noreferrer" ><i className="fa fa-github icn" aria-hidden="true"></i></a>
                    <a href="https://www.linkedin.com/in/nithinkumar-alladi/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin icn" aria-hidden="true"></i></a>
                    <a href="mailto:nithinkumaralladi.me@gmail.com" ><i className="fa fa-envelope icn" aria-hidden="true"></i></a>
                </div>
                <p className="para" >Developed with love and code!</p>
            </div>
        )
    }
}