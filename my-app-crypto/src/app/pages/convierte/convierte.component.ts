import { Component, OnInit } from '@angular/core';
//import { ApiService } from 'src/app/services/api.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-convierte',
  templateUrl: './convierte.component.html',
  styleUrls: ['./convierte.component.css']
})
export class ConvierteComponent implements OnInit {
   public listaCripto: any ;
 // public datos = Object.values(this.listaCripto);
  
  opcionSeleccionado: string  = '0'; // Iniciamos
  verSeleccion: string        = '';
  
  constructor(private Apiservice:HttpClient) { }

  capturar() {    this.verSeleccion = this.opcionSeleccionado;
  }

 
    

  ngOnInit(): void {
    this.cargarData();
    
  }

   public cargarData(){
     this.Apiservice.get('https://api.binance.com/api/v3/ticker/price')
     .subscribe(respuesta => {
       this.listaCripto=respuesta;})
   }

}
