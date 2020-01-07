import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './Home.js';
import End from "./End.js";
import RAKSGroup from './RAKSGroup.js';
import Nybo from './Nybo.js';
import Notebook from './Notebook.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Route exact path='/' component={Home} />
            <Route exact path='/RAKSGROUP' component={RAKSGroup} />
            <Route exact path='/NYBO' component={Nybo} />
            <Route exact path='/NOTEBOOK' component={Notebook} />
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