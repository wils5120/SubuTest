import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.scss']
})
export class StaticComponent implements OnInit {

  chart = [];

  constructor() { }

  ngOnInit(): void {

    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ['', '12 May', '13 May', '14 May', '15 May', '16 May', '17 May', '18 May'],
        datasets: [
          {
            lineTension:0,
            data: [12, 8, 5, 13, 16, 10, 10, 16, 20, 18, 19, 18, 15, 17, 18],
            borderColor: '#007bff',
            pointBackgroundColor: 'white',
            backgroundColor: '#007bff',
            pointBackground: 'white',
            pointRadius: 5,
            borderWidth: 2,
            fill: false,
          },
        ]
      },
      options: {
        responsive: true,
        legend: {
          display: false
        },
        lineaTension:0,
        hover: {
          mode: 'nearest',
          intersect: true,
          gridLines: {
            color: 'blue'
          },
        },
        scales: {
          xAxes: [{
            display: true,
            
          }],
          yAxes: [{
            display: true,
            stacked: true,
            ticks: {
              beginAtZero: true,
              stepSize: 10,
              max: 40
            },
            tooltips: {
              mode: 'dataset'
            },
          }]
        }
      }
    })
  }

}
