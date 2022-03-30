import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


//import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { DataChartService } from 'src/app/services/data-chart.service';
import { UsuarioModel } from 'src/app/models';
import Swal from 'sweetalert2';

//import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-fondeoCaja',
  templateUrl: './fondeoCaja.component.html',
  styleUrls: ['./fondeoCaja.component.css']
})
export class FondeoCajaComponent implements OnInit {

  criptos:any = [];
 dolaroficial:any;
 cripto: any=[];
 public saldis: any=[];
 origenSeleccionado: string  = '0';
 verSeleccion: string ='0';
 respuestaSaldo: any=[];
 precio:any;
 precioOr:any;
 respuestaPrecio: any=[];
 conversion: any;
 udsOrigen: any;
 error: any;

movi: any=[];
form1: FormGroup;

public datosUsuario : UsuarioModel = JSON.parse(localStorage.getItem('currentUser')!);
  public idCuenta: number = 0;


constructor(private Apiservice:ApiService, private fb:FormBuilder, private cotizacionDolar: DataChartService) { 
  this.form1=this.fb.group({
    
    
    impoDestino:['']
    

  })
}

  ngOnInit() {
    if (this.datosUsuario !== null){
      this.idCuenta=this.datosUsuario.IdCuenta;
    }
  }

  altaDeposito() {
    console.log(this.form1);
     const movimiento: any = {
      idcuenta:this.idCuenta,
      idMonedaOrigen:12,
      impoOrigen:0,
      saldoDisponible:0,
      cotizacion:0,
      idMonedaDestino:12,
      impoDestino:this.form1.get('impoDestino')?.value,
      fecha:new Date(),
      estado:1
  }
  console.log(this.form1.value);
     //this.toastr.success('Hello world!', 'Toastr fun!');
     
       this.Apiservice.agregarMovimiento(movimiento).subscribe(alta => {this.movi=alta;});
       this.form1.reset(); 
     
   }


}
