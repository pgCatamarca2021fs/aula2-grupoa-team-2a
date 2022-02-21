import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { FondeoCajaComponent } from './pages/fondeoCaja/fondeoCaja.component';
import { ConvierteComponent } from './pages/convierte/convierte.component';


const routes: Routes = [{path: 'home' , component: HomeComponent},
{path: 'dashboard' , component: DashboardComponent},
{path: 'login' , component: LoginComponent},
{path: 'registro' , component: RegistroComponent},
{path: '' , redirectTo: '/home', pathMatch: 'full'},
{path: 'fondeo' , component:FondeoCajaComponent},
{path: 'convertir' , component:ConvierteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
