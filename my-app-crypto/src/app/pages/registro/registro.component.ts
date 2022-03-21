import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {

  listPersonas: any[] = [];
  usuarioEdit: any;
  usuario: any;
  accion = 'Agregar';
  id: number | undefined;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private personaService: PersonaService) {
    this.form = this.formBuilder.group(
      {
        password: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\_\-]{8,20}$/,)]], // Letras, numeros, guion y guion_bajo, 8a 20 caracteres
        mail: ['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/)]],//Formato estandar Email
        cuil: ['', [Validators.required, Validators.pattern(/^\d[0-9]{10}$/)]], //solo números
        nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\s]{10,40}$/,)]],  // Letras y espacios, pueden llevar acentos.
        fecnac: ['', [Validators.required, Validators.pattern(/^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/)]], //solo números con /
        telefono: ['', [Validators.required, Validators.pattern(/^\d[0-9]{9,14}$/)]], // 11 a 15 numeros.
        domicilio: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\s]{9,20}$/,)]], //minimo 10 max 20
        domicilio2: ['',[Validators.required]],
        cp: ['', [Validators.required, Validators.pattern(/^\d[0-9]{3}$/)]], //solo 5 numeros
        ciudad: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\s]{3,14}$/,)]], //minimo 4 max 15
        provincia: ['', [Validators.required, Validators.nullValidator]],
        pais: ['Argentina',[Validators.required]],
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
  get Domicilio2() { return this.form.get("domicilio2"); }
  get Cp() { return this.form.get("cp"); }
  get Ciudad() { return this.form.get("ciudad"); }
  get Provincia() { return this.form.get("provincia"); }
  get Pais() { return this.form.get("pais")?.value; }
  get Acepto() { return this.form.get("acepto"); }
  /*
  get Cbu(){return this.form.get("cbu");}
  get Bando(){return this.form.get("banco");}
  get DniFrente(){return this.form.get("dniFrente");}
  get DniDorso(){return this.form.get("dniDorso");}
  */
  //Validaciones
  get MailValid() { return this.Mail?.touched && !this.Mail?.valid; }
  get PasswordValid() { return this.Password?.touched && !this.Password?.valid; }
  get CuilValid() { return this.Cuil?.touched && !this.Cuil?.valid; }
  get NombreValid() { return this.Nombre?.touched && !this.Nombre?.valid; }
  get FecnacValid() { return this.FecNac?.touched && !this.FecNac?.valid; }
  get TelefonoValid() { return this.Telefono?.touched && !this.Telefono?.valid; }
  get DomicilioValid() { return this.Domicilio?.touched && !this.Domicilio?.valid; }
  //get Domicilio2Valid() { return this.Domicilio2?.touched && !this.Domicilio2?.valid; }
  get CpValid() { return this.Cp?.touched && !this.Cp?.valid; }
  get CiudadValid() { return this.Ciudad?.touched && !this.Ciudad?.valid; }
  get ProvinciaValid() { return this.Provincia?.touched && !this.Provincia?.valid; }
  /*
  get Cbu(){return this.form.get("cbu");}
  get Banco(){return this.form.get("banco");}
  get DniFrente(){return this.form.get("dniFrente");}
  get DniDorso(){return this.form.get("dniDorso");}
  */
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
      idProvincia : "1",
      pais : this.form.get("pais")?.value,
      tipo : "1",
      estado : "1",
      fechaAlta : new Date(),
      Cbu : "1",
      Banco : "1",
      DniFrente: "1",
      DniDorso: "1",
      pass : this.form.get("password")?.value,
      mail : this.form.get("mail")?.value,
      telefono : this.form.get("telefono")?.value,
      //domicilio2 : this.form.get("domicilio2")?.value,
      //cp : this.form.get("cp")?.value,
      //ciudad : this.form.get("ciudad")?.value,
    }
    console.log(usuario);
    if (this.form.valid)
    {
     console.log("enviando al servidor");

     //console.log(usuario);

     this.personaService.insertarPersona(usuario) .subscribe(data => {
         console.log(data);
         if (data.id >0)
         {
          alert("El registro ha sido creado satisfactoriamente. A continuación, por favor Inicie Sesión.");
          //this.router.navigate(['/login'])
         }
     })
    } else {
      console.log(this.Acepto);
      console.log(this.form.valid);
      this.form.markAllAsTouched();
    }
    //this.persona.push(persona);
    //alert('El usuario fue registrado correctamente!');
    //this.form.reset();
  }

  editarPersona(usuario: any) {
    this.accion = 'Editar';
    this.id = this.usuarioEdit.id;

    this.form.patchValue({
      mail :this.usuarioEdit.mail,
      pass : this.usuarioEdit.password,
      cuil : this.usuarioEdit.cuil,
      nombre : this.usuarioEdit.Nombre,
      fnac : this.usuarioEdit.fnac,
      telefono : this.usuarioEdit.telefono,
      domicilio : this.usuarioEdit.domicilio,
      domicilio2 : this.usuarioEdit.domicilio2,
      cp : this.usuarioEdit.cp,
      ciudad : this.usuarioEdit.ciudad,
      idProvincia : this.usuarioEdit.idProvincia

      //fechaAlta : new Date(),
      //Cbu : "1",
      //Banco : "1",
      //DniFrente: "1",
      //DniDorso: "1",
    })
    console.log(usuario);
    if (this.form.valid)
    {
     console.log("enviando al servidor la modificacion");

     console.log(usuario);
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
