import React, { Component } from 'react';
{/* import { grey } from 'ansi-colors'; */}

const styles = {
  width: "50%",
  marginLeft: "15px",
  padding:    "0px",
  borderBottom: "none",
}
const styles2 = {
  width: "40%"
}



{/* No fieldset border... */}
{/*
  const brdr = {
  marginLeft: "15px",
  border: "1px solid grey"
} 
*/}

class Profile extends Component {
  render() {
    return (
      <form>
        <div style={styles} >
        {/*<fieldset>*/}
        <h4>Profile</h4> {/*<legend>*/}

        <div class="container">
          <div class="row">
               <div class="col-sm">
               </div>
          </div>

        <div class="row">
               <div class="col-sm">
               
        <div class="container">
          <div class="row">
               <div class="col-sm">
                  <div class="form-group">
                    <label for="firstname">First Name</label>
                    <input type="text" class="form-control" id="firstname" aria-describedby="first" placeholder="First name" />
                  </div>
                </div>
                <div class="col-sm">
                  <div class="form-group">
                    <label for="middlename">Middle</label>
                    <input type="text" class="form-control" id="middlename" aria-describedby="last" placeholder="Middle" />
                  </div>
                </div>
                <div class="col-sm">
                  <div class="form-group">
                    <label for="lastname">Last Name</label>
                    <input type="text" class="form-control" id="lastname" aria-describedby="last" placeholder="Last name" />
                  </div>
                </div>
              </div>
            
          <div class="form-group">
            <label for="email">Email</label>
            <input type="text" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" />
          </div>

          <div class="form-group">
            <label for="address">Address</label>
            <input type="text" class="form-control" id="address" aria-describedby="location" placeholder="Address" />
          </div>

          <div class="row">
               <div class="col-sm">
                  <div class="form-group">
                    <label for="city">City</label>
                    <input type="text" class="form-control" id="city" aria-describedby="city" placeholder="City" />
                  </div>
                </div>
                <div class="col-sm">
                  <div class="form-group">
                    <label for="state">State</label>
                    <input type="text" class="form-control" id="state" aria-describedby="state" placeholder="State" />
                  </div>
                </div>
                <div class="col-sm">
                  <div class="form-group">
                    <label for="zip">Zip Code</label>
                    <input type="text" class="form-control" id="zip" aria-describedby="zipcode" placeholder="Zip Code" />
                  </div>
                </div>
              </div>

          <div class="form-group" style={styles2}>
            <label for="phone">Phone number</label>
            <input type="text" class="form-control" id="phone" aria-describedby="phonedata" placeholder="Phone" />
          </div>

          <div class="row">
               <div class="col-sm">
                  <div class="form-group">
                    <label for="Income">Income</label>
                    <input type="text" class="form-control" id="income" aria-describedby="income" placeholder="Income" />
                  </div>
                </div>

                <div class="col-sm">
                  <div class="form-group">
                    <label for="Region">Region</label>
                    <input type="text" class="form-control" id="region" aria-describedby="region" placeholder="Region" />
                  </div>
                </div>
              </div>

          <div class="row">
               <div class="col-sm">
                  <div class="form-group">
                    <label for="Education">Education</label>
                    <input type="text" class="form-control" id="education" aria-describedby="education" placeholder="Education" />
                  </div>
                </div>

                <div class="col-sm">
                  <div class="form-group">
                    <label for="NumberOfChildren">Number of Children</label>
                    <input type="text" class="form-control" id="numOfChildren" aria-describedby="number of children" placeholder="Number of Children" />
                  </div>
                </div>
              </div>
              </div>
          </div>

          <div class="row">
               <div class="col-sm">
               </div>
          </div>
</div>
          <button type="submit" class="btn btn-primary">Submit</button>
          {/*</fieldset>*/}
            
          </div>
        </div>
      </form>
    );
  }
}

export default Profile;

