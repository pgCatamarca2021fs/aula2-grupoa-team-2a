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
  public idUser: number = this.datosUsuario.Id;

  constructor() {}

  ngOnInit(): void {

    if (this.idUser > 0){
      this.logeado = false;
    }
 
    console.log(this.datosUsuario);
    console.log(this.logeado);
    console.log(this.idUser);

    }


}
  

