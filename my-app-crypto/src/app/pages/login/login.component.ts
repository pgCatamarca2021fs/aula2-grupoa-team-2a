import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona.service';
import Swal from 'sweetalert2';

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

  constructor(private formBuilder: FormBuilder,
    private personaService: PersonaService) {

    this.form= this.formBuilder.group(
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
  }

  onSubmit(){

  }

  obtenerPersonaLogin(mail: string, pass: string) {

    console.log(mail,pass);
    this.personaService.obtenerPersonaPorId(mail, pass).subscribe(data => {
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
