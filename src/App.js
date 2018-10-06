import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Link } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Budget from './components/Budget'
import Profile from './components/Profile'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

          <Route exact path="/" component={Home}/>
          <Route path="/budget" component={Budget}/>
          <Route path="/profile" component={Profile}/>
          <p></p>
        </div>
      </Router>

      
    );
  }
}

export default App;
