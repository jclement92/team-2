import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Navbar extends Component {
  render() {
    return (
      
      
      <div>


        
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <img src="https://catalystmiami.org/wp-content/themes/catalyst/images/logo.png" alt=""></img>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">

              <li class="nav-item active">
                <Link class="font-weight-light nav-link text-uppercase" to="/home">Home</Link>
              </li>

              <li class="nav-item">
                <Link class="font-weight-light nav-link text-uppercase" to="/Appointment">Appointments</Link>
              </li>

              <li class="nav-item">
                <Link class="font-weight-light nav-link text-uppercase" to="/Messages">Messages</Link>
              </li>

              <li class="nav-item">
                <Link class="font-weight-light nav-link text-uppercase" to="/Profile">Profile</Link>
              </li>

      <div class="d-flex bd-highlight mb-3">
      <a href="https://instagram.com/CatalystMiami" class="ml-auto p-2 bd-highlight" target="_blank"><img src="https://catalystmiami.org/wp-content/themes/catalyst/images/icon-instagram.gif" alt="Instagram"/></a>
      
      <a href="http://www.facebook.com/CatalystMiami" class="ml-auto p-2 bd-highlight" target="_blank"><img src="https://catalystmiami.org/wp-content/themes/catalyst/images/icon-facebook.gif" alt="Facebook"/></a>

      <a href="http://twitter.com/catalystmiami" class="ml-auto p-2 bd-highlight" target="_blank"><img src="https://catalystmiami.org/wp-content/themes/catalyst/images/icon-twitter.gif" alt="Twitter"/></a>
      </div>
            </ul>
          </div>
        </nav>
      </div>

      
    );
  }
}

export default Navbar;