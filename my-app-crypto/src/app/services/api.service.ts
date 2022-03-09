import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//import { map } from 'rxjs';
import { TipoCripto } from '../models/tipoCripto';

@Injectable({
  providedIn: 'root'
})


export class ApiService {
 url:string='https://api.binance.com/api/v3/ticker/price';


constructor(private http: HttpClient) { }
public  obtenerCripto():Observable<TipoCripto>{
  return this.http.get<TipoCripto>(this.url);
  }

}



