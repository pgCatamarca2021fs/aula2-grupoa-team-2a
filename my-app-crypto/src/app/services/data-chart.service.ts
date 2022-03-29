import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReqResResponse, CotizaDolar, SaldosTodos } from '../models';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class DataChartService {

  constructor(private http: HttpClient) { }

  getDataChartBtc() {
    const url = 'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7&interval=daily';
    return this.http.get<ReqResResponse>(url)
      .pipe(
        map(resp => {
          return resp.prices
        })
      )
  }


  getDataChartEth() {
    const url = 'https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=7&interval=daily';
    return this.http.get<ReqResResponse>(url)
      .pipe(
        map(resp => {
          return resp.prices
        })
      )
  }


  cotizacionDolar() {
    const url = 'https://criptoya.com/api/bna';
    return this.http.get<CotizaDolar>(url);

  }


  consultarSaldosTodos(idCuenta: number) {
    const url = 'https://localhost:44336/api/consultarSaldos?idCuenta=';
    return this.http.get<SaldosTodos>(url + idCuenta);
  }


}