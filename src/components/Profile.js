import React, { Component } from 'react';

const styles = {
  width: "auto",
  marginLeft: "15px",
  padding:    "0px",
  borderBottom: "none"
}

class Profile extends Component {
  render() {
    return (
      <form>
        <div style={styles}>
        <fieldset>
        <legend>Profile Page!</legend>

<div class="form-group">
  <label for="firstname">First Name</label>
  <input type="text" class="form-control" id="firstname" aria-describedby="first" placeholder="First name" />
</div>

<div class="form-group">
  <label for="lastname">Last Name</label>
  <input type="text" class="form-control" id="lastname" aria-describedby="last" placeholder="Last name" />
</div>

<div class="form-group">
  <label for="email">Email</label>
  <input type="text" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" />
</div>

<div class="form-group">
  <label for="address">Address</label>
  <input type="text" class="form-control" id="address" aria-describedby="location" placeholder="Address" />
</div>

<div class="form-group">
  <label for="city">City</label>
  <input type="text" class="form-control" id="city" aria-describedby="citydata" placeholder="City" />
</div>

<div class="form-group">
  <label for="state">State</label>
  <input type="text" class="form-control" id="state" aria-describedby="statedata" placeholder="State" />
</div>

<div class="form-group">
  <label for="zip">Zip code</label>
  <input type="number" class="form-control" id="zip" aria-describedby="zipdata" placeholder="Zip code" />
</div>

<div class="form-group">
  <label for="phone">Phone number</label>
  <input type="text" class="form-control" id="phone" aria-describedby="phonedata" placeholder="Phone" />
</div>

<div class="form-group">
  <label for="income">Income</label>
  <input type="number" step="0.01" min="0" class="form-control" id="income" aria-describedby="incomedata" placeholder="Income" />
</div>

<div class="form-group">
  <label for="education">Education</label>
  <input type="text" class="form-control" id="education" aria-describedby="educationdata" placeholder="Education" />
</div>

<div class="form-group">
  <label for="children">Children</label>
  <input type="number" class="form-control" id="children" aria-describedby="childrendata" placeholder="Children" />
</div>

<button type="submit" class="btn btn-primary">Submit</button>
        </fieldset>
          
        </div>
      </form>
    );
  }
}

export default Profile;

