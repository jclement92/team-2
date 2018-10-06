import React, { Component } from 'react';
import Calendar from "./Calendar.js";
import '../App.css'

class Appointment extends Component {
  render() {
    return (
      <div>
        <h1>CatalystMiami Appointments</h1>
        <Calendar />
      </div>
    );
  }
}

export default Appointment;