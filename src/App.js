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
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/budget">Budget Page</Link></li>
            <li><Link to="/profile">Profile Page</Link></li>
          </ul>

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
