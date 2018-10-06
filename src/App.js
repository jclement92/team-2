import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Link } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Profile from './components/Profile'
import Login from './components/Login'
import Appointment from './components/Appointment'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

          <Route exact path="/" component={Login}/>
          <Route path="/home" component={Home}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/Appointment" component={Appointment}/>
          <p></p>
        </div>
      </Router>

      
    );
  }
}

export default App;
