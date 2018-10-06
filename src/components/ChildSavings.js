import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
const axios = require('axios');

class ChildSavings extends Component{
    constructor(props){
        super(props);
        this.state = {
          data: [],
          chartData:{
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets:[
                {
                  label: 'Progress',
                  data:[],
                  background: ['rgba(255, 99, 132, 0.6)']
                }
            ]
          }
        }
        this.updateWeek = this.updateWeek.bind(this);
    }

    updateData = (evt) =>{
      this.setState({
        data: [evt.target.value]
      })
    }

    // refreshPage = () => {
    //   axios.get('http://127.0.0.1:5000/user/budget')
    //     .then(function (res) {
    //       // handle success
    //       console.log(res.data);
    //       this.setState({
    //         chartData:{
    //           datasets:[
    //             {
    //               data: res.data.data
    //             }
    //           ]
    //         }
    //       });
    //     }.bind(this));
    // }

    updateWeek = (evt) => {
      evt.preventDefault();
      console.log(`${this.state.data}`)
      var data = {data:`[${this.state.data}]`}
      // var data = {data:'[30]'}
      axios.post('http://127.0.0.1:5000/user/savings', data)
      alert('Refresh Page');
    }

    componentDidMount(){
      axios.get('http://127.0.0.1:5000/user/savings')
        .then(function (res) {
          // handle success
          console.log(res.data);
          this.setState({
            chartData:{
              datasets:[
                {
                  data: res.data.data
                }
              ]
            }

          });
        }.bind(this));
      }

    render(){
        return(
            <div className="chart">
                <Line
                    data={this.state.chartData}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            yAxes:[
                                {
                                    display:true,
                                    ticks:{
                                        beginAtZero: true,
                                        steps:5,
                                        stepValue:5,
                                        max:100
                                    }
                                }
                            ]
                        }
                    }}
                />

                <div align="center">
                  <form onSubmit={this.updateWeek}>
                    <div class="form-group">
                      <label htmlFor="weeklyUpdate">Weekly Update</label>
                      <input type="number" class="form-control" id="weeklyUpdate" aria-describedby="emailHelp" placeholder="Number" value={this.state.data} onChange={this.updateData}/>
                      <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                    </div>
                  </form>

                  {/* <button type="button" className="btn btn-primary btn-sm" onClick={this.updateWeek} >Weekly Update</button> */}
                  <button type="button" className="btn btn-secondary btn-sm">Update Goal</button>
                </div>

            </div>
        )
    }
}

export default ChildSavings;
