import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    AppRoutingModule
  ],
  exports: [HomeComponent, DashboardComponent, LoginComponent, RegistroComponent]
})
export class PagesModule { }
