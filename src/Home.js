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
                    <p style={{ margin: 0, }}>hello this is a test text</p>
                </div>

            </div>
        )
    }
}