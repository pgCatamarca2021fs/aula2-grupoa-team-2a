import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';
import Swal from 'sweetalert2';
import { UsuarioModel } from 'src/app/models';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  form: FormGroup;
  mail: any;
  pass: any;
  id: number | undefined;
  public datosUsuario: UsuarioModel = JSON.parse(localStorage.getItem('currentUser')!);
  public idUser: number = 0;



  constructor(private formBuilder: FormBuilder,
    private personaService: PersonaService,
    private router: Router) {


    this.form = this.formBuilder.group(
      {
        password: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\_\-]{8,20}$/,)]], // Letras, numeros, guion y guion_bajo, 8a 20 caracteres
        mail: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/)]],//Formato estandar Email
      })
  }

  //Getters
  get Mail() { return this.form.get("mail"); }
  get Password() { return this.form.get("password"); }

  //Validaciones
  get MailValid() { return this.Mail?.touched && !this.Mail?.valid; }
  get PasswordValid() { return this.Password?.touched && !this.Password?.valid; }

  ngOnInit(): void {
    //this.obtenerPersona();

    if (this.datosUsuario !== null) {
      this.idUser = this.datosUsuario.Id;
    }

    if (this.idUser > 0) {
      this.router.navigate(['/dashboard']);
      console.log("Ingresa" + this.idUser)
    }
    else {
      console.log("NO Ingresa" + this.idUser)
    }

  }

  onSubmit() {

  }

  obtenerPersonaLogin(mail: string, pass: string) {

    console.log(mail, pass);
    this.personaService.obtenerPersonaPorId(mail, pass).subscribe(data => {
      window.location.reload();
    }, error => {
      Swal.fire('Atencion', 'El email ingresado no existe', 'warning');
    })


    /* this.form.patchValue({
this.pass = this.form.get('password')?.value,
   this.personaService.obtenerPersona().subscribe(data => {
     console.log(data);
   }, error => {
     console.log(error);
   });*/
  }

}
