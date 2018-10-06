import React, { Component } from 'react';

const styles = {
    align:       "center",
    paddingLeft: "25px",
    margin:      "0px",
    display:     "block"
}

const buttonX = {
    float:   "none",
    margin:  "0 auto",
    cursor:  "pointer",
    padding: "10px 24px",
    display: "block",
    width:   "50%",
}

const logintext = {
    textAlign: "center"
}

const border = {
    float:  "none",
    margin: "0 auto",
    border: "1px solid grey",
    width:  "50%"
}

const cfg = {
    float:        "none",
    margin:       "0 auto",
    marginTop:    "50px",
    marginBottom: "50px",
    border:       "1px solid grey",
    borderRadius: "50%",
    borderMargin: "auto",
    width:        "200px",
    display:      "block"
}

class Login extends Component {
  render() {
    return (
      <div style={styles}>
          <h2 style={logintext}>Login</h2>
          <div style={border}>
            <img src={ require('./codeforgood.jpg') } alt="Codeforgood" style={cfg} />
            <button style={buttonX}>Sign Up</button>
            <button style={buttonX}>Login</button>
          </div>
      </div>
    );
  }
}

export default Login;

