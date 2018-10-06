import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class Budget extends Component{
    constructor(props){
        super(props);
        this.state = {
          chartData:{
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets:[
                {

                  label: 'Progress',
                  data:[
                      10,
                      20,
                      30,
                      40
                  ],
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                  ]
                }
            ]
          }
        }

    }
    render(){
        return(
            <div className="chart">
                <Bar
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
            </div>
        )
    }
}

export default Budget;
