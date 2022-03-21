import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioModel} from '../models';


@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

url = "https://localhost:44305/api/Usuario";


constructor(private http: HttpClient) {};

  onCrearUsuario (usuario: UsuarioModel) : Observable<UsuarioModel> {
    return this.http.post<UsuarioModel>(this.url, usuario);
  }

}