import { Component, OnInit, ViewChild} from '@angular/core';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-sales',
  templateUrl: './sales.page.html',
  styleUrls: ['./sales.page.scss'],
})
export class SalesPage implements OnInit {

  @ViewChild('lineCanvas') lineCanvas;


  lineChart: any;


  constructor() { }

  ngOnInit() {
    this.ionViewDidLoad()
  }

  ionViewDidLoad() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

    type: 'line',
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July","August","September", "October","November","December"],
        datasets: [
            {
                label: "Data Analysis",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40, 30, 20, 10, 5, 0],
                spanGaps: false,
                animation: true
            }
        ]
    }

});

  }
}
