import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div>
          <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
            </li>
            </ul>
          </nav>
      </div>
    );
  }
}

export default Navbar;