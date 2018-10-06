import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
const axios = require('axios');

class Chart extends Component{
    constructor(props){
        super(props);
        this.state = {
          chartData:{
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets:[
                {
                  label: 'Progress',
                  data:[],
                  background:[
                      'rgba(255, 99, 132, 0.6)',
                      'rgba(255, 99, 132, 0.6)',
                      'rgba(255, 99, 132, 0.6)',
                      'rgba(255, 99, 132, 0.6)'
                  ]
                }
            ]
          }
        }

    }

    // updateWeek = (evt) => {
    //   data:[]
    //   axios.post('http://127.0.0.1:5000/user/budget',{})
    // }

    componentDidMount(){
      axios.get('http://127.0.0.1:5000/user/budget')
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
                                        steps:10,
                                        stepValue:5,
                                        max:100
                                    }
                                }
                            ]
                        }
                    }}
                />

                <div align="center">
                  <button type="button" className="btn btn-primary btn-sm" >Weekly Update</button>
                  <button type="button" className="btn btn-secondary btn-sm">Update Goal</button>
                </div>

            </div>
        )
    }
}

export default Chart;
