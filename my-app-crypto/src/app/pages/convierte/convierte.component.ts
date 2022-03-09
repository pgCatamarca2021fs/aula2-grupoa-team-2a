
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';




@Component({
  selector: 'app-convierte',
  templateUrl: './convierte.component.html',
  styleUrls: ['./convierte.component.css']
})



export class ConvierteComponent implements OnInit {


 criptos:any = [];

  constructor(private Apiservice:ApiService) { }

  ngOnInit() {

        this.Apiservice.obtenerCripto().subscribe(respuesta => {this.criptos=respuesta; console.log(this.criptos); });



  }



}
