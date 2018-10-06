import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
          <p>Hello from Home Page</p>

          <nav aria-label="Page navigation example">
            <ul class="pagination">
            
              <li class="page-item"><a class="page-link" href="#ChildSavings">Child Savings</a></li>
              <li class="page-item"><a class="page-link" href="#Budget">Budget</a></li>
              <li class="page-item"><a class="page-link" href="#Credit">Credit</a></li>
              <li class="page-item"><a class="page-link" href="#CivilAction">Civil Action</a></li>
            </ul>
          </nav>


          <div id="ChildSavings">
            Child Savings
            <div className="container">
              <path d="M 10 10 L 20 20 z"/>
            </div>
          </div>
          
          <div id="Budget">Budget</div>
          <div id="Credit">Credit</div>
          <div id="CivilAction">Civil Action</div>


      </div>
    );
  }
}

export default Home;