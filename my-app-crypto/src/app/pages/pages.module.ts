import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { FondeoCajaComponent } from './fondeoCaja/fondeoCaja.component';
import { ConvierteComponent } from './convierte/convierte.component';
import { BrowserModule } from '@angular/platform-browser';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule }  from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMomentDateModule }  from '@angular/material-moment-adapter';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    RegistroComponent,
    ConvierteComponent,
    FondeoCajaComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatMomentDateModule,
    BrowserModule,
    FormsModule
  ],

  providers: [],

  bootstrap: [AppComponent],

  exports: [HomeComponent, DashboardComponent, LoginComponent, RegistroComponent,ConvierteComponent],

})
export class PagesModule { }
