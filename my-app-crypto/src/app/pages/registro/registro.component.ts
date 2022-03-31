import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona.service';
import Swal from 'sweetalert2';
import { Router, RouterLink } from '@angular/router';
import { UsuarioModel } from 'src/app/models';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {
  //global
  public datosUsuario : UsuarioModel = JSON.parse(localStorage.getItem('currentUser')!);
  public idUser: number = 0;
   //local
  listPersonas: any[] = [];
  usuarioEdit: any;
  usuario: any;
  accion = 'Agregar';
  id: any | undefined;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private personaService: PersonaService,
    private router: Router) {
    this.form = this.formBuilder.group(
      { //   /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/    dd-mm-yyyy
        //   /^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/    yyyy-mm-dd
        password: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\_\-]{8,20}$/,)]], // Letras, numeros, guion y guion_bajo, 8a 20 caracteres
        mail: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/)]],//Formato estandar Email
        cuil: ['', [Validators.required, Validators.pattern(/^\d[0-9]{10}$/)]], //solo números
        nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\s]{10,40}$/,)]],  // Letras y espacios, pueden llevar acentos.
        fecnac: ['', [Validators.required, Validators.pattern(/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/)]], //solo números con /
        telefono: ['', [Validators.required, Validators.pattern(/^\d[0-9]{9,14}$/)]], // 11 a 15 numeros.
        domicilio: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ0-9\s]{10,40}$/,)]], // Letras, numeros, guion y guion_bajo, 8 a 20 caracteres 10 max 40
        provincia: ['', [Validators.required, Validators.nullValidator]],
        pais: ['Argentina',[Validators.required]],
        banco: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{3,39}$/,)]], // Letras, numeros, 4 a 40 caracteres
        cbu: ['', [Validators.required, Validators.pattern(/^\d[0-9]{21}$/)]], //solo números
        acepto: [false,Validators.requiredTrue]
      })
  }

  //Getters
  get Mail() { return this.form.get("mail"); }
  get Password() { return this.form.get("password"); }
  get Cuil() { return this.form.get("cuil"); }
  get Nombre() { return this.form.get("nombre"); }
  get FecNac() { return this.form.get("fecnac"); }
  get Telefono() { return this.form.get("telefono"); }
  get Domicilio() { return this.form.get("domicilio"); }
  get Provincia() { return this.form.get("provincia"); }
  get Pais() { return this.form.get("pais")?.value; }
  get Banco() { return this.form.get("banco"); }
  get Cbu() { return this.form.get("cbu"); }
  get Acepto() { return this.form.get("acepto"); }

  //Validaciones
  get MailValid() { return this.Mail?.touched && !this.Mail?.valid; }
  get PasswordValid() { return this.Password?.touched && !this.Password?.valid; }
  get CuilValid() { return this.Cuil?.touched && !this.Cuil?.valid; }
  get NombreValid() { return this.Nombre?.touched && !this.Nombre?.valid; }
  get FecnacValid() { return this.FecNac?.touched && !this.FecNac?.valid; }
  get TelefonoValid() { return this.Telefono?.touched && !this.Telefono?.valid; }
  get DomicilioValid() { return this.Domicilio?.touched && !this.Domicilio?.valid; }
  get ProvinciaValid() { return this.Provincia?.touched && !this.Provincia?.valid; }
  get BancoValid() { return this.Banco?.touched && !this.Banco?.valid; }
  get CbuValid() { return this.Cbu?.touched && !this.Cbu?.valid; }

  ngOnInit(): void {
    this.obtenerPersona();
  }

  obtenerPersona() {
    this.personaService.obtenerPersona().subscribe(data => {
      console.log(data);
      this.usuarioEdit = data;
      this.listPersonas = data;
    }, error => {
      console.log(error);
    });
  }

  guardarPersona() {
      const usuario: any = {
      cuil : this.form.get("cuil")?.value,
      nombre : this.form.get("nombre")?.value,
      fnac : this.form.get("fecnac")?.value,
      domicilio : this.form.get("domicilio")?.value,
      idProvincia : this.form.get("provincia")?.value,
      pais : this.form.get("pais")?.value,
      tipo : "1",
      estado : "1",
      fechaAlta : new Date(),
      Cbu : this.form.get("cbu")?.value,
      Banco : this.form.get("banco")?.value,
      DniFrente: "1",
      DniDorso: "1",
      pass : this.form.get("password")?.value,
      mail : this.form.get("mail")?.value,
      telefono : this.form.get("telefono")?.value,
      }
      if (this.form.valid && this.id == undefined)
      {
       console.log("enviando al servidor");
       console.log(usuario);
       this.personaService.insertarPersona(usuario).subscribe(data => {
       Swal.fire('Agregar Registro', 'Datos guardados correctamente', 'success');
       this.form.reset();
       this.router.navigate(['/login'])
      }, error => {
        Swal.fire('Agregar Registro', 'ocurrió un error.', 'warning');
      })
    } else {
      if (this.form.valid && this.id != undefined)
      {
      console.log("enviando la modificacion al servidor ");
      this.personaService.modificarPersona(this.id, usuario).subscribe(data => {
      this.form.reset();
      this.accion = 'Agregar';
      this.id = undefined;
      Swal.fire('Editar Registro', 'Datos Actualizados correctamente', 'success');
      this.router.navigate(['/dashboard']);
      })
    }

  }
}

  editarPersona() {

    if (this.datosUsuario !== null) {
      this.accion = 'Editar';
      this.id = this.datosUsuario.Id;

    this.form.patchValue({
      mail :this.datosUsuario.Mail,
      password : this.datosUsuario.Pass,
      cuil : this.datosUsuario.Cuil,
      nombre : this.datosUsuario.Nombre,
      fecnac : this.datosUsuario.Fnac,
      telefono : this.datosUsuario.Telefono,
      domicilio : this.datosUsuario.Domicilio,
      provincia : this.datosUsuario.IdProvincia,
      banco : this.datosUsuario.Banco,
      cbu : this.datosUsuario.Cbu

    })

    }

  }
  /*
  eliminarPersona(id: number){
  this.miServicio.eliminarPersona(id).subscribe (data => {
     //this.toastr.error('El usuario fue eliminado con exito!, 'Borrar Usuario');
     this.obtenerPersona();
  }, error => {
    console.log(error)
  })*/

}
