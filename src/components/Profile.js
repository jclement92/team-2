import React, { Component } from 'react';
const axios = require('axios');

const styles = {
  width: "auto",
  marginLeft: "15px",
  padding:    "0px",
  borderBottom: "none",
}

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userRegion: '',
      userIncome: '',
      userEducation: '',
      userKids: '',
      userPhoneNum: '',
      userEmail: ''
    };
  }

  updateUserName = (val) => {
    this.setState({
      userName: val.target.value
    });
  }
  updateRegion = (val) => {
    this.setState({
      userRegion: val.target.value
    });
  }
  updateIncome = (val) => {
    this.setState({
      userIncome: val.target.value
    });
  }
  updateEducation = (val) => {
    this.setState({
      userEducation: val.target.value
    });
  }
  updateKids = (val) => {
    this.setState({
      userKids: val.target.value
    });
  }
  updatePhoneNum = (val) => {
    this.setState({
      userPhoneNum: val.target.value
    });
  }
  updateEmail = (val) => {
    this.setState({
      userEmail: val.target.value
    });
  }

  componentDidMount(){
    axios.get('http://127.0.0.1:5000/user')
      .then(function (res) {
        // handle success
        console.log(res);
        this.setState({
          userName: res.data.name,
          userRegion: res.data.region,
          userIncome: res.data.income,
          userEducation: res.data.education,
          userKids: res.data.kids,
          userPhoneNum: res.data.phone,
          userEmail: res.data.email
        });
      }.bind(this));
    }


  render() {
    return (
      <form>
        <div style={styles}>
        <h2>Profile Page!</h2>

        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" className="form-control" id="fullName" placeholder="Full Name" value={this.state.userName} onChange={this.updateUserName}/>
        </div>

        <div className="form-group">
          <label htmlFor="userRegion">Region</label>
          <input type="text" className="form-control" id="userRegion" aria-describedby="region" placeholder="Region" value={this.state.userRegion} onChange={this.updateRegion}/>
        </div>

        <div className="form-group">
          <label htmlFor="income">Income</label>
          <input type="text" className="form-control" id="income" aria-describedby="incomedata" placeholder="Income" value={this.state.userIncome} onChange={this.updateIncome}/>
        </div>

        <div className="form-group">
          <label htmlFor="education">Education</label>
          <input type="text" className="form-control" id="education" aria-describedby="educationdata" placeholder="Education" value={this.state.userEducation} onChange={this.updateEducation}/>
        </div>

        <div className="form-group">
          <label htmlFor="children">Children</label>
          <input type="text" className="form-control" id="children" aria-describedby="childrendata" placeholder="Children" value={this.state.userKids} onChange={this.updateKids}/>
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone number</label>
          <input type="text" className="form-control" id="phone" aria-describedby="phonedata" placeholder="Phone" value={this.state.userPhoneNum} onChange={this.updatePhoneNum}/>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" value={this.state.userEmail} onChange={this.updateEmail}/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>

        </div>
      </form>
    );
  }
}

export default Profile;
