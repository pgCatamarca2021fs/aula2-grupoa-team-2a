import { Component, OnInit } from '@angular/core';
//import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.form= this.formBuilder.group(
      {
      password:['',[Validators.required, Validators.minLength(8)]],
      mail:['', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/)]]
     }
     )
    }

  get Mail()
  {
    return this.form.get("mail");
  }
  get Password()
  {
    return this.form.get("password");
  }
  get PasswordValid()
  {
    return this.Password?.touched && !this.Password?.valid;
  }
  get MailValid()
  {
    return this.Mail?.touched && !this.Mail?.valid;
  }

  ngOnInit(): void {
  }

}
