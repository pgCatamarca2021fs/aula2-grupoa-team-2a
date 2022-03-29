import { Component, OnInit} from '@angular/core';
import { Chart } from 'chart.js';
import {DataChartService} from '../../services/data-chart.service'
import { ApiService } from 'src/app/services/api.service';
import { SaldosTodos } from 'src/app/models';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit{

  public datachartbtc : any = [];
  public datechartbtc: any = [];
  public chartbtc : any = [];  

  public datacharteth : any = [];
  public datecharteth: any = [];
  public charteth : any = [];
  saldis : any = [];
  saldos: any = [];
  public dolaroficial: any;
  
  constructor ( private dataChartBtc: DataChartService,
                private dataChartEth: DataChartService,
                private cotizacionDolar: DataChartService,
                private consultarSaldosTodos :DataChartService,
                private Apiservice: ApiService) {}


   ngOnInit(): void {

    this.consultarSaldosTodos.consultarSaldosTodos(5)
    .subscribe(resp => {
      this.saldos = resp;
      console.log(this.saldos);

    this.Apiservice.consultarSaldo(5, 'ARS').subscribe(respuestaSaldo => { this.saldis = respuestaSaldo;});


    this.cotizacionDolar.cotizacionDolar()
    .subscribe(resp => {
      this.dolaroficial = resp.totalAsk


    this.dataChartBtc.getDataChartBtc()
      .subscribe ( resp => {
      this.datechartbtc = resp.map( fecha =>new Date(fecha[0]).toLocaleDateString("es-ES"))
      this.datachartbtc = resp.map(cotizacion => cotizacion[1]*this.dolaroficial)

    this.dataChartEth.getDataChartEth()
        .subscribe ( resp => {
        this.datecharteth = resp.map( fecha =>new Date(fecha[0]).toLocaleDateString("es-ES"))
        this.datacharteth = resp.map(cotizacion => cotizacion[1]*this.dolaroficial)
        
            
         this.chartbtc = new Chart('canvas-btc', {
            type: 'line',
            data: {
              labels: this.datechartbtc,
              datasets: [
                 { fill: false,
                 backgroundColor: "rgba(0,0,255,1.0)",
                 borderColor: "rgba(0,0,255,0.1)",
                 data: this.datachartbtc,
                 }
                ],
              },
               options: {
                   elements: {
                     line: {
                     tension: 0
                     },
                   },
                   plugins: {
                     legend: { display: false },
                   }
                 }   
          })

         this.charteth = new Chart('canvas-eth', {
              type: 'line',
              data: {
                labels: this.datecharteth,
                datasets: [
                  { fill: false,
                  backgroundColor: "rgba(0,0,255,1.0)",
                  borderColor: "rgba(0,0,255,0.1)",
                  data: this.datacharteth,
                  }
                  ],
                },
                options: {
                  elements: {
                    line: {
                    tension: 0
                    },
                  },
                  plugins: {
                    legend: { display: false },
                  }
                }
              })
        }
      )}
    )}         
    )}
    )}}
