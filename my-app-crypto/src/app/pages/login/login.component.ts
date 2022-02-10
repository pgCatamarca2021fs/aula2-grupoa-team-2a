import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

/*
const form = document.getElementById("form_login")
const email = document.getElementById("email")
const pass = document.getElementById("password")

form.addEventListener('submit', e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if(!regexEmail.test(email.value) || email.value === ""){
        warnings += "El email no es válido <br>"
        entrar = true
        console.log("email INVALIDO");
    } else {
        console.log("el email es valido");
        if(password.value.length < 8 || password.value === ""){
            warnings += "La contraseña no es válida<br>"
            entrar = true
            console.log("password INVALIDO");
        } else {
            console.log("password valido");
        }
    }

    if(entrar){
        document.getElementById("advertencia").innerHTML = warnings;
        console.log("no enviado, error en datos : "+warnings);
    }else{
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("advertencia").innerHTML = "";
        window.alert("Datos Cargados Correctamente!");

    }
})

*/
  constructor() { }

  ngOnInit(): void {
  }

}
