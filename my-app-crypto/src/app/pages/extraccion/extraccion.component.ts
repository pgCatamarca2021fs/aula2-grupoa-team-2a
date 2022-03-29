import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


//import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { DataChartService } from 'src/app/services/data-chart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-extraccion',
  templateUrl: './extraccion.component.html',
  styleUrls: ['./extraccion.component.css']
})
export class ExtraccionComponent implements OnInit {

  criptos: any = [];
  dolaroficial: any;
  cripto: any = [];
  public saldis: any = [];
  origenSeleccionado: string = '0';
  verSeleccion: string = '0';
  respuestaSaldo: any = [];
  precio: any;
  precioOr: any;
  respuestaPrecio: any = [];
  conversion: any;
  udsOrigen: any;
  error: any;
  euro: any = [];
  movi: any=[];
form1: FormGroup;

  constructor(private Apiservice:ApiService, private fb:FormBuilder, private cotizacionDolar: DataChartService) {
    this.form1=this.fb.group({
    
    
      impoOrigen:['']
      
  
    })

   }

  ngOnInit() {

    this.Apiservice.consultarSaldo(5, 'ARS').subscribe(respuestaSaldo => { this.saldis = respuestaSaldo; this.form1.controls['saldoDisponible'].setValue(this.saldis.Importe);  });

  }



  altaExtraccion() {

    if (this.saldis.Importe>=this.form1.get('impoOrigen')?.value ) {
      console.log(this.form1);
       const movimiento: any = {
        idcuenta:5,
        idMonedaOrigen:1007,
        impoOrigen:this.form1.get('impoOrigen')?.value,
        saldoDisponible:0,
        cotizacion:0,
        idMonedaDestino:1007,
        impoDestino:0,
        fecha:new Date(),
        estado:1
    }
    console.log(this.form1.value);
       //this.toastr.success('Hello world!', 'Toastr fun!');
       
         this.Apiservice.agregarMovimiento(movimiento).subscribe(alta => {this.movi=alta;   Swal.fire('Correcto', 'La Operacion se realizo Exitosamente', 'info');  });
         this.form1.reset(); 

  } else {
    this.form1.controls['impoOrigen'].setValue('0');
    Swal.fire('Error', 'No cuenta con saldo disponible para realizar la operacion', 'error');


  } 
     


  }

}
