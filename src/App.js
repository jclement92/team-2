import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Link } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Profile from './components/Profile'
import Appointment from './components/Appointment'
import Messages from './components/Messages'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

          <Route exact path="/" component={Home}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/Appointment" component={Appointment}/>
          <Route path="/Messages" component={Messages}/>
          <p></p>
        </div>
      </Router>

      
    );
  }
}

export default App;
