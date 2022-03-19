import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/models';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})


export class RegistroComponent implements OnInit {

  form: FormGroup;
  usuario: any;

  constructor(private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router) {


    this.form = this.formBuilder.group(
      {
        password: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\_\-]{8,20}$/,)]], // Letras, numeros, guion y guion_bajo, 8a 20 caracteres
        mail: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/)]],//Formato estandar Email
        cuil: ['', [Validators.required, Validators.pattern(/^\d[0-9]{10}$/)]], //solo números
        nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\s]{10,40}$/,)]],  // Letras y espacios, pueden llevar acentos.
        fecnac: ['', [Validators.required, Validators.pattern(/^\d[0-9\-]{9}$/)]], //solo números
        telefono: ['', [Validators.required, Validators.pattern(/^\d[0-9]{9,14}$/)]], // 11 a 15 numeros.
        domicilio: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\s]{9,20}$/,)]], //minimo 10 max 20
        cp: ['', [Validators.required, Validators.pattern(/^\d[0-9]{3}$/)]], //solo 5 numeros
        ciudad: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\s]{3,14}$/,)]], //minimo 4 max 15
        provincia: ['', [Validators.required, Validators.nullValidator]],
        acepto: ['', [Validators.requiredTrue]]
      }
    )
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  //Getters
  get Mail() {
    return this.form.get("mail");
  }
  get Password() {
    return this.form.get("password");
  }
  get Cuil() {
    return this.form.get("cuil");
  }
  get Nombre() {
    return this.form.get("nombre");
  }
  get FecNac() {
    return this.form.get("fecnac");
  }
  get Telefono() {
    return this.form.get("telefono");
  }
  get Domicilio() {
    return this.form.get("domicilio");
  }
  get Cp() {
    return this.form.get("cp");
  }
  get Ciudad() {
    return this.form.get("ciudad");
  }
  get Provincia() {
    return this.form.get("provincia");
  }
  get Acepto() {
    return this.form.get("acepto");
  }

  get PasswordValid() {
    return this.Password?.touched && !this.Password?.valid;
  }
  get MailValid() {
    return this.Mail?.touched && !this.Mail?.valid;
  }
  get CuilValid() {
    return this.Cuil?.touched && !this.Cuil?.valid;
  }
  get NombreValid() {
    return this.Nombre?.touched && !this.Nombre?.valid;
  }
  get FecnacValid() {
    return this.FecNac?.touched && !this.FecNac?.valid;
  }
  get TelefonoValid() {
    return this.Telefono?.touched && !this.Telefono?.valid;
  }
  get DomicilioValid() {
    return this.Domicilio?.touched && !this.Domicilio?.valid;
  }
  get CpValid() {
    return this.Cp?.touched && !this.Cp?.valid;
  }
  get CiudadValid() {
    return this.Ciudad?.touched && !this.Ciudad?.valid;
  }
  get ProvinciaValid() {
    return this.Provincia?.touched && !this.Provincia?.valid;
  }
  get AceptoValid() {
    return this.Acepto?.touched && !this.Acepto?.valid;
  }

  onEnviar(event: Event): void {
    event.preventDefault();

    if (this.form.valid) {

      //   alert ("Enviando al servidor...");
      this.usuario = new UsuarioModel();
      this.usuario.nombre = this.form.controls["nombre"].value;
      this.usuario.pass = this.form.controls["password"].value;
      this.usuario.mail = this.form.controls["mail"].value;
      this.usuario.cuil = this.form.controls["cuil"].value;
      this.usuario.nombre = this.form.controls["nombre"].value;
      //this.usuario.fnac = this.form.controls["fecnac"].value;
      this.usuario.telefono = this.form.controls["telefono"].value;
      this.usuario.domicilio = this.form.controls["domicilio"].value;
      // this.usuario.cp = this.form.controls["cp"].value;
      // this.usuario.ciudad = this.form.controls["ciudad"].value;
      //this.usuario.idProvincia = this.form.controls["provincia"].value;
      console.log(this.usuario);

      this.usuarioService.onCrearUsuario(this.usuario).subscribe((data: UsuarioModel) => {

        if (this.usuario.nombre != null) {
          alert("El registro ha sido creado satisfactoriamente. A continuación, por favor Inicie Sesión.");
          this.router.navigate(['/login'])
        }
      })
    } else {
      this.form.markAllAsTouched();
    }

  }

}
