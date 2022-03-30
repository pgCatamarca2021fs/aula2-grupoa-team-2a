import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  
  public logeado : boolean = true;
  public datosUsuario : UsuarioModel = JSON.parse(localStorage.getItem('currentUser')!);
  public idCuenta: number = 0;

  constructor() {}


  ngOnInit(): void {

    if (this.datosUsuario !== null){
      this.logeado = false;
    }

    if (this.datosUsuario !== null){
      this.idCuenta=this.datosUsuario.IdCuenta;
    }
 

    console.log(this.datosUsuario);
    console.log(this.logeado);
    console.log(this.idCuenta);

    }

}
  

