import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  public nombre: any;

  constructor(private router: Router) {}


  ngOnInit(): void {

    if (this.datosUsuario !== null){
      this.logeado = false;
    }

    if (this.datosUsuario !== null){
      this.idCuenta=this.datosUsuario.IdCuenta;
      this.nombre=this.datosUsuario.Nombre;
    }

    if (this.idCuenta == 0) {
      this.router.navigate(['/home']);
    }
    
}

logout(): void {
  localStorage.removeItem('currentUser');
  window.location.reload();
}


ponerIniciales(nameString: string) {
  const fullName : any = nameString.split(' ');
  const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
  return initials.toUpperCase();
}

  
}
