import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { FondeoCajaComponent } from './fondeoCaja/fondeoCaja.component';
import { ConvierteComponent } from './convierte/convierte.component';
import { BrowserModule } from '@angular/platform-browser';


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
    BrowserModule
  ],

  providers: [],

  bootstrap: [AppComponent],

  exports: [HomeComponent, DashboardComponent, LoginComponent, RegistroComponent,ConvierteComponent],

})
export class PagesModule { }
