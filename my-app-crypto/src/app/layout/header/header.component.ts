import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsuarioModel } from 'src/app/models';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

message: string = 'editarPersona()';

@Output() messageEnvent = new EventEmitter<string>();


  public logeado : boolean = true;
  public datosUsuario : UsuarioModel = JSON.parse(localStorage.getItem('currentUser')!);
  public idUser: number = 0;

  constructor() {}

  sendMessage() {
    this.messageEnvent.emit(this.message);
  }


  ngOnInit(): void {

    if (this.datosUsuario !== null){
      this.logeado = false;
    }

    if (this.datosUsuario !== null){
      this.idUser=this.datosUsuario.Id;
    }


    console.log(this.datosUsuario);
    console.log(this.logeado);
    console.log(this.idUser);

    }

}


