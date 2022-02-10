
const form = document.getElementById("form_registro")
const email = document.getElementById("email")
const pass = document.getElementById("password")
const direccion = document.getElementById("direccion")
const direccion2 = document.getElementById("mna_dpto_piso")
const ciudad = document.getElementById("ciudad")
const provincia = document.getElementById("provincia")
const cp = document.getElementById("cp")
const acepto = document.getElementById("acepto")
const warnings = document.getElementById("advertencia")

/*const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    */

form.addEventListener('submit', e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false    
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let parrafo = ""

    if(!regexEmail.test(email.value) || email.value === ""){
        warnings += "El email no es válido <br>"
        entrar = true
        console.log("email INVALIDO");               
    } else {        
        if(pass.value.length < 8 || pass.value === ""){
            warnings += "La contraseña no es válida<br>"
            entrar = true
            console.log("password INVALIDO");
        } else {
            if(direccion.value.length < 8 || direccion.value === ""){
                warnings += "domicilio debe tener al menos 8 caracteres<br>"
                entrar = true
                console.log("direccion INVALIDA");
            } else {
                if(ciudad.value.length < 6 || ciudad.value === ""){
                    warnings += "Ciudad debe tener al menos 6 caracteres<br>"
                    entrar = true
                    console.log("ciudad INVALIDA");
                } else {
                    if(provincia.value === "Seleccione.." || provincia.value === ""){
                        warnings += "Seleccione una Provincia<br>"
                        entrar = true
                        console.log("debe seleccionar una provincia");
                    } else { 
                        if(cp.value.length < 4 || cp.value === ""){
                            warnings += "Código postal debe tener al menos 4 caracteres<br>"
                            entrar = true
                            console.log("cp INVALIDO");
                        } else { 
                            if(!acepto.checked){
                                warnings += "Acepte términos y condiciones para continuar<br>"
                                entrar = true
                                console.log("debe aceptar terminos y condiciones");
                            }else{
                                console.log("Validacion completa");
                            }
                        }
                    }
                }
            }
        }
    }
    
    if(entrar){            
        document.getElementById("advertencia").innerHTML = warnings;
        console.log("no enviado, error en datos : "+warnings);
    }else{
        email.value = "";
        pass.value = "";
        direccion.value = "";
        direccion2.value = "";
        ciudad.value = "";
        provincia.value = "Seleccione..";
        cp.value = "";
        acepto.checked = "false";
        warnings.innerHTML = "";        
        window.alert("Datos Cargados Correctamente!");

    }
})