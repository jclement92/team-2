import React, { Component } from 'react';
import Chart from './Chart';
import Chart2 from './Chart2';

const styles = {

  background: "#FFF2E0"
}

const styles2 = {

  background: "#FFFAF4"
}

const centerMe = {

  align: "center"
}

class Home extends Component {


  
  render() {
    
    return (

      <div style={styles}>
      

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
             <div style={styles2}>
              <Chart />
             </div>
            </div>
          </div>
          
          <div style={styles}>
          <div align="center">
          <button type="button"  bsSize="Large" class="btn btn-primary btn-sm">Weekly Update</button>
          <button type="button" bsSize="Large" class="btn btn-secondary btn-sm">Update Goal</button>
          </div>
          </div>


          <div id="Budget">
            <p style = {centerMe}>Budget</p>
            <div className="container">              
             <div style={styles2}>
              <Chart2/>
             </div>
            </div>
          </div>

          <div style={styles}>
          <div align="center">
          <button type="button"  bsSize="Large" class="btn btn-primary btn-sm">Weekly Update</button>
          <button type="button" bsSize="Large" class="btn btn-secondary btn-sm">Update Goal</button>
          </div>
          </div>



          <div id="Credit">
            Credit
            <div className="container">              
             <div style={styles2}>
              <Chart />
             </div>
            </div>
          </div>
          
          <div style={styles}>
          <div align="center">
          <button type="button"  bsSize="Large" class="btn btn-primary btn-sm">Weekly Update</button>
          <button type="button" bsSize="Large" class="btn btn-secondary btn-sm">Update Goal</button>
          </div>
          </div>

          <div id="CivilAction">
            Civil Action
            <div className="container">              
             <div style={styles2}>
              <Chart />
             </div>
            </div>
          </div>
          
          <div style={styles}>
          <div align="center">
          <button type="button"  bsSize="Large" class="btn btn-primary btn-sm">Weekly Update</button>
          <button type="button" bsSize="Large" class="btn btn-secondary btn-sm">Update Goal</button>
          </div>
          </div>
          </div>
 
      
    );
  }
}

export default Home;