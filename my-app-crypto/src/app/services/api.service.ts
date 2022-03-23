import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//import { map } from 'rxjs';
import { TipoCripto } from '../models/tipoCripto';
import { Cripto } from '../models/cripto';
import { Saldo } from '../models/saldo';
import { Movimientos } from '../models/moviemientos';
import { Euro } from '../models/euro';
@Injectable({
  providedIn: 'root'
})


export class ApiService {
  // trae valores de cripto
 url:string='https://api.binance.com/api/v3/ticker/price';
 // trae consulta de criptos de base moneda
 url1:string='https://localhost:44336/api/CosultarCripto';
 // consulta saldo de cripto
 //url2: string='https://localhost:44336/api/ConsultarSaldoCripto?idCuenta={idCuenta}&moneda={moneda}';
 url2:string='https://localhost:44336/api/ConsultarSaldoCripto?idCuenta=';

 urlalta: string='https://localhost:44336/api/ConsultarSaldoCripto';
 
 url3: string='https://api.binance.com/api/v3/ticker/price?symbol=';
  // precio euro en linea
  url4: string='https://www.dolarsi.com/api/api.php?type=euro';

  // precio cripto en Euro
url5: string='https://api.binance.com/api/v3/ticker/price?symbol=';

constructor(private http: HttpClient) { }

 // obetener importe de criptps en api de binance
public  obtenerCripto():Observable<TipoCripto>{
  return this.http.get<TipoCripto>(this.url);
  }
  // valor del euro
  public  consultarEuro():Observable<any>{
    return this.http.get<any>(this.url4);
    }  
  // cripo en euro  
    public ConsultarPrecioCriptoEuro(money: string):Observable<TipoCripto>{
      return this.http.get<TipoCripto>(this.url5+money);
      
    } 


  // nomina de criptomonedas
  public  consultarCripto():Observable<Cripto>{
    return this.http.get<Cripto>(this.url1);
    }  
  // saldo de cuenta y moneda
  public consultarSaldo(idCuenta: number, moneda: string):Observable<Saldo> {
    return this.http.get<Saldo>(this.url2 + idCuenta+'&moneda='+moneda);
    

   }

// obtener valor de cripto en dolares
public ConsultarPrecioCripto(money: string):Observable<any>{
  return this.http.get<any>(this.url3+money);
} 


   // movimientos
   public agregarMovimiento(movimientos: Movimientos):Observable<Movimientos> {
    return this.http.post<Movimientos>(this.urlalta,movimientos);

   }


}



