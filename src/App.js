import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import './App.css';
import Home from './Home.js';
import End from "./End.js";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <nav className="nav" id="nav">
            <NavLink to="/" exact activeClassName="activeLink" className="link" >HOME</NavLink>
            <NavLink to="/about" activeClassName="activeLink" className="link" >ABOUT US</NavLink>
          </nav> */}
          <div>
            <Route exact path='/' component={Home} />
            <Route exact path='/RAKSGROUP' component={Home} />
            <Route exact path='/NYBO' component={Home} />
            <Route exact path='/NOTEBOOK' component={Home} />
          </div>
          <div>
            <End />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;