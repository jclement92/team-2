import React, { Component } from 'react';
import SpanishProfile from './SpanishProfile'
import EnglishProfile from './EnglishProfile'
const axios = require('axios');


const styles = {
  width: "50%",
  marginLeft: "15px",
  padding:    "0px",
  borderBottom: "none",
  margin: "auto"
}
const styles2 = {
  width: "40%"
}
const styles3 = {
  display: "flex",
  justifyContent:"center"
}


const floatingowl = {
  width: "250px",
  height: "325px",
  float: "left"
}

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spanish: false,
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

spanishTrue = () =>{
  this.setState({
    spanish: true
  })
}


  render() {
    if(this.state.spanish === true){
      return(
        <SpanishProfile />
      )
    } else {
      return (
        <div>
          <button type="button" class="btn btn-link" onClick={this.spanishTrue}>Spanish</button>
          <EnglishProfile />
        </div>
      );
    }
  }
}

export default Profile;
