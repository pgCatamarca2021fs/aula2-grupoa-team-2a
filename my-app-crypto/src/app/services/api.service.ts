import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { map } from 'rxjs';
//import { TipoCripto } from '../models/tipoCripto';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 // private tipocripto : TipoCripto   ={symbol:"",price:""};
 // private CriptoUrl = "https://api.binance.com/api/v3/ticker/price"; 

constructor(private http: HttpClient) { }

public get(url:string) {
  
  return this.http.get( url );
  
}

}



