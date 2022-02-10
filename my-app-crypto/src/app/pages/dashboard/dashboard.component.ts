import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      { fill: false,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: [4651134,4463134,4321134,4351134,4481134]

      }
      ],
      labels: ["Sáb","Dom","Lun","Mar","Hoy"]
    };

    public lineChartOptions2: ChartConfiguration['options'] = {
      elements: {
        line: {
          tension: 0
        },
      },
      plugins: {
        legend: { display: false },
      }
    };

    public lineChartType2: ChartType = 'line';


    public lineChartData2: ChartConfiguration['data'] = {
      datasets: [
        { fill: false,
          backgroundColor: "rgba(0,0,255,1.0)",
          borderColor: "rgba(0,0,255,0.1)",
          data: [684310,697856,693589,680345,704896]

        }
        ],
        labels: ["Sáb","Dom","Lun","Mar","Hoy"]
      };

      public lineChartOptions: ChartConfiguration['options'] = {

        elements: {
          line: {
            tension: 0
          },
        },
        plugins: {
          legend: { display: false },
        }

      };

      public lineChartType: ChartType = 'line';




  constructor() { }

  ngOnInit(): void {
  }

}
