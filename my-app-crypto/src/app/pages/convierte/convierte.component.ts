

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


//import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { DataChartService } from 'src/app/services/data-chart.service';
import { AlertasService } from 'src/app/services/alertas.service';
import Swal from 'sweetalert2';






@Component({
  selector: 'app-convierte',
  templateUrl: './convierte.component.html',
  styleUrls: ['./convierte.component.css']
})



export class ConvierteComponent implements OnInit {


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

  movi: any = [];
  form: FormGroup;


  constructor(private Apiservice: ApiService, private fb: FormBuilder, private cotizacionDolar: DataChartService) {
    this.form = this.fb.group({
      monedaOrigen: [''],
      importeOrigen: [''],
      saldoDisponible: [''],
      cotizacion: [''],
      idMonedaOrigen: [''],
      monedaDestino: [''],
      importeDestino: [''],
      idMonedaDestino: ['']

    })
  }

  ngOnInit() {



    this.Apiservice.obtenerCripto().subscribe(respuesta => { this.criptos = respuesta; });
    this.cotizacionDolar.cotizacionDolar().subscribe(resp => { this.dolaroficial = resp.totalAsk; this.form.controls['cotizacion'].setValue(this.dolaroficial); });

    this.Apiservice.consultarCripto().subscribe(respuestaC => { this.cripto = respuestaC; });









  }
  altaMovimiento() {
    console.log(this.form);
    const movimiento: any = {
      idcuenta: 5,
      idMonedaOrigen: this.form.get('idMonedaOrigen')?.value,
      impoOrigen: this.form.get('importeOrigen')?.value,
      saldoDisponible: this.form.get('saldoDisponible')?.value,
      cotizacion: this.form.get('cotizacion')?.value,
      idMonedaDestino: this.form.get('idMonedaDestino')?.value,
      impoDestino: this.form.get('importeDestino')?.value,
      fecha: new Date(),
      estado: 1
    }
    console.log(this.form.value);
    //this.toastr.success('Hello world!', 'Toastr fun!');

    this.Apiservice.agregarMovimiento(movimiento).subscribe(alta => { this.movi = alta; })
    this.form.reset();
  }

  verSaldo(idCuenta: number, moneda: string) {
    console.log('idmoneda:' + moneda.substring(3));
    this.form.controls['idMonedaOrigen'].setValue(moneda.substring(3));
    return this.Apiservice.consultarSaldo(idCuenta, moneda.substring(0, 3)).subscribe(respuestaSaldo => { this.saldis = respuestaSaldo; this.form.controls['saldoDisponible'].setValue(this.saldis.Importe); if (this.saldis.Importe == 0) { Swal.fire('Atencion', 'No cuenta con saldo en la billereta seleccionada para efecturar operaciones', 'warning'); } });


  }

  calcularMonto(money: string) {
    console.log(money);
    //BTCUSDT
    //this.form.get('monedaDestino')?.value=
    this.form.controls['idMonedaDestino'].setValue(money.substring(3));

    if (this.form.get('monedaOrigen')?.value.substring(0, 3) == this.form.get('monedaDestino')?.value.substring(0, 3)) {
      this.form.controls['importeDestino'].setValue(this.form.get('importeOrigen')?.value);
      Swal.fire('Atencion', 'No puede realizar la compra de la misma moneda', 'warning');
    } else {

      if (this.form.get('monedaOrigen')?.value.substring(0, 3) == 'ARS') {
        // aqui tomar el valor de la cripto origen y el valor del euro convertir
        this.Apiservice.ConsultarPrecioCriptoEuro(this.form.get('monedaDestino')?.value.substring(0, 3) + 'EUR').subscribe(respuestaPrecio => {
          this.precioOr = respuestaPrecio;
          this.Apiservice.consultarEuro().subscribe(respuestaEuro => {
            this.euro = respuestaEuro; console.log(this.euro[0].casa.venta);

            this.form.controls['importeDestino'].setValue(this.form.get('importeOrigen')?.value / this.euro[0].casa.venta.replace(',', '.') / this.precioOr.price);

          });

        })
        // aqui se toma el valor del euro en Pesos

        //this.form.controls['importeDestino'].setValue(this.form.get('importeOrigen')?.value / this.euro[0].casa.venta / this.precioOr.price);

      } else {

        if (this.form.get('monedaDestino')?.value.substring(0, 3) == 'ARS') {
          // calcular todo en pesos
          this.Apiservice.ConsultarPrecioCriptoEuro(this.form.get('monedaOrigen')?.value.substring(0, 3) + 'EUR').subscribe(respuestaPrecio => {
            this.precioOr = respuestaPrecio;
            this.Apiservice.consultarEuro().subscribe(respuestaEuro => {
              this.euro = respuestaEuro; console.log(this.euro[0].casa.venta);

              this.form.controls['importeDestino'].setValue(this.form.get('importeOrigen')?.value * this.euro[0].casa.venta.replace(',', '.') * this.precioOr.price);

            });

          })
          // fin calculo todo en pesos

        } else {

          this.Apiservice.ConsultarPrecioCripto(this.form.get('monedaOrigen')?.value.substring(0, 3) + this.form.get('monedaDestino')?.value.substring(0, 3)).subscribe(respuestaPrecio => {
            this.precioOr = respuestaPrecio;
            this.udsOrigen = this.form.get('importeOrigen')?.value * this.precioOr.price; console.log(this.precioOr.price);
            this.form.controls['importeDestino'].setValue(this.udsOrigen);
          }, err => { Swal.fire('Error', 'No existe cotizacion de la moneda', 'error'); });

        }
      }





    }

  }



    onBlurEvent(event: any){
      if (event.target.value > this.form.get('saldoDisponible')?.value) {
        //console.log(event.target.value);
        //console.log('Error Saldo Disponible es menor a lo invertido');
        Swal.fire('Error', 'No dispone de saldo suficiente para realizar la operacion', 'error');
        this.form.controls['importeOrigen'].setValue('0');
      } else {
        console.log('importe ok');
      }


    }

  }
