import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Navbar extends Component {
  render() {
    return (
      <div>

        
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <h2 class="text-light bg-success" >Catalyst</h2>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">

              <li class="nav-item active">
                <Link class="nav-link" to="/">Home</Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/Appointment">Appointments</Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/Messages">Messages</Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/Profile">Profile</Link>
              </li>



            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;