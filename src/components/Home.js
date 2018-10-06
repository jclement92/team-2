import React, { Component } from 'react';
import Chart from './Chart';

class Home extends Component {


  
  render() {
    
    return (
      <div>

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

              
              
            </div>
          </div>

          <div>
          <Chart />
          </div>
          <div align="center">
          <button type="button"  bsSize="Large" class="btn btn-primary btn-sm">Weekly Update</button>
          <button type="button" bsSize="Large" class="btn btn-secondary btn-sm">Update Goal</button>
          </div>

          
          <div id="Budget">Budget</div>
          <div id="Credit">Credit</div>
          <div id="CivilAction">Civil Action</div>


      </div>
    );
  }
}

export default Home;