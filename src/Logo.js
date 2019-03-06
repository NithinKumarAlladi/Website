import React, { Component } from "react";

export default class Logo extends Component {
    render() {
        const customLogo = {
            borderColor: this.props.color,
            color: this.props.color,
            fontSize:this.props.size,
        }
        return (
            <div className="logoDiv" >
                <span className="logo" style={customLogo}>
                    Nithin Kumar
                </span>
            </div>
        )
    }
}
