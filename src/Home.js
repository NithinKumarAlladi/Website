import React, { Component } from 'react';
import dcb from './imgs/darkCoffeeBeans.jpg'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div style={{ position: 'absolute' }}>
                    <img src={dcb} style={{ opacity: 0.7, }} />
                </div>
                <div>
                    <p style={{ margin: 0 }}>Hey there! Want to know something about Nithin kumar Alladi?</p>
                    <p>Well I'll take you through this weird experience of knowing this guy.</p>
                </div>
            </div>
        )
    }
}